import { Flex, Button, Box } from "@chakra-ui/react";
import Root from "./root";
import TableGenerator from "../components/tableGenerator";
let bookingData = [
  {
    NAME: null,
    MOBILE: null,
    CITY: null,
    CONFIRM: null,
    "USER ID": null,
    "BOOKING DATE": null,
    "EVENT NAME": null,
  },
];

export default function EventBooking() {
  return (
    <Root title="Event Booking">
      <Flex direction="column" mx="auto" mt="4">
        <TableGenerator data={bookingData} title="Bookings" />
      </Flex>
    </Root>
  );
}
