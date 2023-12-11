import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function SideBarItem(props) {
  const l = props.link;
  return l == "/eventbooking" ||
    l == "/management" ||
    l == "/publicuserlist" ||
    l == "/mymessage" ? (
    <Box
      as="li"
      py="2"
      fontSize="sm"
      fontWeight="bold"
      color="gray.500"
      textAlign="center"
      backgroundColor="gray.300"
      borderRadius="lg"
      border="1px"
      borderColor="gray.500"
      // borderBottom="1px"
      // borderBottomColor="gray.500"
      // borderRight="1px"
      // borderRightColor="gray.500"
      _hover={{
        background: "gray.400",
        cursor: "not-allowed",
        color: "gray.600",
        borderColor: "gray.600",
      }}
    >
      {props.title}
    </Box>
  ) : (
    <Link to={props.link}>
      <Box
        as="li"
        py="2"
        fontSize="sm"
        fontWeight="bold"
        color="gray.500"
        textAlign="center"
        backgroundColor="gray.300"
        borderRadius="lg"
        border="1px"
        borderColor="gray.500"
        // borderBottom="1px"
        // borderBottomColor="gray.500"
        // borderRight="1px"
        // borderRightColor="gray.500"
        _hover={{
          background: "gray.400",
          cursor: "pointer",
          color: "gray.600",
          borderColor: "gray.600",
        }}
      >
        {props.title}
      </Box>
    </Link>
  );
}
