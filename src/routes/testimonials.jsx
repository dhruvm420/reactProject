import {
  Box,
  Button,
  Flex,
  Text,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import TableGenerator from "../components/tableGenerator";
import Root from "../components/root.jsx";
import ActionPopUp from "../components/actionButtons/actionPopUp";
import { setAuthToken, axiosInstance } from "../utilities/axiosInstance.jsx";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Pagination from "../components/pagination";
import { Center, Spinner } from "@chakra-ui/react";
import { baseUrl } from "../utilities/baseURL.jsx";
let dummyji = [
  {
    IMAGE: null,
    NAME: null,
    MESSAGE: null,
    DESIGNATION: null,
  },
];

export default function Testimonials() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [id, setId] = useState("");
  const [action, setAction] = useState("");
  const [testimonialData, setTestimonialData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataLoaded, setDataLoaded] = useState(false);
  const storedValuesString = localStorage.getItem("myValues");
  const storedValues = JSON.parse(storedValuesString);
  const count = (storedValues && storedValues.testimonials) || 0;
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
      DESIGNATION: null,
      IMAGE: null,
    };
    dataItem.NAME = obj.name;
    dataItem.MESSAGE = obj.message;
    dataItem.DESIGNATION = obj.designation;
    dataItem.IMAGE = `${baseUrl}/` + obj["photoLink"];
    d.push(dataItem);
  }
  const fetch = async () => {
    const storedToken = localStorage.getItem("jwtToken"); // Fetch the stored token
    let url = `/superadmin/cms/testimonial?page=${currentPage}&limit=10`;
    if (storedToken) {
      // Set the token in the Axios headers before making the request
      setAuthToken(storedToken);

      // Make an authenticated request using axiosInstance
      await axiosInstance
        .get(url)
        .then((response) => {
          console.log(response);
          let obj = response.data.data.testimonials;
          let arr = Object.keys(obj);
          let dumm = [];
          arr.forEach((element) => {
            putinDummy(obj[element], dumm);
          });
          setDataLoaded(true);
          setTestimonialData(dumm);
        })
        .catch((error) => {
          // Handle error, e.g., unauthorized access
          setTestimonialData(dummyji);
          setDataLoaded(true);
          console.error("Error fetching data:", error);
        });
    }
  };
  useEffect(() => {
    fetch();
  }, [currentPage]);

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
    <Root title="Testimonials">
      <Flex direction="column" mx="auto" mt="4">
        <Box mx="auto">
          <Link to="/createTestimonial">
            <Button colorScheme="teal" mb="4">
              Add Testimonial
            </Button>
          </Link>
        </Box>
        <ActionPopUp
          formName={"testimonial"}
          action={action}
          modifyId={id}
          isOpen={dialogIsOpen}
          setIsOpen={setDialogIsOpen}
        />
        <TableGenerator
          data={testimonialData}
          title="Testimonial"
          setIsOpen={setDialogIsOpen}
          setAction={setAction}
          setId={setId}
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
