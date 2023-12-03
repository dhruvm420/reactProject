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
export default function DeleteOrVerify({
  action,
  formName,
  modifyId,
  isOpen,
  setIsOpen,
}) {
  function closeHandler() {
    setIsOpen(!isOpen);
  }
  function deleteLogic() {
    // delete modifyId from formName-list
    setIsOpen(!isOpen);
  }
  function verifyLogic() {
    // verify modifyId from formName-list
    setIsOpen(!isOpen);
  }
  return (
    <>
      <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={closeHandler}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{action}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold" mb="1rem">
              Are you sure you want to {action} the user?
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={closeHandler}>
              Close
            </Button>
            <Button
              colorScheme="red"
              onClick={action === "delete" ? deleteLogic : verifyLogic}
            >
              {action.toUpperCase()}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
