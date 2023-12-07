import {
  Flex,
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Root from "./root";
import TableGenerator from "../components/tableGenerator";
import Pagination from "../components/pagination";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ActionPopUp from "../components/actionButtons/actionPopUp";
import { SearchIcon } from "@chakra-ui/icons";
let dummyData = [
  {
    "USER ID": "0134",
    IMAGE: "https://skskf.in/userimg/IMG-20230627-WA0045_09152023162926.jpg",
    NAME: "KESHAW DAS",
    EMAIL: "keshawkwd666@gmail.com",
    DESIGNATION: "s./lohara",
    DATE: "2023-09-09 13:24:09",
  },
];

export default function PanchayatList() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [id, setId] = useState("");
  const [action, setAction] = useState("");
  const [panchayatData, setPanchayatData] = useState(dummyData);
  const [searchVal, setSearchVal] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleInputChange = (e) => {
    setSearchVal(e.target.value);
    // You can perform filtering or any other actions based on the search value here
  };
  useEffect(() => {
    const fetchPanchayatData = async () => {
      // try {
      //   const response = await axios.get("YOUR_BACKEND_ENDPOINT_HERE");
      //   setPanchayatData(response.data); // Assuming response.data contains the Panchayat data
      // } catch (error) {
      //   console.error("Error fetching Panchayat data:", error);
      //   // Handle error Panchayat here if needed
      // }
      setPanchayatData(dummyData);
    };

    fetchPanchayatData();
  }, []);
  return (
    <>
      <ActionPopUp
        formName={"panchayat"}
        action={action}
        modifyId={id}
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
      />
      <Root title="Panchayat List">
        <Flex direction="column" mx="auto" mt="4">
          <Box mx="auto">
            <Link to="/createPanchayat">
              <Button colorScheme="teal" mb="4">
                Create Panchayat
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
            data={panchayatData}
            title="Panchayat"
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
