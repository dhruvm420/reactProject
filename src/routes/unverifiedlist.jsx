import { Flex } from "@chakra-ui/react";
import TableGenerator from "../components/tableGenerator";
import { useState } from "react";
import ActionPopUp from "../components/actionButtons/actionPopUp";
import Root from "./root";
let unVerifiedData = [
  {
    USER_ID: "0226",
    COORDINATOR_ID: "650166793dcec",
    NAME: "KESHAW DAS",
    MOBILE: "9999889999",
    CITY: "Kawardha",
    DATE: "2023-09-09 13:24:09",
  },
  {
    USER_ID: "0227",
    COORDINATOR_ID: "650166793dcec",
    NAME: "GOPAL DAS",
    MOBILE: "9999889999",
    CITY: "Kawardha",
    DATE: "2023-09-09 13:24:09",
  },
  {
    USER_ID: "0226",
    COORDINATOR_ID: "650166793dcec",
    NAME: "KESHAW DAS",
    MOBILE: "9999889999",
    CITY: "Kawardha",
    DATE: "2023-09-09 13:24:09",
  },
];

export default function UnVerifiedList() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [id, setId] = useState("");
  const [action, setAction] = useState("");
  return (
    <Root title="Unverified Members">
      <Flex direction="column" mx="auto" mt="4">
        <ActionPopUp
          formName={"unverified"}
          action={action}
          modifyId={id}
          isOpen={dialogIsOpen}
          setIsOpen={setDialogIsOpen}
        />
        <TableGenerator
          data={unVerifiedData}
          title="Unverified Members"
          setIsOpen={setDialogIsOpen}
          setAction={setAction}
          setId={setId}
          actionItems={["verify", "delete"]}
        />
      </Flex>
    </Root>
  );
}
