import Root from "../components/root.jsx";
import { Flex, Button, Box, Text } from "@chakra-ui/react";
import TableGenerator from "../components/tableGenerator";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Center, Spinner } from "@chakra-ui/react";
import { setAuthToken, axiosInstance } from "../utilities/axiosInstance.jsx";
let dmy = [
  {
    "TIMELINE POST": null,
    TITLE: null,
    DESCRIPTION: null,
    VENUE: null,
  },
];

export default function AboutUsList() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [id, setId] = useState("");
  const [action, setAction] = useState("");
  const [dataLoaded, setDataLoaded] = useState(false);
  const [postsData, setPostsData] = useState(dmy);
  function preprocess(obj, d) {
    let dataItem = {
      TITLE: null,
      "TIMELINE POST": null,
      DESCRIPTION: null,
      VENUE: null,
    };
    dataItem["TIMELINE POST"] =
      "https://sksk-backend.onrender.com/" + obj["photoLink"];
    dataItem.TITLE = obj.title;
    dataItem.DESCRIPTION = obj.description;
    dataItem.VENUE = obj.venue;
    d.push(dataItem);
  }
  const fetch = async () => {
    const storedToken = localStorage.getItem("jwtToken"); // Fetch the stored token
    let url = `/superadmin/cms/aboutUsPostList`;
    if (storedToken) {
      // Set the token in the Axios headers before making the request
      setAuthToken(storedToken);

      // Make an authenticated request using axiosInstance
      console.log("making call ");
      await axiosInstance
        .get(url)
        .then((response) => {
          console.log(response);
          let obj = response.data.data.timelinePosts;
          let arr = Object.keys(obj);
          let dumm = [];
          arr.forEach((element) => {
            preprocess(obj[element], dumm);
          });
          setPostsData(dumm);
          setDataLoaded(true);
        })
        .catch((error) => {
          setPostsData(dmy);
          setDataLoaded(true);
          // Handle error, e.g., unauthorized access
          console.log("Error fetching data:", error);
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
    <>
      <Root title="About Us Post List">
        <Flex direction="column" mx="auto" mt="4">
          <TableGenerator
            data={postsData}
            setIsOpen={setDialogIsOpen}
            setAction={setAction}
            setId={setId}
            title="Posts"
            actionItems={[]}
          />
        </Flex>
      </Root>
    </>
  );
}
