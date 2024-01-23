import {
  Flex,
  Text,
  Button,
  Box,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Center, Spinner } from "@chakra-ui/react";
import Pagination from "../components/pagination";
import TableGenerator from "../components/tableGenerator";
import { Link, useParams } from "react-router-dom";
import Root from "../components/root.jsx";
import { useState, useEffect } from "react";
import ActionPopUp from "../components/actionButtons/actionPopUp";
import { SearchIcon } from "@chakra-ui/icons";
import { setAuthToken, axiosInstance } from "../utilities/axiosInstance.jsx";

import { getCorrectDate } from "../utilities/date.jsx";
import { baseUrl } from "../utilities/baseURL.jsx";
export default function TehsilList() {
  const { parent } = useParams();
  let child;
  if (parent == "state") child = "district";
  else if (parent == "district") child = "tehsil";
  else if (parent == "tehsil") child = "panchayat";
  else child = "member";
  const actionitems =
    parent == "superadmin"
      ? ["id", "appointment", "certificate", "delete", "menu", "edit", "joining"]
      : [];
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [id, setId] = useState("");
  const [action, setAction] = useState("");
  const [tehsilData, setTehsilData] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const storedValuesString = localStorage.getItem("myValues");
  const storedValues = JSON.parse(storedValuesString);
  const count = (storedValues && storedValues.tehsil) || 0;
  const [currentPage, setCurrentPage] = useState(1);
  const data = JSON.parse(localStorage.getItem("userKaData"));
  let refId;
  if (parent != "superadmin") refId = data._id;
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
    `${baseUrl}/` + obj["profilePictureLink"];
    dataItem.NAME = obj.name;
    dataItem.EMAIL = obj["email"];
    dataItem.DESIGNATION = obj["designation"];
    dataItem["Total Panchayat"] = obj["totalPanchayat"];
    dataItem.DATE = getCorrectDate(obj["joiningDate"]);
    d.push(dataItem);
  }
  const fetch = async () => {
    const storedToken = localStorage.getItem("jwtToken"); // Fetch the stored token
    let url;
    if (parent == "superadmin") {
      url = `/superadmin/crud/tehsil?page=${currentPage}&limit=10&sort=name`;
      if (searchVal != "")
        url = `/superadmin/crud/search?roleName=tehsil&searchQuery=${searchVal}&page=${currentPage}&limit=10`;
    } else {
      url = `/${parent}/crud/${child}?page=${currentPage}&limit=10&sort=name&${parent}ReferenceId=${refId}`;
      // if (searchVal != "")
      // url = `/superadmin/crud/search?roleName=district&searchQuery=${searchVal}&page=${currentPage}&limit=10`;
    }
    if (storedToken) {
      // Set the token in the Axios headers before making the request
      setAuthToken(storedToken);
      // Make an authenticated request using axiosInstance
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
            setTehsilData(dumm);
          }
          setDataLoaded(true);
        })
        .catch((error) => {
          setTehsilData([
            {
              "USER ID": null,
              IMAGE: null,
              NAME: null,
              EMAIL: null,
              DESIGNATION: null,
              "Total Tehsil": null,
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
        formName={"tehsil"}
        action={action}
        parent={parent}
        modifyId={id}
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
      />
      <Root
        title="Tehsil List"
        noSideBar={parent == "superadmin" ? null : true}
      >
        <Flex direction="column" mx="auto" mt="4">
          <Box mx="auto">
            <Link
              to={
                parent == "superadmin"
                  ? "/createTehsil"
                  : "/createChild/district"
              }
            >
              <Button colorScheme="teal" mb="4">
                Create Tehsil
              </Button>
            </Link>
          </Box>
          {parent == "superadmin" && (
            <Box alignSelf="flex-end">
              <InputGroup my="2">
                <InputRightElement pointerEvents="none">
                  <SearchIcon />
                </InputRightElement>
                <Input
                  placeholder="Search"
                  fontSize={["6", "9", "14"]}
                  value={searchVal}
                  onChange={handleInputChange}
                />
              </InputGroup>
            </Box>
          )}
          <TableGenerator
            data={tehsilData}
            title="Tehsil"
            setIsOpen={setDialogIsOpen}
            parent={parent}
            setAction={setAction}
            setId={setId}
            actionItems={actionitems}
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
