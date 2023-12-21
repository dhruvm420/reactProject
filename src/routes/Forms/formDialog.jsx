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
export default function FormDialog({ title, isOpen, setIsOpen, type }) {
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
                if (type == "error") setIsOpen(false);
                else if (type == "state") navigate("/statelist");
                else if (type == "district") navigate("/districtlist");
                else if (type == "tehsil") navigate("/tehsillist");
                else if (type == "panchayat") navigate("/panchayatlist");
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
