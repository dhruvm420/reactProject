import { Flex, Button } from "@chakra-ui/react";
import Root from "./root";
import TableGenerator from "../components/tableGenerator";
let donorsData = [
  {
    IMAGE: null,
    NAME: null,
    AMOUNT: null,
    EMAIL: null,
    "PAYMENT RECIEPT": null,
    MOBILE_NO: null,
    MODE: null,
  },
];

export default function Donors() {
  return (
    <Root title="Donors List">
      <Flex direction="column" mx="auto" mt="4">
        <Button colorScheme="teal" mb="4" mx="auto">
          Add Donor
        </Button>
        <TableGenerator data={donorsData} title="Donor" />
      </Flex>
    </Root>
  );
}
