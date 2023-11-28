import { Flex } from "@chakra-ui/react";
import Root from "./root";
import TableGenerator from "../components/tableGenerator";
let userListData = [
  {
    PROFILE: "https://skskf.in",
    "USER ID": "0238",
    NAME: "KESHAW DAS",
    EMAIL: "keshawkwd666@gmail.com",
    "REGISTER DATE": "2023-09-09 13:24:09",
  },
];
export default function PublicUserList() {
  return (
    <Root title="Public User">
      <Flex direction="column" mx="auto" mt="4">
        <TableGenerator data={userListData} title="User" />
      </Flex>
    </Root>
  );
}
