import { Box, Flex } from "@chakra-ui/react";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

export default function Root({ children }) {
  return (
    <Box>
      <Header title="SKSKF Project" />
      <Flex>
        <Sidebar />
        {children}
      </Flex>
    </Box>
  );
}
