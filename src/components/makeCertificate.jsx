import { useState } from "react";
import bg from "../assets/certificate.png";
import sign from "../assets/sign.png";
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
import html2canvas from "html2canvas";
import { Box, Flex, Text, Button, Heading } from "@chakra-ui/react";
export default function MakeCertificate({ data }) {
  const [cardImage, setCardImage] = useState("");
  const [content, setContent] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const handleInputChange = (e) => {
    setContent(e.target.value);
  };
  const handleClose = () => {
    setIsOpen(!isOpen);
  };
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
            <Heading>{data.name}</Heading>
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
