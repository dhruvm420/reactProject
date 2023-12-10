import {
  Flex,
  Box,
  Input,
  Text,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Root from "./root";
import { Center, Spinner } from "@chakra-ui/react";
import Pagination from "../components/pagination";
import TableGenerator from "../components/tableGenerator";
import { useState, useEffect } from "react";
import ActionPopUp from "../components/actionButtons/actionPopUp";
import { SearchIcon } from "@chakra-ui/icons";
import { setAuthToken, axiosInstance } from "../components/axiosInstance.jsx";

let dummyData = [
  {
    USER_ID: "0226",
    NAME: "KESHAW DAS",
    MOBILE: "9999889999",
    CITY: "Kawardha",
    AUTHORITY: "Member",
  },
  {
    USER_ID: "0227",
    NAME: "GOPAL DAS",
    MOBILE: "9999889999",
    CITY: "Kawardha",
    AUTHORITY: "Member",
  },
  {
    USER_ID: "0226",
    NAME: "KESHAW DAS",
    MOBILE: "9999889999",
    CITY: "Kawardha",
    AUTHORITY: "Member",
  },
];

export default function VerifiedList() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [id, setId] = useState("");
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
    let dataItem = {
      "USER ID": "0134",
      NAME: "KESHAW DAS",
      MOBILE: "9999889999",
      CITY: "Kawardha",
      AUTHORITY: "Member",
    };
    dataItem["USER ID"] = obj["_id"];
    dataItem.NAME = obj.name;
    dataItem.MOBILE = obj.mobile;
    dataItem.CITY = obj.city;
    dataItem.AUTHORITY = obj.authority;
    d.push(dataItem);
  }
  const fetch = async () => {
    const storedToken = localStorage.getItem("jwtToken"); // Fetch the stored token
    if (storedToken) {
      // Set the token in the Axios headers before making the request
      setAuthToken(storedToken);
      // Make an authenticated request using axiosInstance
      await axiosInstance

        .get(
          `superadmin/crud/member?isVerified=true&limit=10&fields=${searchVal}&page=${currentPage}`
        )
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
    <Root title="Verified Members">
      <Flex direction="column" mx="auto" mt="4">
        <ActionPopUp
          formName={"verified"}
          action={action}
          modifyId={id}
          isOpen={dialogIsOpen}
          setIsOpen={setDialogIsOpen}
        />
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
          data={verifiedData}
          title="Verified Members"
          setIsOpen={setDialogIsOpen}
          setAction={setAction}
          setId={setId}
          actionItems={["id", "certificate", "appointment", "delete", "edit"]}
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
