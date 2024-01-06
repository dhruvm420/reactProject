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
import EditForm from "./editForm";
export default function EditAction({
  isOpen,
  closeHandler,
  parent,
  modifyId,
  formName,
}) {
  return (
    <>
      <Modal
        size="6xl"
        blockScrollOnMount={true}
        isOpen={isOpen}
        onClose={closeHandler}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit {formName}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <EditForm
              formName={formName}
              modifyId={modifyId}
              onClose={closeHandler}
              parent={parent}
            />
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
