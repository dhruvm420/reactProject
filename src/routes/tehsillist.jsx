import {
  Flex,
  Button,
  Box,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Pagination from "../components/pagination";
import TableGenerator from "../components/tableGenerator";
import { Link } from "react-router-dom";
import Root from "./root";
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
    "Total Panchayat": "2",
    DATE: "2023-09-09 13:24:09",
  },
];

export default function TehsilList() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [id, setId] = useState("");
  const [action, setAction] = useState("");
  const [tehsilData, setTehsilData] = useState(dummyData);
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
    const fetchTehsilData = async () => {
      // try {
      //   const response = await axios.get("YOUR_BACKEND_ENDPOINT_HERE");
      //   setTehsilData(response.data); // Assuming response.data contains the Tehsil data
      // } catch (error) {
      //   console.error("Error fetching Tehsil data:", error);
      //   // Handle error Tehsil here if needed
      // }
      setTehsilData(dummyData);
    };

    fetchTehsilData();
  }, []);

  return (
    <>
      <ActionPopUp
        formName={"tehsil"}
        action={action}
        modifyId={id}
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
      />
      <Root title="Tehsil List">
        <Flex direction="column" mx="auto" mt="4">
          <Box mx="auto">
            <Link to="/createTehsil">
              <Button colorScheme="teal" mb="4">
                Create Tehsil
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
            data={tehsilData}
            title="Tehsil"
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
