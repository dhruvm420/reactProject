import { Box, Flex } from "@chakra-ui/react";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import ScrollToTop from "../components/scrollToTop";
import { useState } from "react";
export default function Root({ children, title }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  ScrollToTop();
  return (
    <Box bg="#f7fafc">
      <Header title={title} toggle={toggleSidebar} />
      <Flex>
        {isSidebarOpen && <Sidebar />}
        {children}
      </Flex>
    </Box>
  );
}
