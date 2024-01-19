import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  Button,
  Heading,
  Center,
  Spinner,
} from "@chakra-ui/react";
import MakeCertificate from "../makeCertificate";
import { axiosInstance, setAuthToken } from "../axiosInstance";
import MemberCertificate from "../membCertificate";
export default function Certificate() {
  const { listName, userId } = useParams();
  const [userData, setUserData] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);
  const fetch = async () => {
    const storedToken = localStorage.getItem("jwtToken"); // Fetch the stored token
    let url = `/superadmin/crud/${listName}/${userId}`;
    if (storedToken) {
      // Set the token in the Axios headers before making the request
      setAuthToken(storedToken);

      // Make an authenticated request using axiosInstance
      await axiosInstance
        .get(url)
        .then((response) => {
          console.log(response);
          let obj = response.data.data.response[0];
          console.log("obj");
          console.log(obj);
          setUserData(obj);
          setDataLoaded(true);
        })
        .catch((error) => {
          setUserData({
            "USER ID": null,
            IMAGE: null,
            NAME: null,
            EMAIL: null,
            DESIGNATION: null,
            "Total District": null,
            DATE: null,
          });
          setDataLoaded(true);
          // Handle error, e.g., unauthorized access
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
  if(listName == "member")
    return  <MemberCertificate data = {userData} />
  return (
    <>
      <MakeCertificate data={userData} />
    </>
  );
}
