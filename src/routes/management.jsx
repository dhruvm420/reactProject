import { Flex, Button, Box } from "@chakra-ui/react";
import Root from "../components/root";
import TableGenerator from "../components/tableGenerator";
import { useState } from "react";
import { Link } from "react-router-dom";
import ActionPopUp from "../components/actionButtons/actionPopUp";

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
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [id, setId] = useState("");
  const [action, setAction] = useState("");
  return (
    <Root title="Management Team">
      <Flex direction="column" mx="auto" mt="4">
        <ActionPopUp
          formName={"management"}
          action={action}
          modifyId={id}
          isOpen={dialogIsOpen}
          setIsOpen={setDialogIsOpen}
        />
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
          setIsOpen={setDialogIsOpen}
          setAction={setAction}
          setId={setId}
          actionItems={["edit", "delete"]}
        />
      </Flex>
    </Root>
  );
}
