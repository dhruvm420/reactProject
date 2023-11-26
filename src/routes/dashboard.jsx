import { Box, Heading, Flex } from "@chakra-ui/react";
import MyCard from "../components/mycard.jsx";
let dashboardData = [
  {
    title: "State",
    count: "4",
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
    <Box w="85vw" p="6">
      <Flex flexDirection="column">
        <Heading as="h2" fontSize="2xl" color="grey">
          Admin Dashboard
        </Heading>
        <Flex padding="8" justifyContent="space-evenly">
          {cards}
        </Flex>
      </Flex>
    </Box>
  );
}
