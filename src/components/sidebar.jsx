import { Stack, Box } from "@chakra-ui/react";
import SideBarItem from "./sidebarItem";
import { sideBarRoutes } from "../sidebarRoutes";
export default function Sidebar() {
  const routes = Object.keys(sideBarRoutes);
  const list = routes.map((key) => {
    return <SideBarItem title={key} link={sideBarRoutes[key]} />;
  });
  return (
    <Box>
      <Stack as="ul" w="13vw" spacing="0">
        {list}
      </Stack>
    </Box>
  );
}
