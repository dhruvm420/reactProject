import {
  Flex,
  Box,
  Text,
  Button,
  list,
  Center,
  Spinner,
} from "@chakra-ui/react";
import Root from "../../root";
import FrontID from "./frontID";
import BackID from "./backID";
import qr from "../../../assets/qr.png";
import state_front from "../../../assets/state-front.png";
import state_back from "../../../assets/state-back.jpg";
import district_front from "../../../assets/district-front.png";
import district_back from "../../../assets/district-back.jpg";
import tehsil_front from "../../../assets/tehsil-front.png";
import tehsil_back from "../../../assets/tehsil-back.jpg";
import panchayat_front from "../../../assets/panchayat-front.png";
import panchayat_back from "../../../assets/panchayat-back.jpg";
import html2canvas from "html2canvas";
import { useEffect, useState } from "react";
import { getCorrectDate } from "../../../utilities/date";
import { axiosInstance, setAuthToken } from "../../../utilities/axiosInstance";
import { baseUrl } from "../../../utilities/baseURL";
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
  let bg_front, bg_back;
  if (listName == "state") {
    bg_front = state_front;
    bg_back = state_back;
  } else if (listName == "district") {
    bg_front = district_front;
    bg_back = district_back;
  } else if (listName == "tehsil") {
    bg_front = tehsil_front;
    bg_back = tehsil_back;
  } else if (listName == "panchayat") {
    bg_front = panchayat_front;
    bg_back = panchayat_back;
  }
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
              px="2"
              wrap="wrap"
              mx="auto"
              id="id-card"
            >
              <Flex flexDirection="column">
                <Flex
                  id="front-side"
                  w="340px"
                  h="550px"
                  flexDirection="column"
                  justifyContent="end"
                  px="6"
                  pb="24"
                  backgroundImage={bg_front}
                  backgroundPosition="cover"
                  backgroundSize="cover"
                >
                  <Box borderRadius="xl" overflow="auto" margin="auto" my="0">
                    <img
                      src={`${baseUrl}/${userData.profilePictureLink}`}
                      alt="user-image"
                      style={{
                        width: "140px",
                        height: "140px",
                      }}
                      crossOrigin="anonymous"
                      // crossorigin="anonymous"
                    />
                  </Box>
                  <Text fontSize="xl" my="1" px="2" textAlign="center">
                    {userData.name.toUpperCase()}
                  </Text>
                  <FrontID userData={userData} />
                </Flex>
              </Flex>
              <Flex flexDirection="column" mx="4">
                <Flex
                  id="back-side"
                  w="340px"
                  h="550px"
                  flexDirection="column"
                  justifyContent="center"
                  px="6"
                  pb="14"
                  backgroundImage={bg_back}
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
                    p="2"
                  >
                    <img src={qr} alt="user-image" />
                  </Box>
                  <BackID userData={userData} />
                </Flex>
              </Flex>
            </Flex>
            <Box textAlign="center" mt="4">
              <Button onClick={handleDownload} colorScheme="teal">
                <Text fontSize={["sm", "base", "lg"]}>Download ID Card</Text>
              </Button>
            </Box>
          </Flex>
        </Box>
      </Root>
    </>
  );
}
