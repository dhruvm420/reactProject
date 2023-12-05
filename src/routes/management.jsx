import { Flex, Button, Box } from "@chakra-ui/react";
import Root from "./root";
import TableGenerator from "../components/tableGenerator";
import { Link } from "react-router-dom";
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
        <Box mx="auto">
          <Link to="/createManagement">
            <Button colorScheme="teal" mb="4">
              Create Management
            </Button>
          </Link>
        </Box>
        <TableGenerator
          data={managementData}
          title="Management"
          actionItems={["edit", "delete"]}
        />
      </Flex>
    </Root>
  );
}
