import { Flex, Button, Box } from "@chakra-ui/react";
import Root from "./root";
import TableGenerator from "../components/tableGenerator";
import { Link } from "react-router-dom";
let eventsData = [
  {
    IMAGE: null,
    TITLE: null,
    DESCRIPTION: null,
    VENUE: null,
    "EVENT DATE": null,
  },
];

export default function EventList() {
  return (
    <Root title="Event List">
      <Flex direction="column" mx="auto" mt="4">
        <Box mx="auto">
          <Link to="/createEvent">
            <Button colorScheme="teal" mb="4">
              New Event
            </Button>
          </Link>
        </Box>
        <TableGenerator data={eventsData} title="Events" />
      </Flex>
    </Root>
  );
}
