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
import { useState } from "react";
import TableGenerator from "../tableGenerator";
import EditForm from "./editForm";
export default function ActionPopUp({
  action,
  formName,
  modifyId,
  isOpen,
  setIsOpen,
}) {
  const [parentData, setParentData] = useState({});
  const [childData, setChildData] = useState([]);
  let childLevel;
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
  function menuOpenLogic() {
    if (formName === "state") childLevel = "District";
    else if (formName === "district") childLevel = "Tehsil";
    else childLevel = "Panchayat";
    if (childData.length !== 0) return;
    // get parent data from modifyId
    setParentData({
      "USER ID": "0134",
      IMAGE: "https://skskf.in/userimg/IMG-20230627-WA0045_09152023162926.jpg",
      NAME: "KESHAW DAS",
      EMAIL: "keshawkwd666@gmail.com",
      DESIGNATION: "s./lohara",
      "Total District": "2",
      DATE: "2023-09-09 13:24:09",
    });

    // get child data , i.e ,if formName is state, get data of people under state member with id 'modifyId'
    setChildData([
      {
        "USER ID": "0134",
        IMAGE:
          "https://skskf.in/userimg/IMG-20230627-WA0045_09152023162926.jpg",
        NAME: "KESHAW DAS",
        EMAIL: "keshawkwd666@gmail.com",
        DESIGNATION: "s./lohara",
        "Total District": "2",
        DATE: "2023-09-09 13:24:09",
      },
      {
        "USER ID": "0134",
        IMAGE:
          "https://skskf.in/userimg/IMG-20230627-WA0045_09152023162926.jpg",
        NAME: "KESHAW DAS",
        EMAIL: "keshawkwd666@gmail.com",
        DESIGNATION: "s./lohara",
        "Total District": "2",
        DATE: "2023-09-09 13:24:09",
      },
      {
        "USER ID": "0134",
        IMAGE:
          "https://skskf.in/userimg/IMG-20230627-WA0045_09152023162926.jpg",
        NAME: "KESHAW DAS",
        EMAIL: "keshawkwd666@gmail.com",
        DESIGNATION: "s./lohara",
        "Total District": "2",
        DATE: "2023-09-09 13:24:09",
      },
    ]);
  }
  if (action === "menu") {
    menuOpenLogic();
    return (
      <>
        <Modal
          size="8xl"
          blockScrollOnMount={true}
          isOpen={isOpen}
          onClose={closeHandler}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              {parentData.NAME}({childLevel})
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <TableGenerator
                data={childData}
                title={childLevel}
                setIsOpen={() => {}}
                setAction={() => {}}
                setId={() => {}}
              />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={closeHandler}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  } else if (action === "edit")
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
            <ModalHeader>
              {action} {formName}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <EditForm
                formName={formName}
                modifyId={modifyId}
                onClose={closeHandler}
              />
            </ModalBody>

            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );

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
