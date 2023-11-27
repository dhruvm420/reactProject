import { Box, Flex, Heading } from "@chakra-ui/react";
export default function Header(props) {
  return (
    <Flex justifyContent="center" boxShadow="xl" p="3" bg="gray.500">
      <Heading as="h1" color="white">
        {props.title}
      </Heading>
    </Flex>
  );
}
