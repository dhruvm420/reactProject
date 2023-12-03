import { Box, Flex } from "@chakra-ui/react";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import ScrollToTop from "../components/scrollToTop";
export default function Root({ children, title }) {
  ScrollToTop();
  return (
    <Box bg="#f7fafc">
      <Header title={title} />
      <Flex>
        <Sidebar />
        {children}
      </Flex>
    </Box>
  );
}
