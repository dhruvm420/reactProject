import {
  Flex,
  Box,
  Button,
  Text,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { getCorrectDate } from "../components/date.jsx";
import { Center, Spinner } from "@chakra-ui/react";
import Root from "./root";
import TableGenerator from "../components/tableGenerator";
import Pagination from "../components/pagination";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ActionPopUp from "../components/actionButtons/actionPopUp";
import { SearchIcon } from "@chakra-ui/icons";
import { setAuthToken, axiosInstance } from "../components/axiosInstance.jsx";
export default function PanchayatList() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [id, setId] = useState("");
  const [action, setAction] = useState("");
  const [panchayatData, setPanchayatData] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [dataLoaded, setDataLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const storedValuesString = localStorage.getItem("myValues");
  const storedValues = JSON.parse(storedValuesString);
  const count = (storedValues && storedValues.panchayat) || 0;
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleInputChange = (e) => {
    setSearchVal(e.target.value);
    // You can perform filtering or any other actions based on the search value here
  };
  function putinDummy(obj, d) {
    let dataItem = {};
    dataItem["USER NAME"] = obj["userName"];
    dataItem["USER ID"] = obj["_id"];
    dataItem.IMAGE =
      "https://sksk-backend.onrender.com/" + obj["profilePictureLink"];
    dataItem.NAME = obj.name;
    dataItem.EMAIL = obj["email"];
    dataItem.DESIGNATION = obj["designation"];
    dataItem.DATE = getCorrectDate(obj["joiningDate"]);
    d.push(dataItem);
  }
  const fetch = async () => {
    const storedToken = localStorage.getItem("jwtToken"); // Fetch the stored token
    if (storedToken) {
      // Set the token in the Axios headers before making the request
      setAuthToken(storedToken);
      // Make an authenticated request using axiosInstance
      let url = `/superadmin/crud/panchayat?page=${currentPage}&limit=10&sort=name`;
      if (searchVal != "")
        url = `/superadmin/crud/search?roleName=panchayat&searchQuery=${searchVal}&page=${currentPage}&limit=10`;
      await axiosInstance
        .get(url)
        .then((response) => {
          console.log(response);
          if (response.status != "fail") {
            let obj = response.data.data.response;
            let arr = Object.keys(obj);
            let dumm = [];
            arr.forEach((element) => {
              putinDummy(obj[element], dumm);
            });
            setPanchayatData(dumm);
          }
          setDataLoaded(true);
        })
        .catch((error) => {
          setPanchayatData([
            {
              "USER ID": null,
              IMAGE: null,
              NAME: null,
              EMAIL: null,
              DESIGNATION: null,
              DATE: null,
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
            totalPages={count < 10 ? 1 : Math.ceil(count / 10)}
          />
        </Flex>
      </Root>
    </>
  );
}
