// import React, { useState, useEffect } from "react";
// import { FormControl, FormLabel, Select, Flex, Box } from "@chakra-ui/react";
// import Root from "./root";
// import TableGenerator from "../components/tableGenerator";
// import { setAuthToken, axiosInstance } from "../components/axiosInstance.jsx";
// import { getCorrectDate } from "../components/date.jsx";
// import { Center, Spinner } from "@chakra-ui/react";
// const dummyPanchayatData = {
//   IMAGE: "https://skskf.in/userimg/IMG-20230627-WA0045_09152023162926.jpg",
//   NAME: "KESHAW DAS",
//   EMAIL: "keshawkwd666@gmail.com",
//   DESIGNATION: "s./lohara",
//   DATE: "2023-09-09 13:24:09",
// };
// const dummyTehsilData = [
//   {
//     "USER ID": null,
//     "COORDINATOR ID": null,
//     NAME: null,
//     "MOBILE NO": null,
//     CITY: null,
//     "APPLY DATE": null,
//   },
// ];
// export default function PanchayatReport() {
//   const [panchayatList, setPanchayatList] = useState([]);
//   const [dataLoaded, setDataLoaded] = useState(false);
//   const [selectedOption, setSelectedOption] = useState("Select Panchayat");
//   const [panchayatData, setPanchayatData] = useState([]);
//   const [tehsilData, setTehsilData] = useState([]); // usersData is the data of users under the selected panchayat
//   function putinDummy(obj, d) {
//     let dataItem = {
//       "USER ID": "0134",
//       IMAGE: "https://skskf.in/userimg/IMG-20230627-WA0045_09152023162926.jpg",
//       NAME: "KESHAW DAS",
//       EMAIL: "keshawkwd666@gmail.com",
//       DESIGNATION: "s./lohara",
//       DATE: "2023-09-09 13:24:09",
//     };
//     dataItem["USER ID"] = obj["_id"];
//     dataItem.IMAGE =
//       "https://sksk-backend.onrender.com/" + obj["profilePictureLink"];
//     dataItem.NAME = obj.name;
//     dataItem.EMAIL = obj["email"];
//     dataItem.DESIGNATION = obj["designation"];
//     dataItem.DATE = getCorrectDate(obj["joiningDate"]);
//     d.push(dataItem);
//   }
//   function processPanchayatData(obj, d) {
//     let dataItem = {
//       "USER ID": "0134",
//       IMAGE: "https://skskf.in/userimg/IMG-20230627-WA0045_09152023162926.jpg",
//       NAME: "KESHAW DAS",
//       EMAIL: "keshawkwd666@gmail.com",
//       DESIGNATION: "s./lohara",
//       DATE: "2023-09-09 13:24:09",
//     };
//     dataItem["USER ID"] = obj["_id"];
//     dataItem.IMAGE =
//       "https://sksk-backend.onrender.com/" + obj["profilePictureLink"];
//     dataItem.NAME = obj.name;
//     dataItem.EMAIL = obj["email"];
//     dataItem.DESIGNATION = obj["designation"];
//     dataItem.DATE = getCorrectDate(obj["joiningDate"]);
//     d.push(dataItem);
//   }
//   const fetchPanchayatData = async () => {
//     const storedToken = localStorage.getItem("jwtToken"); // Fetch the stored token
//     let url = `/superadmin/crud/panchayat`;
//     if (storedToken) {
//       // Set the token in the Axios headers before making the request
//       setAuthToken(storedToken);

//       // Make an authenticated request using axiosInstance
//       await axiosInstance
//         .get(url)
//         .then((response) => {
//           console.log(response);
//           let obj = response.data.data.response;
//           let arr = Object.keys(obj);
//           let dumm = [];
//           arr.forEach((element) => {
//             processPanchayatData(obj[element], dumm);
//           });
//           setPanchayatList(dumm.map((item) => item.name));
//           setPanchayatData(dumm);
//           setDataLoaded(true);
//         })
//         .catch((error) => {
//           // Handle error, e.g., unauthorized access
//           console.error("Error fetching data:", error);
//         });
//     }
//   };
//   useEffect(() => {
//     fetchPanchayatData();
//   }, []);

//   const getTehsilData = async () => {
//     const storedToken = localStorage.getItem("jwtToken"); // Fetch the stored token
//     const selectedId = panchayatData.find(
//       (item) => item.NAME === selectedOption
//     )["USER ID"];
//     let url = `/superadmin/crud/tehsil/${selectedId}`;
//     if (storedToken) {
//       // Set the token in the Axios headers before making the request
//       setAuthToken(storedToken);
//       // Make an authenticated request using axiosInstance
//       await axiosInstance
//         .get(url)
//         .then((response) => {
//           console.log(response);
//           if (response.status != "fail") {
//             let obj = response.data.data.response;
//             let arr = Object.keys(obj);
//             let dumm = [];
//             arr.forEach((element) => {
//               processTehsilData(obj[element], dumm);
//             });
//             setTehsilData(dumm);
//           }
//           setDataLoaded(true);
//         })
//         .catch((error) => {
//           setUsersData([
//             {
//               "USER ID": null,
//               IMAGE: null,
//               NAME: null,
//               EMAIL: null,
//               DESIGNATION: null,
//               "Total Tehsil": null,
//               DATE: null,
//             },
//           ]);
//           setDataLoaded(true);
//           // Handle error, e.g., unauthorized access
//           console.error("Error fetching data:", error);
//         });
//     }
//   };
//   useEffect(() => {
//     getTehsilData();
//   }, [selectedOption]);

//   function handleOption(e) {
//     // logic to change selectedPanchayatData & data of users under this panchayat
//     // setPanchayatData();
//     // setUsersData();
//     setDataLoaded(false);
//     setSelectedOption(e.target.value);
//   }

//   const handleChange = (event) => {
//     const option = event.target.value;
//     setSelectedOption(option);
//     handleOption(option);
//   };

//   const userCount = () =>
//     usersData[0][Object.keys(usersData[0])[0]] == null ? 0 : usersData.length;
//   if (!dataLoaded)
//     return (
//       <>
//         <Center height="100vh">
//           <Spinner size="xl" color="blue.500" />
//           <Text px="2"> Loading... </Text>
//         </Center>
//       </>
//     );
//   return (
//     <Root title="Panchayat List">
//       <Flex direction="column" mx="auto" mt="4">
//         <FormControl w="15vw" mx="auto" my="4">
//           <Select onChange={handleChange} value={selectedOption}>
//             {optionList.map((option, index) => (
//               <option key={index} value={option}>
//                 {option}
//               </option>
//             ))}
//           </Select>
//         </FormControl>
//         {selectedOption != "Select Panchayat" && (
//           <>
//             <TableGenerator
//               data={panchayatData}
//               title="Panchayat"
//               actionItems={[]}
//             />

//             <Box my="4" mx="auto">
//               Total User - {userCount()}
//             </Box>
//             <TableGenerator data={usersData} title="User" actionItems={[]} />
//           </>
//         )}
//       </Flex>
//     </Root>
//   );
// }
export default function PanchayatReport() {
  return <></>;
}
