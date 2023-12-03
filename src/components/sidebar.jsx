import { Stack, Box } from "@chakra-ui/react";
import SideBarItem from "./sidebarItem";

let sideBarRoutes = {
  "DASHBOARD ": "/dashboard",
  "UNVERIFIED MEMBERS": "/unverifiedmembers",
  "VERIFIED MEMBERS": "/verifiedmembers",
  "PANCHAYAT LIST": "/panchayatlist",
  "PANCHAYAT REPORT": "/panchayatreport",
  "SEAT BOOKED": "/eventbooking",
  "ALL EVENT": "/event",
  "ALL POST": "/posts",
  "MANAGEMENT TEAM": "/management",
  "PUBLIC USER LIST": "/publicuserlist",
  "RECEIPT APPLICATION LIST": "/receiptapplication",
  "COMPLAIN / SOLUTION": "/complaints",
  "TESTIMONIAL ": "/testimonials",
  "PRINT DONATION SLIP": "/donations",
  "MY MESSAGE": "/mymessage",
  // "SLIDER IMAGES",
  // "COMPANY PROFILE",
  // "ABOUT US POST LIST",
  // "OBJECTIVE LIST",
  // "LOG OUT",
};

export default function Sidebar() {
  const routes = Object.keys(sideBarRoutes);
  const list = routes.map((key) => {
    return <SideBarItem title={key} link={sideBarRoutes[key]} />;
  });
  return (
    <Box>
      <Stack as="ul" w="13vw" spacing="0">
        {list}
      </Stack>
    </Box>
  );
}
