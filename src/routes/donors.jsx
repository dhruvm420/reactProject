import { Flex, Button, Box } from "@chakra-ui/react";
import Root from "./root";
import TableGenerator from "../components/tableGenerator";
import { Link } from "react-router-dom";
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
        <Box mx="auto">
          <Link to="/donationForm">
            <Button colorScheme="teal" mb="4">
              Add Donor
            </Button>
          </Link>
        </Box>
        <TableGenerator data={donorsData} title="Donor" />
      </Flex>
    </Root>
  );
}
