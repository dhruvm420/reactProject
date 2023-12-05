import { Box, Button, Flex } from "@chakra-ui/react";
import TableGenerator from "../components/tableGenerator";
import Root from "./root";
import { Link } from "react-router-dom";
let testimonialData = [
  {
    IMAGE: null,
    NAME: null,
    MESSAGE: null,
    DESIGNATION: null,
  },
];

export default function Testimonials() {
  return (
    <Root title="Testimonials">
      <Flex direction="column" mx="auto" mt="4">
        <Box mx="auto">
          <Link to="/createTestimonial">
            <Button colorScheme="teal" mb="4">
              Add Testimonial
            </Button>
          </Link>
        </Box>
        <TableGenerator
          data={testimonialData}
          title="Testimonial"
          actionItems={["delete", "edit"]}
        />
      </Flex>
    </Root>
  );
}
