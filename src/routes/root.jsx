import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

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

export default function Root() {
  return (
    <Box>
      <Header title="SKSKF Project" />
      <Flex>
        <Sidebar data={sideBarData} />
        <Outlet />
      </Flex>
    </Box>
  );
}
