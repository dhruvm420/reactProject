import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

export default function Root() {
  return (
    <Box>
      <Header title="SKSKF Project" />
      <Flex>
        <Sidebar />
        <Outlet />
      </Flex>
    </Box>
  );
}
