import React, { useState } from "react";
import { FormControl, FormLabel, Select, Flex, Box } from "@chakra-ui/react";
import Root from "./root";
import TableGenerator from "../components/tableGenerator";
export default function PanchayatReport() {
  // panchayat list
  const options = ["KESHAW DAS"];
  const optionList = ["Select Panchayat", ...options];

  const dummyPanchayatData = {
    IMAGE: "https://skskf.in/userimg/IMG-20230627-WA0045_09152023162926.jpg",
    NAME: "KESHAW DAS",
    EMAIL: "keshawkwd666@gmail.com",
    DESIGNATION: "s./lohara",
    DATE: "2023-09-09 13:24:09",
  };
  const dummyUsersData = [
    {
      "USER ID": null,
      "COORDINATOR ID": null,
      NAME: null,
      "MOBILE NO": null,
      CITY: null,
      "APPLY DATE": null,
    },
  ];

  const [selectedOption, setSelectedOption] = useState("Select Panchayat");
  const [panchayatData, setPanchayatData] = useState([dummyPanchayatData]);
  // usersData is the data of users under the selected panchayat
  const [usersData, setUsersData] = useState(dummyUsersData);

  function handleOption(option) {
    // logic to change selectedPanchayatData & data of users under this panchayat
    // setPanchayatData();
    // setUsersData();
  }

  const handleChange = (event) => {
    const option = event.target.value;
    setSelectedOption(option);
    handleOption(option);
  };

  const userCount = () =>
    usersData[0][Object.keys(usersData[0])[0]] == null ? 0 : usersData.length;
  return (
    <Root title="Panchayat List">
      <Flex direction="column" mx="auto" mt="4">
        <FormControl w="15vw" mx="auto" my="4">
          <Select onChange={handleChange} value={selectedOption}>
            {optionList.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </FormControl>
        {selectedOption != "Select Panchayat" && (
          <>
            <TableGenerator data={panchayatData} title="Panchayat" />
            <Box my="4" mx="auto">
              Total User - {userCount()}
            </Box>
            <TableGenerator data={usersData} title="User" />
          </>
        )}
      </Flex>
    </Root>
  );
}
