import { Flex } from "@chakra-ui/react";
import Root from "../components/root";
import TableGenerator from "../components/tableGenerator";
let receiptData = [
  {
    NAME: null,
    "MOBILE NO": null,
    EMAIL: null,
    "RECEIPT APPLICATION": null,
    DESCRIPTION: null,
    "REGISTER DATE": null,
  },
];
export default function RecieptApplication() {
  return (
    <Root title="Receipt Application">
      <Flex direction="column" mx="auto" mt="4">
        <TableGenerator
          data={receiptData}
          title="Contact"
          actionItems={["delete"]}
        />
      </Flex>
    </Root>
  );
}
