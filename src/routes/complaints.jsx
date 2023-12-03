import Root from "./root";
import { Flex } from "@chakra-ui/react";
import TableGenerator from "../components/tableGenerator";
let complaintsData = [
  {
    NAME: null,
    MESSAGE: null,
    DESCRIPTION: null,
    "REGISTER DATE": null,
    Status: null,
  },
];

export default function Complaints() {
  return (
    <Root title="Complaints">
      <Flex direction="column" mx="auto" mt="4">
        <TableGenerator data={complaintsData} title="Complaints " />
      </Flex>
    </Root>
  );
}
