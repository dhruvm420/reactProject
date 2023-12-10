import { Box, Button, Flex } from "@chakra-ui/react";
import TableGenerator from "../components/tableGenerator";
import Root from "./root";
import ActionPopUp from "../components/actionButtons/actionPopUp";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Pagination from "../components/pagination";
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
  const [currentPage, setCurrentPage] = useState(1);
  const storedValuesString = localStorage.getItem("myValues");
  const storedValues = JSON.parse(storedValuesString);
  const count = (storedValues && storedValues.testimonials) || 0;
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
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
          actionItems={["delete"]}
        />
        <Pagination
          handlePageChange={handlePageChange}
          currentPage={currentPage}
          totalPages={count < 10 ? 1 : Math.ceil(count / 10)}
        />
      </Flex>
    </Root>
  );
}
