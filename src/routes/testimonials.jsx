import { Box, Button, Flex } from "@chakra-ui/react";
import TableGenerator from "../components/tableGenerator";
import Root from "./root";
import ActionPopUp from "../components/actionButtons/actionPopUp";
import { useState } from "react";
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
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [id, setId] = useState("");
  const [action, setAction] = useState("");
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
        <ActionPopUp
          formName={"testimonial"}
          action={action}
          modifyId={id}
          isOpen={dialogIsOpen}
          setIsOpen={setDialogIsOpen}
        />
        <TableGenerator
          data={testimonialData}
          title="Testimonial"
          setIsOpen={setDialogIsOpen}
          setAction={setAction}
          setId={setId}
          actionItems={["delete", "edit"]}
        />
      </Flex>
    </Root>
  );
}
