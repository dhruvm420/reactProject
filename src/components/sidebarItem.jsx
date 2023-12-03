import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function SideBarItem(props) {
  return (
    <Link to={props.link}>
      <Box
        as="li"
        py="2"
        fontSize="sm"
        fontWeight="bold"
        color="gray.400"
        textAlign="center"
        backgroundColor="gray.100"
        borderBottom="1px"
        borderRadius="lg"
        borderBottomColor="gray.400"
        borderRight="1px"
        borderRightColor="gray.400"
        _hover={{
          background: "gray.200",
          cursor: "pointer",
        }}
      >
        {props.title}
      </Box>
    </Link>
  );
}
