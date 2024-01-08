import {
  Flex,
  Box,
  Text,
  Button,
  list,
  Center,
  Spinner,
} from "@chakra-ui/react";
import Root from "../../../routes/root";
import FrontID from "./frontID";
import BackID from "./backID";
import bg from "../../../assets/bg.png";
import qr from "../../../assets/qr.png";
import seal from "../../../assets/sksk_seal.png";
import sign from "../../../assets/sign.png";
import p from "../../../assets/p.jpg";
import html2canvas from "html2canvas";
import { useEffect, useState } from "react";
import { getCorrectDate } from "../../date";
import { axiosInstance, setAuthToken } from "../../axiosInstance";
export default function IDCard({ userId, listName }) {
  const [cardImage, setCardImage] = useState("");
  const [dataLoaded, setDataLoaded] = useState(false);
  const [userData, setUserData] = useState(null);
  const fetch = async () => {
    const storedToken = localStorage.getItem("jwtToken"); // Fetch the stored token
    let url = `/superadmin/crud/${listName}/${userId}`;
    if (storedToken) {
      // Set the token in the Axios headers before making the request
      setAuthToken(storedToken);

      // Make an authenticated request using axiosInstance
      await axiosInstance
        .get(url)
        .then((response) => {
          console.log(response);
          let obj = response.data.data.response;
          setUserData(obj[0]);
          setDataLoaded(true);
        })
        .catch((error) => {
          setDataLoaded(true);
          // Handle error, e.g., unauthorized access
          console.error("Error fetching data:", error);
        });
    }
  };
  useEffect(() => {
    fetch();
  }, []);
  const handleDownload = () => {
    const idCardElement = document.getElementById("id-card");
    if (idCardElement) {
      html2canvas(idCardElement, {
        allowTaint: true,
        useCORS: true,
        scrollX: 0,
        scrollY: 0,
        windowWidth: document.documentElement.offsetWidth,
        windowHeight: document.documentElement.offsetHeight,
      }).then((canvas) => {
        const dataUrl = canvas.toDataURL("image/png");
        setCardImage(dataUrl);
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "id-card.png";
        link.click();
      });
    }
  };
  if (!dataLoaded)
    return (
      <>
        <Center height="100vh">
          <Spinner size="xl" color="blue.500" />
          <Text px="2"> Loading... </Text>
        </Center>
      </>
    );
  return (
    <>
      <Root title="ID Card">
        <Box mx="auto">
          <Flex flexDirection="column">
            <Flex
              justifyContent="space-around"
              py="8"
              wrap="wrap"
              mx="auto"
              id="id-card"
            >
              <Flex flexDirection="column">
                <Flex
                  id="front-side"
                  w="360px"
                  h="550px"
                  flexDirection="column"
                  justifyContent="end"
                  px="6"
                  pb="8"
                  backgroundImage={bg}
                  backgroundPosition="center"
                  backgroundSize="cover"
                >
                  <Box
                    w="150px"
                    h="150px"
                    borderRadius="xl"
                    overflow="auto"
                    margin="auto"
                    my="0"
                  >
                    <img
                      src={`https://sksk-backend.onrender.com/${userData.profilePictureLink}`}
                      alt="user-image"
                      crossOrigin="anonymous"
                      // crossorigin="anonymous"
                    />
                  </Box>
                  <Text fontSize="xl" my="1" px="2" textAlign="center">
                    {userData.name}
                  </Text>
                  <FrontID userData={userData} />
                  <Flex justifyContent="end">
                    <img src={sign} alt="" width="90px" />
                  </Flex>
                </Flex>
              </Flex>
              <Flex flexDirection="column" mx="4">
                <Flex
                  id="back-side"
                  w="360px"
                  h="550px"
                  flexDirection="column"
                  justifyContent="end"
                  px="6"
                  pb="8"
                  backgroundImage={bg}
                  backgroundPosition="center"
                  backgroundSize="cover"
                >
                  <Box
                    w="150px"
                    h="150px"
                    borderRadius="xl"
                    overflow="auto"
                    margin="auto"
                    my="0"
                  >
                    <img src={qr} alt="user-image" />
                  </Box>
                  <BackID userData={userData} />
                  <Flex justifyContent="end">
                    <img src={seal} alt="" width="90px" />
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Box textAlign="center" mt="4">
              <Button onClick={handleDownload} colorScheme="teal">
                Download ID Card
              </Button>
            </Box>
          </Flex>
        </Box>
      </Root>
    </>
  );
}
