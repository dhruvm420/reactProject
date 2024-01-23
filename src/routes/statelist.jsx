import {
  Flex,
  Box,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { Center, Spinner } from "@chakra-ui/react";
import Root from "../components/root.jsx";
import { Link, useParams } from "react-router-dom";
import TableGenerator from "../components/tableGenerator";
import { useState, useEffect } from "react";
import ActionPopUp from "../components/actionButtons/actionPopUp";
import { SearchIcon } from "@chakra-ui/icons";
import { setAuthToken, axiosInstance } from "../utilities/axiosInstance.jsx";
import Pagination from "../components/pagination";
import { getCorrectDate } from "../utilities/date.jsx";
import { baseUrl } from "../utilities/baseURL.jsx";
export default function StateList() {
  const { parent } = useParams();
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [id, setId] = useState("");
  const [action, setAction] = useState("");
  const [stateData, setStateData] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [dataLoaded, setDataLoaded] = useState(false);
  const storedValuesString = localStorage.getItem("myValues");
  const storedValues = JSON.parse(storedValuesString);
  const count = (storedValues && storedValues.state) || 0;
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleInputChange = (e) => {
    setSearchVal(e.target.value);
  };
  function putinDummy(obj, d) {
    let dataItem = {};
    dataItem["USER NAME"] = obj["userName"];
    dataItem["USER ID"] = obj["_id"];
    dataItem.IMAGE =
    `${baseUrl}/` + obj["profilePictureLink"];
    dataItem.NAME = obj.name;
    dataItem.EMAIL = obj["email"];
    dataItem["Total District"] = obj["totalDistrict"];
    dataItem.DESIGNATION = obj["designation"];
    dataItem.DATE = getCorrectDate(obj["joiningDate"]);

    d.push(dataItem);
  }
  const fetch = async () => {
    const storedToken = localStorage.getItem("jwtToken"); // Fetch the stored token
    let url = `/superadmin/crud/state?page=${currentPage}&limit=10&sort=name`;
    if (searchVal != "")
      url = `/superadmin/crud/search?roleName=state&searchQuery=${searchVal}&page=${currentPage}&limit=10`;
    if (storedToken) {
      // Set the token in the Axios headers before making the request
      setAuthToken(storedToken);

      // Make an authenticated request using axiosInstance
      await axiosInstance
        .get(url)
        .then((response) => {
          console.log(response);
          let obj = response.data.data.response;
          let arr = Object.keys(obj);
          let dumm = [];
          arr.forEach((element) => {
            putinDummy(obj[element], dumm);
          });
          setDataLoaded(true);
          setStateData(dumm);
        })
        .catch((error) => {
          setStateData([
            {
              "USER ID": null,
              IMAGE: null,
              NAME: null,
              EMAIL: null,
              DESIGNATION: null,
              "Total District": null,
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
        formName={"state"}
        action={action}
        modifyId={id}
        parent={parent}
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
      />
      <Root title="State List">
        <Flex direction="column" mx="auto" mt="4">
          <Box mx="auto">
            <Link to="/createState">
              <Button colorScheme="teal" mb="4">
                Create State
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
                fontSize={["6", "9", "14"]}
                onChange={handleInputChange}
              />
            </InputGroup>
          </Box>
          <TableGenerator
            data={stateData}
            title="State"
            setIsOpen={setDialogIsOpen}
            parent={parent}
            setAction={setAction}
            setId={setId}
            actionItems={[
              "id",
              "certificate",
              "appointment",
              "delete",
              "menu",
              "joining",
              "edit",
            ]}
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
