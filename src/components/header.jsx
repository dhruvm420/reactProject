import { Flex, Heading } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
export default function Header(props) {
  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        borderBottomLeftRadius="xl"
        borderBottomRightRadius="xl"
        boxShadow="xl"
        py="5"
        bg="gray.600"
      >
        {props.noHamburger ? (
          <></>
        ) : (
          <Flex
            position={"absolute"}
            left="5"
            flexDirection="column"
            border="1px"
            borderColor={"white"}
            borderRadius="5"
            justifyContent="center"
            p="2"
            color="white"
            onClick={props.toggle}
            _hover={{
              background: "gray.200",
              cursor: "pointer",
              color: "gray.600",
              borderColor: "gray.600",
            }}
          >
            <HamburgerIcon />
          </Flex>
        )}
        <Heading as="h1" color="white">
          {props.title}
        </Heading>
      </Flex>
    </>
  );
}
