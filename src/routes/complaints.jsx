import Root from "../components/root.jsx";
import {
  Flex,
  Text,
  Box,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import TableGenerator from "../components/tableGenerator";
import Pagination from "../components/pagination";
import { useParams } from "react-router-dom";
import { setAuthToken, axiosInstance } from "../utilities/axiosInstance.jsx";
import { useState, useEffect } from "react";
import { Center, Spinner } from "@chakra-ui/react";
let dummyy = [
  {
    NAME: null,
    MESSAGE: null,
    DESCRIPTION: null,
    "REGISTER DATE": null,
    Status: null,
  },
];

export default function Complaints() {
  const [currentPage, setCurrentPage] = useState(1);
  const [complaintsData, setComplaintsData] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [dataLoaded, setDataLoaded] = useState(false);
  const storedValuesString = localStorage.getItem("myValues");
  const storedValues = JSON.parse(storedValuesString);
  const count = (storedValues && storedValues.complaints) || 0;
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleInputChange = (e) => {
    setSearchVal(e.target.value);
  };
  function putinDummy(obj, d) {
    let dataItem = {
      NAME: null,
      MESSAGE: null,
      DESCRIPTION: null,
      MOBILE: null,
      IMAGE: null,
    };
    dataItem.NAME = obj.name;
    dataItem.MESSAGE = obj["message"];
    dataItem.MOBILE = obj.mobileNumber;
    dataItem.IMAGE =
      "https://sksk-backend.onrender.com/" + obj["uploadDocumentLink"];
    dataItem.DESCRIPTION = obj["description"];

    d.push(dataItem);
  }
  const fetch = async () => {
    const storedToken = localStorage.getItem("jwtToken"); // Fetch the stored token
    let url = `/superadmin/dataManagement/complaint?page=${currentPage}&limit=10`;
    // if (searchVal != "")
    // url = `/superadmin/crud/search?roleName=state&searchQuery=${searchVal}&page=${currentPage}&limit=10`;
    if (storedToken) {
      // Set the token in the Axios headers before making the request
      setAuthToken(storedToken);

      // Make an authenticated request using axiosInstance
      await axiosInstance
        .get(url)
        .then((response) => {
          console.log(response);
          let obj = response.data.data.complaints;
          let arr = Object.keys(obj);
          let dumm = [];
          arr.forEach((element) => {
            putinDummy(obj[element], dumm);
          });
          setDataLoaded(true);
          setComplaintsData(dumm);
        })
        .catch((error) => {
          setComplaintsData(dummyy);
          setDataLoaded(true);
          // Handle error, e.g., unauthorized access
          console.error("Error fetching data:", error);
        });
    }
  };
  useEffect(() => {
    fetch();
  }, [searchVal, currentPage]);

  if (!dataLoaded)
    return (
      <>
        <Center height="100vh">
          <Spinner size="xl" color="blue.500" />
          <Text px="2"> Loading... </Text>
        </Center>
      </>
    );
  return (
    <Root title="Complaints">
      <Flex direction="column" mx="auto" mt="4">
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
          data={complaintsData}
          title="Complaints "
          actionItems={["delete"]}
        />
        <Pagination
          handlePageChange={handlePageChange}
          currentPage={currentPage}
          totalPages={count < 10 ? 1 : Math.ceil(count / 10)}
        />
      </Flex>
    </Root>
  );
}
