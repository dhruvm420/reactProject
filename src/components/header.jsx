import { Box, Flex, Heading } from "@chakra-ui/react";
export default function Header(props) {
  return (
    <Flex justifyContent="center" boxShadow="xl" py="5" bg="gray.600">
      <Heading as="h1" fontFamily={"o"} color="white">
        {props.title}
      </Heading>
    </Flex>
  );
}
