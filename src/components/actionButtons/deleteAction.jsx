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

export default function DeleteAction({
  isOpen,
  closeHandler,
  modifyId,
  formName,
  setIsOpen,
}) {
  function deleteLogic() {
    // delete modifyId user from formName-list
    setIsOpen(!isOpen);
  }
  return (
    <>
      <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={closeHandler}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold" mb="1rem">
              Are you sure you want to delete the user?
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={closeHandler}>
              Close
            </Button>
            <Button colorScheme="red" onClick={deleteLogic}>
              DELETE
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
