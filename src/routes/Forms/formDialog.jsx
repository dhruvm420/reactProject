import {
  Modal,
  ModalOverlay,
  ModalContent,
  Button,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export default function FormDialog({ title, isOpen, setIsOpen }) {
  const navigate = useNavigate();
  return (
    <>
      <Modal isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {title == "error" && <>Error</>}Submitting Form
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>{title}</ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                if (title == "error") setIsOpen(false);
                else if (title == "state") navigate("/statelist");
                else if (title == "district") navigate("/districtlist");
                else if (title == "tehsil") navigate("/tehsillist");
                else if (title == "panchayat") navigate("/panchayatlist");
              }}
            >
              Okay
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
