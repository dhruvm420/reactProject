import {
  Flex,
  Button,
  Box,
  Text,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Root from "./root";
import TableGenerator from "../components/tableGenerator";
import { setAuthToken, axiosInstance } from "../components/axiosInstance.jsx";
import { Link } from "react-router-dom";
import ActionPopUp from "../components/actionButtons/actionPopUp";
import { useState, useEffect } from "react";
import Pagination from "../components/pagination";
import { Center, Spinner } from "@chakra-ui/react";
export default function Donors() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [id, setId] = useState("");
  const [action, setAction] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const storedValuesString = localStorage.getItem("myValues");
  const storedValues = JSON.parse(storedValuesString);
  const count = (storedValues && storedValues.donations) || 0;
  const [dataLoaded, setDataLoaded] = useState(false);
  const [donorsData, setDonorsData] = useState([]);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleInputChange = (e) => {
    setSearchVal(e.target.value);
  };
  function putinDummy(obj, d) {
    let dataItem = {
      NAME: null,
      AMOUNT: null,
      EMAIL: null,
      "PAYMENT RECIEPT": null,
      MOBILE_NO: null,
    };
    dataItem.NAME = obj.name;
    dataItem.AMOUNT = obj.amount;
    dataItem.EMAIL = obj["email"];
    dataItem["PAYMENT RECIEPT"] = obj["photoLink"];
    dataItem.MOBILE_NO = obj["mobileNumber"];
  }
  const fetch = async () => {
    const storedToken = localStorage.getItem("jwtToken"); // Fetch the stored token
    let url = `/superadmin/dataManagement/donation?page=${currentPage}&limit=100`;
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
          let obj = response.data.data.donations;
          let arr = Object.keys(obj);
          let dumm = [];
          arr.forEach((element) => {
            putinDummy(obj[element], dumm);
          });
          setDonorsData(true);
          setStateData(dumm);
        })
        .catch((error) => {
          setDonorsData([
            {
              NAME: null,
              AMOUNT: null,
              EMAIL: null,
              "PAYMENT RECIEPT": null,
              MOBILE_NO: null,
            },
          ]);
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
    <Root title="Donors List">
      <Flex direction="column" mx="auto" mt="4">
        <ActionPopUp
          formName={"donation"}
          action={action}
          modifyId={id}
          isOpen={dialogIsOpen}
          setIsOpen={setDialogIsOpen}
        />
        <Box mx="auto">
          <Link to="/donationForm">
            <Button colorScheme="teal" mb="4">
              Add Donor
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
          data={donorsData}
          title="Donor"
          actionItems={["edit", "delete"]}
          setIsOpen={setDialogIsOpen}
          setAction={setAction}
          setId={setId}
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
