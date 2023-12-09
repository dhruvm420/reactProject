import {
  Flex,
  Button,
  Box,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Pagination from "../components/pagination";
import Root from "./root";
import TableGenerator from "../components/tableGenerator";
import { Link } from "react-router-dom";
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
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [id, setId] = useState("");
  const [action, setAction] = useState("");
  const [districtData, setDistrictData] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [dataLoaded, setDataLoaded] = useState(false);
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
      IMAGE: "https://skskf.in/userimg/IMG-20230627-WA0045_09152023162926.jpg",
      NAME: "KESHAW DAS",
      EMAIL: "keshawkwd666@gmail.com",
      DESIGNATION: "s./lohara",
      "Total Tehsil": "2",
      DATE: "2023-09-09 13:24:09",
    };
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

      // Make an authenticated request using axiosInstance
      await axiosInstance
        .get(
          `/superadmin/crud/district?limit=10&fields=${searchVal}&page=${currentPage}`
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
            setStateData(dumm);
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

  if (!dataLoaded) return <></>;
  return (
    <>
      <ActionPopUp
        formName={"district"}
        action={action}
        modifyId={id}
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
      />

      <Root title="District List">
        <Flex direction="column" mx="auto" mt="4">
          <Box mx="auto">
            <Link to="/createDistrict">
              <Button colorScheme="teal" mb="4">
                Create District
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
            data={districtData}
            title="District"
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
