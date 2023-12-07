import {
  Flex,
  Box,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Root from "./root";
import TableGenerator from "../components/tableGenerator";
import { useState, useEffect } from "react";
import ActionPopUp from "../components/actionButtons/actionPopUp";
import { SearchIcon } from "@chakra-ui/icons";
let dummyData = [
  {
    USER_ID: "0226",
    NAME: "KESHAW DAS",
    MOBILE: "9999889999",
    CITY: "Kawardha",
    AUTHORITY: "Member",
  },
  {
    USER_ID: "0227",
    NAME: "GOPAL DAS",
    MOBILE: "9999889999",
    CITY: "Kawardha",
    AUTHORITY: "Member",
  },
  {
    USER_ID: "0226",
    NAME: "KESHAW DAS",
    MOBILE: "9999889999",
    CITY: "Kawardha",
    AUTHORITY: "Member",
  },
];

export default function VerifiedList() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [id, setId] = useState("");
  const [action, setAction] = useState("");
  const [verifiedData, setVerifiedData] = useState(dummyData);
  const [searchVal, setSearchVal] = useState("");
  const handleInputChange = (e) => {
    setSearchVal(e.target.value);
    // You can perform filtering or any other actions based on the search value here
  };
  useEffect(() => {
    const fetchVerifiedData = async () => {
      // try {
      //   const response = await axios.get("YOUR_BACKEND_ENDPOINT_HERE");
      //   setVerifiedData(response.data); // Assuming response.data contains the Verified data
      // } catch (error) {
      //   console.error("Error fetching Verified data:", error);
      //   // Handle error Verified here if needed
      // }
      setVerifiedData(dummyData);
    };

    fetchVerifiedData();
  }, []);
  return (
    <Root title="Verified Members">
      <Flex direction="column" mx="auto" mt="4">
        <ActionPopUp
          formName={"verified"}
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
          data={verifiedData}
          title="Verified Members"
          setIsOpen={setDialogIsOpen}
          setAction={setAction}
          setId={setId}
          actionItems={["id", "certificate", "appointment", "delete", "edit"]}
        />
      </Flex>
    </Root>
  );
}
