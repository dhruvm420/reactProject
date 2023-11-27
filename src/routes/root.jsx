import { Box, Flex } from "@chakra-ui/react";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

export default function Root({ children, title }) {
  return (
    <Box>
      <Header title={title} />
      <Flex>
        <Sidebar />
        {children}
      </Flex>
    </Box>
  );
}
