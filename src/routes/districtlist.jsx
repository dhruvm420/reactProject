import {
  Flex,
  Button,
  Box,
  Text,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Center, Spinner } from "@chakra-ui/react";
import Pagination from "../components/pagination";
import Root from "./root";
import TableGenerator from "../components/tableGenerator";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ActionPopUp from "../components/actionButtons/actionPopUp";
import { SearchIcon } from "@chakra-ui/icons";
import { setAuthToken, axiosInstance } from "../components/axiosInstance.jsx";

const sample = [
  {
    "USER ID": null,
    IMAGE: null,
    NAME: null,
    EMAIL: null,
    DESIGNATION: null,
    "Total Tehsil": null,
    DATE: null,
  },
];
import { getCorrectDate } from "../components/date.jsx";
export default function DistrictList() {
  const { parent } = useParams();
  let child;
  if (parent == "state") child = "district";
  else if (parent == "district") child = "tehsil";
  else if (parent == "tehsil") child = "panchayat";
  else child = "member";
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [id, setId] = useState("");
  const [action, setAction] = useState("");
  const [districtData, setDistrictData] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const storedValuesString = localStorage.getItem("myValues");
  const storedValues = JSON.parse(storedValuesString);
  const count = (storedValues && storedValues.district) || 0;
  const [currentPage, setCurrentPage] = useState(1);
  const [dataLoaded, setDataLoaded] = useState(false);
  const data = JSON.parse(localStorage.getItem("userKaData"));
  let refId;
  if (parent != "superadmin") refId = data._id;
  const actionitems =
    parent == "superadmin"
      ? ["id", "appointment", "certificate", "delete", "menu", "edit"]
      : ["delete", "edit"];
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
    dataItem["Total Tehsil"] = obj["totalTehsil"];
    dataItem.DESIGNATION = obj["designation"];
    dataItem.DATE = getCorrectDate(obj["joiningDate"]);
    d.push(dataItem);
  }
  const fetch = async () => {
    const storedToken = localStorage.getItem("jwtToken"); // Fetch the stored token

    if (storedToken) {
      // Set the token in the Axios headers before making the request
      setAuthToken(storedToken);
      let url;
      if (parent == "superadmin") {
        url = `/superadmin/crud/district?page=${currentPage}&limit=10&sort=name`;
        if (searchVal != "")
          url = `/superadmin/crud/search?roleName=district&searchQuery=${searchVal}&page=${currentPage}&limit=10`;
      } else {
        url = `/${parent}/crud/${child}?page=${currentPage}&limit=10&sort=name&${parent}ReferenceId=${refId}`;
        // if (searchVal != "")
        // url = `/superadmin/crud/search?roleName=district&searchQuery=${searchVal}&page=${currentPage}&limit=10`;
      }
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
            setDistrictData(dumm);
          }
          setDataLoaded(true);
        })
        .catch((error) => {
          setDistrictData([
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
        formName={"district"}
        action={action}
        modifyId={id}
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
        parent={parent}
      />

      <Root
        title="District List"
        noSideBar={parent == "superadmin" ? null : true}
      >
        <Flex direction="column" mx="auto" mt="4">
          <Box mx="auto">
            <Link
              to={
                parent == "superadmin"
                  ? "/createDistrict"
                  : "/createChild/state"
              }
            >
              <Button colorScheme="teal" mb="4">
                Create District
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
                  value={searchVal}
                  onChange={handleInputChange}
                />
              </InputGroup>
            </Box>
          )}
          <TableGenerator
            data={districtData}
            title="District"
            setIsOpen={setDialogIsOpen}
            setAction={setAction}
            setId={setId}
            actionItems={actionitems}
            parent={parent}
          />
          <Pagination
            handlePageChange={handlePageChange}
            totalPages={count < 10 ? 1 : Math.ceil(count / 10)}
            currentPage={currentPage}
          />
        </Flex>
      </Root>
    </>
  );
}
