import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MiniTable from "../components/miniTable";
import { Center, Spinner, Text } from "@chakra-ui/react";
import { axiosInstance, setAuthToken } from "../components/axiosInstance";
import TableGenerator from "../components/tableGenerator";

export default function UnderData() {
  const { parent } = useParams();
  console.log(parent);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState(null);
  let child;
  if (parent == "state") child = "district";
  else if (parent == "district") child = "tehsil";
  else if (parent == "tehsil") child = "panchayat";
  else child = "member";
  const fetch = async () => {
    const storedToken = localStorage.getItem("jwtToken"); // Fetch the stored token

    if (storedToken) {
      // Set the token in the Axios headers before making the request
      setAuthToken(storedToken);
      const url = `/${parent}/crud/${child}`;
      console.log(url);
      // Make an authenticated request using axiosInstance
      await axiosInstance
        .get(url)
        .then((response) => {
          console.log(response);
          let obj = response.data.data.response;
          let container = [];
          let n = response.data.results;
          for (let i = 0; i < n; i++) container.push(obj[i]);
          setData(container);
          console.log("container", container);
          setDataLoaded(true);
        })
        .catch((error) => {
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
  // return <TableGenerator data={filteredData} title={child} actionItems={[]} />;
  return <TableGenerator data={data} title={child} actionItems={[]} />;
}
