import { Box, Heading, Flex } from "@chakra-ui/react";
import MyCard from "../components/mycard.jsx";
import Header from "../components/header.jsx";
import Sidebar from "../components/sidebar.jsx";
import ListPreview from "../components/listPreview.jsx";
let dashboardData = [
  {
    title: "State",
    count: "4",
  },
  {
    title: "District",
    count: "7",
  },
  {
    title: "Tehsil",
    count: "3",
  },

  {
    title: "Panchayat",
    count: "8",
  },
  {
    title: "Verified Members",
    count: "4",
  },
  {
    title: "Unverified Members",
    count: "6",
  },
  {
    title: "Complaints",
    count: "8",
  },
  {
    title: "Testimonials",
    count: "8",
  },
  {
    title: "Donations",
    count: "8",
  },
  {
    title: "Contact Us",
    count: "8",
  },
  {
    title: "Management",
    count: "8",
  },
  {
    title: "Public User List",
    count: "8",
  },
];
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
  let cards = dashboardData.map((item) => {
    return <MyCard card={item} />;
  });
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
    <Box>
      <Header title="Admin Dashboard" />
      <Flex>
        <Sidebar />
        <Box w="85vw" p="6">
          <Flex padding="4" justifyContent="space-between" wrap="wrap">
            {cards} {postPreview} {complaintsPreview}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
