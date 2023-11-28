import { Button, Flex } from "@chakra-ui/react";
import TableGenerator from "../components/tableGenerator";
import Root from "./root";
let testimonialData = [
  {
    IMAGE: "https://skskf.in/userimg/IMG-20230627-WA0045_09152023162926.jpg",
    NAME: "KESHAW DAS",
    MESSAGE: "message here...",
    DESIGNATION: "s./lohara",
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
