import {
  Flex,
  Box,
  Input,
  Text,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Root from "../components/root.jsx";
import { Center, Spinner } from "@chakra-ui/react";
import Pagination from "../components/pagination";
import TableGenerator from "../components/tableGenerator";
import { useState, useEffect } from "react";
import ActionPopUp from "../components/actionButtons/actionPopUp";
import { SearchIcon } from "@chakra-ui/icons";
import { setAuthToken, axiosInstance } from "../utilities/axiosInstance.jsx";
import { getCorrectDate } from "../utilities/date.jsx";
import { useParams } from "react-router-dom";

export default function VerifiedList() {
  const { parent } = useParams();
  let child;
  if (parent == "state") child = "district";
  else if (parent == "district") child = "tehsil";
  else if (parent == "tehsil") child = "panchayat";
  else child = "member";
  const actionitems =
    parent == "superadmin"
      ? ["id", "certificate", "delete", "edit"]
      : [];
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [id, setId] = useState("");
  const data = JSON.parse(localStorage.getItem("userKaData"));
  let refId;
  if (parent != "superadmin") refId = data._id;
  const [dataLoaded, setDataLoaded] = useState(false);
  const [action, setAction] = useState("");
  const storedValuesString = localStorage.getItem("myValues");
  const storedValues = JSON.parse(storedValuesString);
  const count = (storedValues && storedValues.verifiedmembers) || 0;
  const [verifiedData, setVerifiedData] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleInputChange = (e) => {
    setSearchVal(e.target.value);
    // You can perform filtering or any other actions based on the search value here
  };
  function putinDummy(obj, d) {
    let dataItem = {};
    dataItem.IMAGE =
      "https://sksk-backend.onrender.com/" + obj["profilePictureLink"];
    dataItem["USER ID"] = obj["_id"];
    dataItem.USERNAME = obj.userName;
    dataItem.NAME = obj.name;
    dataItem.DOB = getCorrectDate(obj.DOB);
    dataItem.MOBILE = obj.mobileNumber;
    dataItem.CITY = obj.districtResiding;
    d.push(dataItem);
  }
  const fetch = async () => {
    const storedToken = localStorage.getItem("jwtToken"); // Fetch the stored token
    if (storedToken) {
      // Set the token in the Axios headers before making the request
      setAuthToken(storedToken);
      // Make an authenticated request using axiosInstance
      let url;
      if (parent == "superadmin") {
        url = `superadmin/crud/member?isVerified=true&limit=10&fields=${searchVal}&page=${currentPage}`;
      } else {
        // url = `/${parent}/crud/${child}?page=${currentPage}&limit=10&sort=name&${parent}ReferenceId=${refId}`;
        url = `/${parent}/crud/${child}?${parent}RefrenceId=${refId}&page=${currentPage}&limit=10`;
        console.log(url);
        // if (searchVal != "")
        // url = `/superadmin/crud/search?roleName=district&searchQuery=${searchVal}&page=${currentPage}&limit=10`;
      }
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
            setVerifiedData(dumm);
          }
          setDataLoaded(true);
        })
        .catch((error) => {
          setVerifiedData([
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
    <Root
      title={parent == "superadmin" ? "Verified Members" : "Members"}
      noSideBar={parent == "superadmin" ? null : true}
    >
      <Flex direction="column" mx="auto" mt="4">
        <ActionPopUp
          formName={"member"}
          action={action}
          modifyId={id}
          isOpen={dialogIsOpen}
          setIsOpen={setDialogIsOpen}
          parent={parent}
        />
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
          data={verifiedData}
          title="member"
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
  );
}
