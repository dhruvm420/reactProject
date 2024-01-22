import { useRouteError } from "react-router-dom";
import Root from "../components/root";
import { Flex, Heading } from "@chakra-ui/react";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Root title="PAGE NOT FOUND">
      <Flex flexDirection="column" w="86vw" py="8">
        <Heading textAlign="center" color="gray.600">
          NOT YET IMPLEMENTED !!!!
        </Heading>
      </Flex>
    </Root>
  );
}
