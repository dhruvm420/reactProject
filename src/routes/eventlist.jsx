import { Flex, Button, Box, Text } from "@chakra-ui/react";
import ActionPopUp from "../components/actionButtons/actionPopUp";
import Root from "../components/root.jsx";
import TableGenerator from "../components/tableGenerator";
import { Link } from "react-router-dom";
import { Center, Spinner } from "@chakra-ui/react";
import { setAuthToken, axiosInstance } from "../utilities/axiosInstance.jsx";
import { useState, useEffect } from "react";
import { getCorrectDate } from "../utilities/date.jsx";
import { baseUrl } from "../utilities/baseURL.jsx";
let dumy = [
  {
    IMAGE: null,
    TITLE: null,
    DESCRIPTION: null,
    VENUE: null,
    "EVENT DATE": null,
  },
];

// set count
export default function EventList() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [id, setId] = useState("");
  const [action, setAction] = useState("");
  const [eventsData, setEventsData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  function putinDummy(obj, d) {
    let dataItem = {
      IMAGE: null,
      TITLE: null,
      DESCRIPTION: null,
      VENUE: null,
      "EVENT DATE": null,
    };
    dataItem.IMAGE =
    `${baseUrl}/` + obj["eventImageLink"];
    dataItem.TITLE = obj.title;
    dataItem.DESCRIPTION = obj.description;
    dataItem.VENUE = obj.venue;
    dataItem["EVENT DATE"] = getCorrectDate(obj["eventDate"]);
    d.push(dataItem);
  }
  const fetch = async () => {
    const storedToken = localStorage.getItem("jwtToken"); // Fetch the stored token
    let url = `/superadmin/dataManagement/event`;
    if (storedToken) {
      // Set the token in the Axios headers before making the request
      setAuthToken(storedToken);

      // Make an authenticated request using axiosInstance
      await axiosInstance
        .get(url)
        .then((response) => {
          let obj = response.data.data.events;
          let arr = Object.keys(obj);
          let dumm = [];
          arr.forEach((element) => {
            putinDummy(obj[element], dumm);
          });
          setDataLoaded(true);
          setEventsData(dumm);
        })
        .catch((error) => {
          // Handle error, e.g., unauthorized access
          setTestimonialData(dumy);
          setDataLoaded(true);
          console.error("Error fetching data:", error);
        });
    }
  };
  useEffect(() => {
    fetch();
  }, []);

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
    <Root title="Event List">
      <Flex direction="column" mx="auto" mt="4">
        <ActionPopUp
          formName={"testimonial"}
          action={action}
          modifyId={id}
          isOpen={dialogIsOpen}
          setIsOpen={setDialogIsOpen}
        />
        <Box mx="auto">
          <Link to="/createEvent">
            <Button colorScheme="teal" mb="4">
              New Event
            </Button>
          </Link>
        </Box>
        <TableGenerator
          data={eventsData}
          title="Events"
          setIsOpen={setDialogIsOpen}
          setAction={setAction}
          setId={setId}
          actionItems={["edit", "delete"]}
        />
      </Flex>
    </Root>
  );
}
