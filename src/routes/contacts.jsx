import { Flex } from "@chakra-ui/react";
import Root from "./root";
import TableGenerator from "../components/tableGenerator";
import Pagination from "../components/pagination";
import { useParams } from "react-router-dom";
import { useState } from "react";
let contactData = [
  {
    NAME: null,
    MOBILE_NO: null,
    EMAIL: null,
    TOPIC: null,
    DESCRIPTION: null,
    REGISTER_DATE: null,
  },
];

export default function Contact() {
  const [currentPage, setCurrentPage] = useState(1);
  const storedValuesString = localStorage.getItem("myValues");
  const storedValues = JSON.parse(storedValuesString);
  const count = (storedValues && storedValues.contactus) || 0;
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <Root title="Contact Us">
      <Flex direction="column" mx="auto" mt="4">
        <TableGenerator
          data={contactData}
          title="Contact"
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
