import React, { useState, useEffect } from "react";
import { FormControl, FormLabel, Select, Flex, Box } from "@chakra-ui/react";
import Root from "./root";
import TableGenerator from "../components/tableGenerator";
import { setAuthToken, axiosInstance } from "../components/axiosInstance.jsx";
import { getCorrectDate } from "../components/date.jsx";
import { Center, Spinner, Text } from "@chakra-ui/react";
export default function PanchayatReport() {
  const [panchayatList, setPanchayatList] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [selectedOption, setSelectedOption] = useState("select-panchayat");
  const [panchayatData, setPanchayatData] = useState([]);
  const [tehsilData, setTehsilData] = useState([]); // usersData is the data of users under the selected panchayat
  function processTehsilData(obj, d) {
    let dataItem = {};
    dataItem["USER ID"] = obj["_id"];
    dataItem.IMAGE =
      "https://sksk-backend.onrender.com/" + obj["profilePictureLink"];
    dataItem.NAME = obj.name;
    dataItem.EMAIL = obj["email"];
    dataItem.DESIGNATION = obj["designation"];
    dataItem.DOB = getCorrectDate(obj["DOB"]);
    d.push(dataItem);
  }
  function processPanchayatData(obj, d) {
    let dataItem = {};
    dataItem["USER NAME"] = obj["userName"];
    dataItem["USER ID"] = obj["_id"];
    dataItem.IMAGE =
      "https://sksk-backend.onrender.com/" + obj["profilePictureLink"];
    dataItem.NAME = obj.name;
    dataItem.EMAIL = obj["email"];
    dataItem.DESIGNATION = obj["designation"];
    dataItem.DATE = getCorrectDate(obj["joiningDate"]);
    d.push(dataItem);
  }
  const fetchPanchayatData = async () => {
    const storedToken = localStorage.getItem("jwtToken"); // Fetch the stored token
    let url = `/superadmin/crud/panchayat`;
    if (storedToken) {
      // Set the token in the Axios headers before making the request
      setAuthToken(storedToken);

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
              processPanchayatData(obj[element], dumm);
            });
            let arr1 = Object.keys(dumm);
            let list = [];
            arr1.forEach((element) => {
              list.push(dumm[element].NAME);
            });
            list.unshift("select-panchayat");
            setPanchayatList(list);
            setPanchayatData(dumm);
            console.log("panachay", dumm);
            setDataLoaded(true);
          }
        })
        .catch((error) => {
          // Handle error, e.g., unauthorized access
          console.error("Error fetching data:", error);
        });
    }
  };
  useEffect(() => {
    fetchPanchayatData();
  }, []);

  const getTehsilData = async () => {
    if (selectedOption == "select-panchayat") return;
    console.log(selectedOption);
    const storedToken = localStorage.getItem("jwtToken"); // Fetch the stored token
    // const selectedId = panchayatData.find(
    //   (item) => panchayatData[item].NAME === selectedOption
    // )["USER ID"];
    // console.log(selectedId);
    // let url = `/superadmin/crud/tehsil/${selectedId}`;
    let url = `/superadmin/crud/member`;
    if (storedToken) {
      // Set the token in the Axios headers before making the request
      setAuthToken(storedToken);
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
              processTehsilData(obj[element], dumm);
            });
            console.log("dumm tehsil", dumm);
            setTehsilData(dumm);
          }
          setDataLoaded(true);
        })
        .catch((error) => {
          setTehsilData([
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
    getTehsilData();
  }, [selectedOption]);

  function handleOption(e) {
    // logic to change selectedPanchayatData & data of users under this panchayat
    // setPanchayatData();
    // setUsersData();
    setDataLoaded(false);
    setSelectedOption(e.target.value);
  }

  const handleChange = (event) => {
    const option = event.target.value;
    setDataLoaded(false);
    setSelectedOption(option);
    console.log(option);
  };

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
    <Root title="Panchayat List">
      <Flex direction="column" mx="auto" mt="4">
        <FormControl w="15vw" mx="auto" my="4">
          <Select onChange={handleChange} value={selectedOption}>
            {panchayatList.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </FormControl>
        {selectedOption != "select-panchayat" && (
          <>
            <TableGenerator
              data={panchayatData}
              title="Panchayat"
              actionItems={[]}
            />
            {/* 
            <Box my="4" mx="auto">
              Total User - {userCount}
            </Box> */}
            <TableGenerator data={tehsilData} title="User" actionItems={[]} />
          </>
        )}
      </Flex>
    </Root>
  );
}
