import { Stack, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

let sideBarData = [
  "DASHBOARD",
  "UNVERIFIED USERS",
  "VERIFIED USERS",
  "PANCHAYAT LIST",
  "PANCHAYAT REPORT",
  "SEAT BOOKED",
  "ALL EVENT",
  "ALL POST",
  "PARTICIPANT LIST",
  "MANAGEMENT TEAM",
  "PUBLIC USER LIST",
  "CONTACT LIST",
  "RECEIPT APPLICATION LIST",
  "COMPLAIN / SOLUTION",
  "TESTIMONIAL",
  "PRINT DONATION SLIP",
  "MY MESSAGE",
  "SLIDER IMAGES",
  "COMPANY PROFILE",
  "ABOUT US POST LIST",
  "OBJECTIVE LIST",
  "LOG OUT",
];

export default function Sidebar() {
  const list = sideBarData.map((item) => {
    if (item == "DASHBOARD")
      return (
        <Box
          as="li"
          py="2"
          textAlign="center"
          _hover={{ background: "gray.400", cursor: "pointer" }}
        >
          <Link to={`/dashboard`}>{item}</Link>
        </Box>
      );
    else
      return (
        <Box
          as="li"
          py="2"
          textAlign="center"
          _hover={{ background: "gray.400", cursor: "pointer" }}
        >
          {item}
        </Box>
      );
  });
  return (
    <Box>
      <Stack as="ul" bg="gray.200" w="15vw" spacing="0">
        {list}
      </Stack>
    </Box>
  );
}
