// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import { Box, Flex, Image, Text } from "@chakra-ui/react";
// export default function Idcard() {
//   const { name, userId } = useParams();
//   const dummyData = {
//     NAME: "KAMINI MANIKPURI",
//     IMAGE:
//       "https://skskf.in/userimg/dc8afc49-3b58-432d-88a4-371f931b274d_09102023120059.jpg",
//     "ID No": "64fd62a399dd2",
//     Designation: "D.C. RAJNANDGAON",
//     Dob: "07-03-1994",
//     Mobile: "6264376102",
//     "Register Date": "26-Sep-2022",
//     "S/O": "KESHAW DAS MANIKPURI",
//     Address: `vill.+post odiya khurd tah.-
// s.lohara dist.kabirdham , ,
// Chhattisgarh`,
//   };
//   const [data, setData] = useState(dummyData);

//   // Function to download the card as an image
//   // const downloadCard = () => {
//   //   const frontCard = document.getElementById("front-card");
//   //   const backCard = document.getElementById("back-card");

//   //   html2canvas(frontCard).then((canvasFront) => {
//   //     const frontDataURL = canvasFront
//   //       .toDataURL("image/png")
//   //       .replace("image/png", "image/octet-stream");
//   //     const frontLink = document.createElement("a");
//   //     frontLink.href = frontDataURL;
//   //     frontLink.download = "front-card.png";
//   //     frontLink.click();
//   //   });

//   //   html2canvas(backCard).then((canvasBack) => {
//   //     const backDataURL = canvasBack
//   //       .toDataURL("image/png")
//   //       .replace("image/png", "image/octet-stream");
//   //     const backLink = document.createElement("a");
//   //     backLink.href = backDataURL;
//   //     backLink.download = "back-card.png";
//   //     backLink.click();
//   //   });
//   // };

//   return (
//     <>
//       {/* <button onClick={downloadCard} mx="auto">
//         Download ID Card
//       </button>  */}
//       <Flex flexDirection="row" mt="2">
//         <Flex
//           id="front-card"
//           flexDirection="column"
//           py={["4", "4", "6"]}
//           px={["8", "8", "10"]}
//           w={["20vw", "24vw", "36vw"]}
//           bgImage="url('https://skskf.in/webimg/idback_08102023091854.png')"
//           bgSize="cover"
//           bgPos="center"
//         >
//           <Box
//             as="div"
//             position="relative"
//             top={["5vh", "6vh", "8vh"]}
//             left="8vw"
//           >
//             <Image
//               src={data.IMAGE}
//               alt="User"
//               mt="12"
//               borderRadius="xl"
//               boxSize="125px"
//             />
//           </Box>
//           <Text textAlign="center" mt="10" fontSize="xl" fontWeight="bold">
//             {data.NAME}
//           </Text>
//           {Object.entries(data).map(([key, value]) => {
//             if (
//               key !== "IMAGE" &&
//               key !== "NAME" &&
//               key !== "Address" &&
//               key !== "S/O"
//             ) {
//               return (
//                 <Flex key={key} justifyContent="space-between" mt="2">
//                   <Text>{key}:</Text>
//                   <Text ml="2">{value}</Text>
//                 </Flex>
//               );
//             }
//             return null;
//           })}
//           <Box position="relative" bottom="2" left="15vw">
//             <Image
//               src="https://skskf.in/webimg/WhatsApp_Image_2023-09-04_at_16.50.20-removebg-preview%20(1)_0952023080126.png"
//               alt="Signature"
//               boxSize="125px"
//               mt="12"
//               borderRadius="full"
//             />
//           </Box>
//         </Flex>

//         <Flex
//           id="back-card"
//           flexDirection="column"
//           py={["4", "4", "6"]}
//           px={["8", "8", "10"]}
//           w={["20vw", "10vw", "vw"]}
//           bgImage="url('https://skskf.in/webimg/idback_08102023091854.png')"
//           bgSize="cover"
//           bgPos="center"
//           ml="4"
//         >
//           {/* QR Code */}
//           <Image
//             src="https://www.google.co.in"
//             alt="QR Code"
//             mx="auto"
//             mt="20"
//             mb="6"
//           />
//           {/* Other Data */}
//           {Object.entries(data)
//             .filter(
//               ([key]) =>
//                 key !== "IMAGE" &&
//                 key !== "NAME" &&
//                 (key === "Address" || key === "S/O")
//             )
//             .map(([key, value]) => (
//               <Flex key={key} justifyContent="space-between" mt="2">
//                 <Text>{key}:</Text>
//                 <Text ml="2">{value}</Text>
//               </Flex>
//             ))}
//           {/* Stamp */}
//           <Box position="relative" bottom="0" left="15vw">
//             <Image
//               src="https://skskf.in/webimg/sksk_seal.png"
//               alt="Stamp"
//               boxSize="80px"
//             />
//           </Box>
//         </Flex>
//       </Flex>
//     </>
//   );
// }
