import { Box, Flex } from "@chakra-ui/react";
import Header from "./header";
import Sidebar from "./sidebar";
import ScrollToTop from "../utilities/scrollToTop";
import { useState } from "react";
export default function Root({ children, title, noSideBar }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  ScrollToTop();
  return (
    <Box bg="#f7fafc">
      <Header title={title} toggle={toggleSidebar} noHamburger={noSideBar} />
      <Flex>
        {isSidebarOpen && <Sidebar />}
        {children}
      </Flex>
    </Box>
  );
}
