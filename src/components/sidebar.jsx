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
        <Link to={`/dashboard`}>
          <Box
            as="li"
            py="2"
            textAlign="center"
            borderBottom="1px"
            borderBottomColor="gray.400"
            borderRight="1px"
            borderRightColor="gray.400"
            _hover={{
              background: "gray.200",
              color: "gray.500",
              cursor: "pointer",
            }}
          >
            {item}
          </Box>
        </Link>
      );
    else
      return (
        <Box
          as="li"
          py="2"
          textAlign="center"
          borderBottom="1px"
          borderBottomColor="gray.400"
          borderRight="1px"
          borderRightColor="gray.400"
          _hover={{
            background: "gray.200",
            color: "gray.500",
            cursor: "pointer",
          }}
        >
          {item}
        </Box>
      );
  });
  return (
    <Box>
      <Stack as="ul" bg="gray.100" w="15vw" color="gray.400" spacing="0">
        {list}
      </Stack>
    </Box>
  );
}
