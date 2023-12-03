import { Button, Flex } from "@chakra-ui/react";
import TableGenerator from "../components/tableGenerator";
import Root from "./root";
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
        <Button colorScheme="teal" mb="4" mx="auto">
          Add Testimonial
        </Button>
        <TableGenerator data={testimonialData} title="Testimonial" />
      </Flex>
    </Root>
  );
}
