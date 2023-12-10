import { Box, Button, Flex, Text } from "@chakra-ui/react";
// export default function Pagination({ handlePageChange, currentPage , totalPages }) {
export default function Pagination({
  handlePageChange,
  currentPage,
  totalPages,
}) {
  console.log("totalPages " + totalPages);
  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, currentPage + 3);

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(
      <Button
        key={i}
        onClick={() => handlePageChange(i)}
        colorScheme={currentPage === i ? "teal" : "gray"}
        disabled={currentPage == i}
      >
        {i}
      </Button>
    );
  }

  return (
    <Box alignSelf="center" mt="4">
      <Flex alignItems="center">
        {currentPage !== 1 && (
          <Button
            onClick={() => handlePageChange(currentPage - 1)}
            colorScheme="white"
            color="teal"
          >
            &larr; Previous
          </Button>
        )}
        {pageNumbers}
        {/* <Text mx="2">{`Page ${currentPage}`}</Text> */}

        {currentPage !== totalPages && (
          <Button
            onClick={() => handlePageChange(currentPage + 1)}
            colorScheme="white"
            color="teal"
          >
            Next &rarr;
          </Button>
        )}
      </Flex>
    </Box>
  );
}
