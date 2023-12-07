import {
  Flex,
  Box,
  Input,
  Text,
  InputGroup,
  Button,
  InputRightElement,
} from "@chakra-ui/react";
import Root from "./root";
import { Link } from "react-router-dom";
import TableGenerator from "../components/tableGenerator";
import { useState, useEffect } from "react";
import ActionPopUp from "../components/actionButtons/actionPopUp";
import { SearchIcon } from "@chakra-ui/icons";
import axios from "axios";
import Pagination from "../components/pagination";
let dummyData = [
  {
    "USER ID": "0134",
    IMAGE: "https://skskf.in/userimg/IMG-20230627-WA0045_09152023162926.jpg",
    NAME: "KESHAW DAS",
    EMAIL: "keshawkwd666@gmail.com",
    DESIGNATION: "s./lohara",
    "Total District": "2",
    DATE: "2023-09-09 13:24:09",
  },
];

export default function StateList() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [id, setId] = useState("");
  const [action, setAction] = useState("");
  const [stateData, setStateData] = useState(dummyData);
  const [searchVal, setSearchVal] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleInputChange = (e) => {
    setSearchVal(e.target.value);
  };
  useEffect(() => {
    const fetchStateData = async () => {
      // try {
      //   const response = await axios.get("YOUR_BACKEND_ENDPOINT_HERE");
      //   setStateData(response.data); // Assuming response.data contains the state data
      // } catch (error) {
      //   console.error("Error fetching state data:", error);
      //   // Handle error state here if needed
      // }
      setStateData(dummyData);
    };

    fetchStateData();
  }, []);

  return (
    <>
      <ActionPopUp
        formName={"state"}
        action={action}
        modifyId={id}
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
      />
      <Root title="State List">
        <Flex direction="column" mx="auto" mt="4">
          <Box mx="auto">
            <Link to="/createState">
              <Button colorScheme="teal" mb="4">
                Create State
              </Button>
            </Link>
          </Box>
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
            data={stateData}
            title="State"
            setIsOpen={setDialogIsOpen}
            setAction={setAction}
            setId={setId}
            actionItems={["id", "delete", "menu", "edit"]}
          />
          <Pagination
            handlePageChange={handlePageChange}
            currentPage={currentPage}
          />
        </Flex>
      </Root>
    </>
  );
}
