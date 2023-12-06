import { Flex } from "@chakra-ui/react";
import Root from "./root";
import TableGenerator from "../components/tableGenerator";
import { useState } from "react";
import ActionPopUp from "../components/actionButtons/actionPopUp";
let verifiedData = [
  {
    USER_ID: "0226",
    NAME: "KESHAW DAS",
    MOBILE: "9999889999",
    CITY: "Kawardha",
    AUTHORITY: "Member",
  },
  {
    USER_ID: "0227",
    NAME: "GOPAL DAS",
    MOBILE: "9999889999",
    CITY: "Kawardha",
    AUTHORITY: "Member",
  },
  {
    USER_ID: "0226",
    NAME: "KESHAW DAS",
    MOBILE: "9999889999",
    CITY: "Kawardha",
    AUTHORITY: "Member",
  },
];

export default function VerifiedList() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [id, setId] = useState("");
  const [action, setAction] = useState("");
  return (
    <Root title="Verified Members">
      <Flex direction="column" mx="auto" mt="4">
        <ActionPopUp
          formName={"verified"}
          action={action}
          modifyId={id}
          isOpen={dialogIsOpen}
          setIsOpen={setDialogIsOpen}
        />
        <TableGenerator
          data={verifiedData}
          title="Verified Members"
          setIsOpen={setDialogIsOpen}
          setAction={setAction}
          setId={setId}
          actionItems={["id", "certificate", "appointment", "delete", "edit"]}
        />
      </Flex>
    </Root>
  );
}
