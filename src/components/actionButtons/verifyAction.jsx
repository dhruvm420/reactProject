import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Text,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function VerifyAction({
  isOpen,
  closeHandler,
  modifyId,
  setIsOpen,
}) {
  function verifyLogic() {
    // verify modifyId user from unverified members
    setIsOpen(!isOpen);
  }
  return (
    <>
      <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={closeHandler}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Verify</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold" mb="1rem">
              Are you sure you want to verify the user?
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={closeHandler}>
              Close
            </Button>
            <Button colorScheme="red" onClick={verifyLogic}>
              VERIFY
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
