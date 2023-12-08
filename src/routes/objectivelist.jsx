import { Flex, Button, Box } from "@chakra-ui/react";
import Root from "./root";
import TableGenerator from "../components/tableGenerator";
import { useState } from "react";
import { Link } from "react-router-dom";
import ActionPopUp from "../components/actionButtons/actionPopUp";

let data = [
  {
    IMAGE: "https://skskf.in/testinomial-img/1_1272022104258.jpg",
    TITLE: "जैविक खेती",
    DESCRIPTION: "",
  },
];

export default function ObjectiveList() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [id, setId] = useState("");
  const [action, setAction] = useState("");
  return (
    <Root title="Objective List">
      <Flex direction="column" mx="auto" mt="4">
        <ActionPopUp
          formName={"objective"}
          action={action}
          modifyId={id}
          isOpen={dialogIsOpen}
          setIsOpen={setDialogIsOpen}
        />
        <Box mx="auto">
          <Link to="/addObjective">
            <Button colorScheme="teal" mb="4">
              New Objective
            </Button>
          </Link>
        </Box>
        <TableGenerator
          data={data}
          title="objective"
          setIsOpen={setDialogIsOpen}
          setAction={setAction}
          setId={setId}
          actionItems={["edit", "delete"]}
        />
      </Flex>
    </Root>
  );
}
