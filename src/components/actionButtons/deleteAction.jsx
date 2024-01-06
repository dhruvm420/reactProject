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
import { axiosInstance, setAuthToken } from "../axiosInstance";
import { useNavigate } from "react-router-dom";
export default function DeleteAction({
  isOpen,
  closeHandler,
  modifyId,
  formName,
  setIsOpen,
  parent,
}) {
  const navigate = useNavigate();
  let child;
  if (parent == "state") child = "district";
  else if (parent == "district") child = "tehsil";
  else if (parent == "tehsil") child = "panchayat";
  else child = "member";
  async function deleteLogic() {
    // delete modifyId user from formName-list
    const storedToken = localStorage.getItem("jwtToken"); // Fetch the stored token
    let url = `/superadmin/crud/${formName}/${modifyId}`;
    if (parent != "superadmin") url = `/${parent}/crud/${child}/${modifyId}`;
    if (storedToken) {
      // Set the token in the Axios headers before making the request
      setAuthToken(storedToken);

      // Make an authenticated request using axiosInstance
      await axiosInstance
        .delete(url)
        .then(() => {
          navigate(-1);
        })
        .catch((error) => {
          console.error("Error Deleting data:", error);
        });
    }
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
