import { useState } from "react";
import bg from "../assets/membercertificate.png";
import html2canvas from "html2canvas";
import { getCorrectDate } from "./date";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
export default function MemberCertificate({ data }) {
  const [cardImage, setCardImage] = useState("");
  let date = new Date();
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
      <Flex mx="auto" pt = "2" flexDirection="column">
        <Flex
          pt = "130px"
          flexDirection="column"
          backgroundImage={bg}
          backgroundPosition="center"
          backgroundSize="cover"
          w="600px"
          px="40px"
          id="certificate"
          h="840px"
          mx="auto"
        >
          <Flex justifyContent="flex-end">
            <Text>{getCorrectDate(date)}</Text>
          </Flex>
          <Flex justifyContent={"center"} pt="70px">
            <Text w = "170px">{data.name}</Text>
            <Text w = "170px" position={"relative"} left="70px">{data.fatherName}</Text>
          </Flex>
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
