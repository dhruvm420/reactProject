import { useState } from "react";
import bg from "../assets/certificate.png";
import html2canvas from "html2canvas";
import { Box, Flex, Text, Button, Heading } from "@chakra-ui/react";
import { getCorrectDate } from "./date";
export default function MakeCertificate({ data }) {
  const [cardImage, setCardImage] = useState("");
  const content = (
    <>
      <p>
        has been appointed As SKSKF Has been duly trained during training
        session head on {getCorrectDate(data.joiningDate)} and has beet
        authorized to act as SKSKF with efect from{" "}
        {getCorrectDate(data.joiningDate)} until further notice.
      </p>
      <br />
      We wish you a healthy wealthy and successful life.
    </>
  );
  const handleDownload = () => {
    const idCardElement = document.getElementById("certificate");
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
        link.download = "certificate.png";
        link.click();
      });
    }
  };
  return (
    <>
      <Flex mx="auto" p="20px" flexDirection="column">
        <Flex
          flexDirection="column"
          justifyContent="end"
          backgroundImage={bg}
          backgroundPosition="center"
          backgroundSize="cover"
          w="1200px"
          px="40px"
          pt="300px"
          id="certificate"
          h="840px"
          mx="auto"
        >
          <Box mx="auto" mb="89px">
            <Text fontSize="25px">{data.name.toUpperCase()}</Text>
          </Box>
          <Box>
            <Text fontSize="20px" textAlign="center" mb="150px" px="120px">
              {content}
            </Text>
          </Box>
        </Flex>
        <Box mx="auto" my="2">
          <Button onClick={handleDownload} w="10vw" colorScheme="teal">
            <Text fontSize={["sm", "base", "lg"]}>Download</Text>
          </Button>
        </Box>
      </Flex>
    </>
  );
}
