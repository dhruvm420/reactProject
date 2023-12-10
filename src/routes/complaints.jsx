import Root from "./root";
import { Flex } from "@chakra-ui/react";
import TableGenerator from "../components/tableGenerator";
import Pagination from "../components/pagination";
import { useParams } from "react-router-dom";
import { useState } from "react";
let complaintsData = [
  {
    NAME: null,
    MESSAGE: null,
    DESCRIPTION: null,
    "REGISTER DATE": null,
    Status: null,
  },
];

export default function Complaints() {
  const [currentPage, setCurrentPage] = useState(1);
  const storedValuesString = localStorage.getItem("myValues");
  const storedValues = JSON.parse(storedValuesString);
  const count = (storedValues && storedValues.complaints) || 0;
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <Root title="Complaints">
      <Flex direction="column" mx="auto" mt="4">
        <TableGenerator
          data={complaintsData}
          title="Complaints "
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
