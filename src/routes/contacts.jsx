import {
  Flex,
  Text,
  Box,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Root from "../components/root.jsx";
import { SearchIcon } from "@chakra-ui/icons";
import TableGenerator from "../components/tableGenerator";
import { setAuthToken, axiosInstance } from "../utilities/axiosInstance.jsx";
import Pagination from "../components/pagination";
import { Center, Spinner } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ActionPopUp from "../components/actionButtons/actionPopUp.jsx";
let dumyy = [
  {
    NAME: null,
    MOBILE_NO: null,
    EMAIL: null,
    TOPIC: null,
    DESCRIPTION: null,
    REGISTER_DATE: null,
  },
];

export default function Contact() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [id, setId] = useState("");
  const [action, setAction] = useState("");
  const [contactData, setContactData] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [dataLoaded, setDataLoaded] = useState(false);
  const storedValuesString = localStorage.getItem("myValues");
  const storedValues = JSON.parse(storedValuesString);
  const count = (storedValues && storedValues.contactus) || 0;
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleInputChange = (e) => {
    setSearchVal(e.target.value);
  };
  function putinDummy(obj, d) {
    let dataItem = {
      NAME: null,
      MOBILE_NO: null,
      EMAIL: null,
      TOPIC: null,
      DESCRIPTION: null,
    };
    dataItem.NAME = obj.name;
    dataItem.MOBILE_NO = obj.mobileNumber;
    dataItem.TOPIC = obj.topic;
    dataItem.EMAIL = obj["email"];
    dataItem.DESCRIPTION = obj.description;

    d.push(dataItem);
  }
  const fetch = async () => {
    const storedToken = localStorage.getItem("jwtToken"); // Fetch the stored token
    let url = `/superadmin/dataManagement/contactUs?page=${currentPage}&limit=10`;
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
          let obj = response.data.data.contactUs;
          let arr = Object.keys(obj);
          let dumm = [];
          arr.forEach((element) => {
            putinDummy(obj[element], dumm);
          });
          setContactData(true);
          setStateData(dumm);
        })
        .catch((error) => {
          // Handle error, e.g., unauthorized access
          setContactData(dumyy);
          setDataLoaded(true);
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
    <Root title="Contact Us">
      <Flex direction="column" mx="auto" mt="4">
        <Box alignSelf="flex-end">
          <ActionPopUp
            formName={"contacts"}
            action={action}
            modifyId={id}
            isOpen={dialogIsOpen}
            setIsOpen={setDialogIsOpen}
          />
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
          data={contactData}
          title="Contact"
          actionItems={["delete"]}
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
