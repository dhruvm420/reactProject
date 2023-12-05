import { Flex } from "@chakra-ui/react";
import Root from "./root";
import TableGenerator from "../components/tableGenerator";
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
  return (
    <Root title="Verified Members">
      <Flex direction="column" mx="auto" mt="4">
        <TableGenerator
          data={verifiedData}
          title="Verified Members"
          actionItems={["id", "certificate", "appointment", "delete", "edit"]}
        />
      </Flex>
    </Root>
  );
}
