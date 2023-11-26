import { Box, Heading, Flex } from "@chakra-ui/react";
import MyCard from "../components/mycard.jsx";
import Header from "../components/header.jsx";
import Sidebar from "../components/sidebar.jsx";
let dashboardData = [
  {
    title: "State",
    count: "4",
  },
  {
    title: "Tehsil",
    count: "3",
  },
  {
    title: "Tehsil",
    count: "3",
  },

  {
    title: "Tehsil",
    count: "3",
  },
];
export default function Dashboard() {
  let cards = dashboardData.map((item) => {
    return <MyCard card={item} />;
  });
  return (
    <Box>
      <Header title="Admin Dashboard" />
      <Flex>
        <Sidebar />
        <Box w="85vw" p="6">
          <Flex padding="8" justifyContent="space-evenly" wrap="wrap">
            {cards}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
