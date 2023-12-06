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

export default function MenuAction({
  isOpen,
  closeHandler,
  modifyId,
  setIsOpen,
  formName,
}) {
  const [parentData, setParentData] = useState({});
  const [childData, setChildData] = useState([]);
  let childLevel;
  function menuOpenLogic() {
    if (formName === "state") childLevel = "District";
    else if (formName === "district") childLevel = "Tehsil";
    else childLevel = "Panchayat";
    // if data is already fetched no need to do again
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
              actionItems={[]}
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
}
