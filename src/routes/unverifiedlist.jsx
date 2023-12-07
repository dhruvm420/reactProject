import {
  Flex,
  Box,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import TableGenerator from "../components/tableGenerator";
import { useState, useEffect } from "react";
import ActionPopUp from "../components/actionButtons/actionPopUp";
import Root from "./root";
let dummyData = [
  {
    USER_ID: "0226",
    COORDINATOR_ID: "650166793dcec",
    NAME: "KESHAW DAS",
    MOBILE: "9999889999",
    CITY: "Kawardha",
    DATE: "2023-09-09 13:24:09",
  },
  {
    USER_ID: "0227",
    COORDINATOR_ID: "650166793dcec",
    NAME: "GOPAL DAS",
    MOBILE: "9999889999",
    CITY: "Kawardha",
    DATE: "2023-09-09 13:24:09",
  },
  {
    USER_ID: "0226",
    COORDINATOR_ID: "650166793dcec",
    NAME: "KESHAW DAS",
    MOBILE: "9999889999",
    CITY: "Kawardha",
    DATE: "2023-09-09 13:24:09",
  },
];

export default function UnVerifiedList() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [id, setId] = useState("");
  const [action, setAction] = useState("");
  const [unVerifiedData, setUnVerifiedData] = useState(dummyData);
  const [searchVal, setSearchVal] = useState("");
  const handleInputChange = (e) => {
    setSearchVal(e.target.value);
    // You can perform filtering or any other actions based on the search value here
  };
  useEffect(() => {
    const fetchUnVerifiedData = async () => {
      // try {
      //   const response = await axios.get("YOUR_BACKEND_ENDPOINT_HERE");
      //   setUnVerifiedData(response.data); // Assuming response.data contains the UnVerified data
      // } catch (error) {
      //   console.error("Error fetching UnVerified data:", error);
      //   // Handle error UnVerified here if needed
      // }
      setUnVerifiedData(dummyData);
    };

    fetchUnVerifiedData();
  }, []);
  return (
    <Root title="Unverified Members">
      <Flex direction="column" mx="auto" mt="4">
        <ActionPopUp
          formName={"unverified"}
          action={action}
          modifyId={id}
          isOpen={dialogIsOpen}
          setIsOpen={setDialogIsOpen}
        />
        <Box alignSelf="flex-end">
          <InputGroup my="2">
            <InputRightElement pointerEvents="none">
              <SearchIcon />
            </InputRightElement>
            <Input
              placeholder="Search"
              value={searchVal}
              onChange={handleInputChange}
            />
          </InputGroup>
        </Box>
        <TableGenerator
          data={unVerifiedData}
          title="Unverified Members"
          setIsOpen={setDialogIsOpen}
          setAction={setAction}
          setId={setId}
          actionItems={["verify", "delete"]}
        />
      </Flex>
    </Root>
  );
}
