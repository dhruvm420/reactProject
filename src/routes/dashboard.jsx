import { Box, Heading, Flex } from "@chakra-ui/react";
import Header from "../components/header.jsx";
import Sidebar from "../components/sidebar.jsx";
import ListPreview from "../components/listPreview.jsx";
import DashboardCards from "../components/dashboardCards.jsx";
import Root from "./root.jsx";
let dashboardData = {
  State: {
    count: "1",
  },
  District: {
    count: "1",
  },
  Tehsil: {
    count: "1",
  },
  Panchayat: {
    count: "1",
  },
  "Verified Members": {
    count: "3",
  },
  "Unverified Members": {
    count: "3",
  },
  Complaints: {
    count: "0",
  },
  Testimonials: {
    count: "0",
  },
  Donations: {
    count: "8",
  },
  "Contact Us": {
    count: "8",
  },
  Management: {
    count: "5",
  },
  "Public User List": {
    count: "8",
  },
};
let posts = [
  {
    POSTDATE: "2023-09-07 16:22:24",
    TITLE: "SKSK Foundation",
    DESCRIPTION: "SKSK Foundation",
  },
  {
    POSTDATE: "2023-09-07 16:22:24",
    TITLE: "SKSK Foundation",
    DESCRIPTION: "SKSK Foundation",
  },
  {
    POSTDATE: "2023-09-07 16:22:24",
    TITLE: "SKSK Foundation",
    DESCRIPTION: "SKSK Foundation",
  },
  {
    POSTDATE: "2023-09-07 16:22:24",
    TITLE: "SKSK Foundation",
    DESCRIPTION: "SKSK Foundation",
  },
  {
    POSTDATE: "2023-09-07 16:22:24",
    TITLE: "SKSK Foundation",
    DESCRIPTION: "SKSK Foundation",
  },
];
let complaints = [
  {
    NAME: "2023-09-07 16:22:24",
    MESSAGE: "SKSK Foundation",
    DESCRIPTION: "SKSK Foundation",
  },
  {
    NAME: "2023-09-07 16:22:24",
    MESSAGE: "SKSK Foundation",
    DESCRIPTION: "SKSK Foundation",
  },
  {
    NAME: "2023-09-07 16:22:24",
    MESSAGE: "SKSK Foundation",
    DESCRIPTION: "SKSK Foundation",
  },
  {
    NAME: "2023-09-07 16:22:24",
    MESSAGE: "SKSK Foundation",
    DESCRIPTION: "SKSK Foundation",
  },
  {
    NAME: "2023-09-07 16:22:24",
    MESSAGE: "SKSK Foundation",
    DESCRIPTION: "SKSK Foundation",
  },
];
export default function Dashboard() {
  let postPreview = (
    <ListPreview data={posts} head="Latest Posts" title="TITLE" />
  );
  let complaintsPreview = (
    <ListPreview
      data={complaints}
      head="Latest Suggestions / Complaints"
      title="MESSAGE"
    />
  );
  return (
    <Root title="Admin Dashboard">
      <Box w="85vw" p="6">
        <Flex padding="4" justifyContent="space-between" wrap="wrap">
          <DashboardCards data={dashboardData} />
          {postPreview} {complaintsPreview}
        </Flex>
      </Box>
    </Root>
  );
}
