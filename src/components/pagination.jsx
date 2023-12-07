import { Box, Button, Flex, Text } from "@chakra-ui/react";
export default function Pagination({ handlePageChange, currentPage }) {
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

        <Text mx="2">{`Page ${currentPage}`}</Text>

        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          colorScheme="white"
          color="teal"
        >
          Next &rarr;
        </Button>
      </Flex>
    </Box>
  );
}
