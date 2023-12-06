import { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import html2canvas from "html2canvas";
import Root from "../../routes/root";
import bg from "../../assets/certificate.png";
import sign from "../../assets/sign.png";
import { Box, Flex, Text, Button, Heading } from "@chakra-ui/react";
export default function Certificate() {
  const { listName, userId } = useParams();
  const [cardImage, setCardImage] = useState("");
  const [userData, setUserData] = useState(false);
  const [content, setContent] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const handleInputChange = (e) => {
    setContent(e.target.value);
  };
  const handleClose = () => {
    setIsOpen(!isOpen);
  };
  let dummyData = {
    NAME: "RUPA BAI MARKAM",
    IMAGE: "https://skskf.in/userimg/IMG-20230627-WA0045_09152023162926.jpg",
    "Id No.": "64fc24a1d4a6a",
    Designation: "state co.ordinator CG",
    DOB: "29-10-1991",
    Mobile: "9691658557",
    "Register Date": "26-Sep-2022",
    "S/D/W of": "SAHEB DAS MANIKPURI",
    Address:
      "vill.+post.odiya khurd tah.s/lohara dist.kabirdham, , Chhattisgarh",
  };
  useEffect(() => {
    function fetchData() {
      // according to listName & userId , set user Data
      if (userData != false) return;
      setUserData(dummyData);
    }

    fetchData();

    return () => {};
  }, []);

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
      <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter Detail</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <Input
                type="text"
                name="content"
                borderColor="blue.500"
                value={content}
                onChange={handleInputChange}
                required
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleClose}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Flex mx="auto" p="4" flexDirection="column">
        <Flex
          flexDirection="column"
          justifyContent="center"
          backgroundImage={bg}
          backgroundPosition="center"
          backgroundSize="cover"
          w="1200px"
          px="16"
          pt="300px"
          id="certificate"
          h="840px"
          mx="auto"
        >
          <Box mx="auto">
            <Heading>{userData.NAME}</Heading>
          </Box>
          <Box>
            <Text fontSize="3xl" textAlign="center">
              has
            </Text>
            <Text fontSize="3xl" textAlign="center">
              {content}
            </Text>
          </Box>
          <Flex justifyContent="end" p="16">
            <Box my="4">
              <img src={sign} alt="" />
            </Box>
          </Flex>
        </Flex>
        <Box mx="auto" my="2">
          <Button onClick={handleDownload} w="10vw" colorScheme="teal">
            Download
          </Button>
        </Box>
      </Flex>
    </>
  );
}
