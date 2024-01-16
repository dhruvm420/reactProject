import { Flex, Box, Text, Button, list } from "@chakra-ui/react";
import qr from "../assets/qr.png";
import html2canvas from "html2canvas";
import bgFront from "../assets/member-front.png";
import bgBack from "../assets/member-back.png";
import { useState } from "react";
import Header from "../components/header";
import MemberFrontData from "../components/actionButtons/idCards/memberFrontData";
import MemberBackData from "../components/actionButtons/idCards/memberBackData";
export default function MemberID() {
  const userData = JSON.parse(localStorage.getItem("userKaData"));
  if (userData["fatherName"]) userData.sonOf = userData["fatherName"];
  const [cardImage, setCardImage] = useState("");
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
  return (
    <>
      <Header title={`ID Card`} noHamburger={true} />
      <Box mx="auto">
        <Flex flexDirection="column">
          <Flex
            justifyContent="space-around"
            py="8"
            wrap="wrap"
            mx="auto"
            id="id-card"
          >
            <Flex
              id="front-side"
              w="582px"
              h="350px"
              alignItems={"flex-end"}
              justifyContent={"space-between"}
              px="6"
              pb="16"
              backgroundImage={bgFront}
              backgroundPosition="center"
              backgroundSize="cover"
              m="1"
            >
              <Box w="300px">
                <MemberFrontData userData={userData} />
              </Box>
              <Box
                w="150px"
                h="150px"
                borderRadius="xl"
                overflow="auto"
                my="0"
                m="0"
              >
                <img
                  src={`https://sksk-backend.onrender.com/${userData.profilePictureLink}`}
                  alt="user-image"
                  crossOrigin="anonymous"
                />
              </Box>
            </Flex>
            <Flex
              id="back-side"
              backgroundImage={bgBack}
              w="582px"
              h="350px"
              alignItems={"center"}
              justifyContent={"space-between"}
              px="6"
              pb="20"
              backgroundPosition="center"
              backgroundSize="cover"
              m="1"
            >
              <Box w="300px">
                <MemberBackData userData={userData} />
              </Box>
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
            </Flex>
          </Flex>
          <Box textAlign="center" mt="4">
            <Button onClick={handleDownload} colorScheme="teal">
              <Text fontSize={["sm", "base", "lg"]}>Download ID Card</Text>
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
