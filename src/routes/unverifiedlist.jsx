import { Flex } from "@chakra-ui/react";
import TableGenerator from "../components/tableGenerator";
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
  return (
    <Root title="Unverified Users">
      <Flex direction="column" mx="auto" mt="4">
        <TableGenerator data={unVerifiedData} title="Unverified Members" />
      </Flex>
    </Root>
  );
}
