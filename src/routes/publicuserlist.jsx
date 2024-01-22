import { Flex } from "@chakra-ui/react";
import Root from "../components/root";
import TableGenerator from "../components/tableGenerator";
let userListData = [
  {
    PROFILE: null,
    "USER ID": null,
    NAME: null,
    EMAIL: null,
    "REGISTER DATE": null,
  },
];
export default function PublicUserList() {
  return (
    <Root title="Public User">
      <Flex direction="column" mx="auto" mt="4">
        <TableGenerator
          data={userListData}
          title="User"
          actionItems={["delete"]}
        />
      </Flex>
    </Root>
  );
}
