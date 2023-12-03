import { Flex, Button } from "@chakra-ui/react";
import Root from "./root";
import TableGenerator from "../components/tableGenerator";
let managementData = [
  {
    IMAGE: null,
    NAME: null,
    EMAIL: null,
    DESIGNATION: null,
    DATE: null,
  },
];

export default function Management() {
  return (
    <Root title="Management Team">
      <Flex direction="column" mx="auto" mt="4">
        <Button colorScheme="teal" mb="4" mx="auto">
          Create Management
        </Button>
        <TableGenerator data={managementData} title="Management" />
      </Flex>
    </Root>
  );
}
