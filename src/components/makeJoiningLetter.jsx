import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import bg from "../assets/joining.png";
import html2canvas from "html2canvas";
import { getCorrectDate } from "../utilities/date";

export default function JoinLetter({ data, type }) {
  const [cardImage, setCardImage] = useState("");
  const date = new Date();
  const handleDownload = () => {
    const idCardElement = document.getElementById("appointment");
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
        link.download = "joining.png";
        link.click();
      });
    }
  };
  return (
    <Flex p="4" flexDirection="column" alignItems={"center"}>
      <Flex
        id="appointment"
        className="certificate_img"
        flexDirection="column"
        justifyContent="center"
        backgroundImage={bg}
        backgroundPosition="center"
        backgroundSize="cover"
        w="622px"
        h="900px"
        px="16"
        // pt="100px"   
        fontSize={"14px"}
      >
        <Box as="ul" listStyleType={"none"} mb="10px">
          <Text as="li">
            <strong>Date.</strong> {getCorrectDate(date)}
          </Text>
          <Text as="li">
            <strong>Mr/Mrs.</strong> {data.name}
          </Text>
          <Text as="li">
            <strong>C/o.</strong> {type}
          </Text>
          <Text as="li">
            <strong>Address.</strong> {data.addressResiding}
          </Text>
          <Text as="li">
            <strong>Dist. </strong>
            {data.cityResiding}
          </Text>
        </Box>
        <Text as="p">Dear sir/madam,</Text>
        <Text pl = "20px">
          On the basis of your appointment reference Code
          no. <strong>{data.assignCode}</strong> on
          execution performence of sksk foundation womens orgnization all
          project work on the foundation we are pleased to confirm your joining
          as <strong>{type} Coordinator </strong> on date <strong>{getCorrectDate(data.joiningDate)}</strong> according to the guideline terms
          & norms of sksk foundation. on you are instructed to maintain complete
          confidential about the data information of the sksk foundation your
          hard work and faith is most important your district & skskf in all
          project. in womens orgnization work we hope for the best.
        </Text>
      </Flex>
      <Box mx="auto" my="2">
        <Button onClick={handleDownload} w="10vw" colorScheme="teal">
          Download
        </Button>
      </Box>
    </Flex>
  );
}
/*
Date.........................
Mr/Mrs......................................... 
C/o...............................................
Add...............................................
Po................................................
Block.............................................
Dist...............................................
Pin...............................................


       
              
*/
