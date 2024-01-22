import Root from "../components/root";
import { Flex } from "@chakra-ui/react";
import TableGenerator from "../components/tableGenerator";
let messageData = [
  {
    NAME: null,
    MOBILE: null,
    "MESSAGE TO": null,
    MESSAGE: null,
    "REGISTER DATE": null,
  },
];
export default function MyMessage() {
  return (
    <Root title="My Message">
      <Flex direction="column" mx="auto" mt="4">
        <TableGenerator
          data={messageData}
          title="Message"
          actionItems={["delete"]}
        />
      </Flex>
    </Root>
  );
}
