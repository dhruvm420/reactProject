import { Flex, Button } from "@chakra-ui/react";
import Root from "./root";
import TableGenerator from "../components/tableGenerator";
let donorsData = [
  {
    IMAGE: "https://skskf.in/userimg/IMG-20230627-WA0045_09152023162926.jpg",
    NAME: "KESHAW DAS",
    AMOUNT: "4000",
    EMAIL: "keshawkwd666@gmail.com",
    "PAYMENT RECIEPT": "https://skskf.in/",
    MOBILE_NO: "8999323212",
    MODE: "Online",
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
