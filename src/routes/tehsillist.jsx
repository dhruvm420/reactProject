import {
  Table,
  Thead,
  Box,
  Tbody,
  Tfoot,
  Button,
  Tr,
  Flex,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import Action from "../components/action";
import Root from "./root";
let tehsilData = [
  {
    IMAGE: "https://skskf.in/userimg/IMG-20230627-WA0045_09152023162926.jpg",
    NAME: "KESHAW DAS",
    EMAIL: "keshawkwd666@gmail.com",
    DESIGNATION: "s./lohara",
    "Total Panchayat": "2",
    DATE: "2023-09-09 13:24:09",
  },
];

export default function TehsilList() {
  let rows;
  if (tehsilData.length == 0)
    rows = (
      <Tr>
        <Td colSpan="6" textAlign="center">
          No Registered Tehsil found
        </Td>
      </Tr>
    );
  else {
    rows = tehsilData.map((data) => {
      return (
        <Tr _hover={{ backgroundColor: "gray.100", color: "gray.600" }}>
          <Td>
            <img src={data.IMAGE} alt="" width="50px" height="50px" />
          </Td>
          <Td>{data.NAME}</Td>
          <Td>{data.EMAIL}</Td>
          <Td>{data.DESIGNATION}</Td>
          <Td>{data["Total Panchayat"]}</Td>
          <Td>{data.DATE}</Td>
          <Td>
            <Action />
          </Td>
        </Tr>
      );
    });
  }
  return (
    <Root title="Tehsil List">
      <Flex direction="column" mx="auto" mt="4">
        <Button colorScheme="teal" mb="4" mx="auto">
          Create Tehsil
        </Button>
        <TableContainer
          border="1px"
          borderColor="gray.300"
          bg="white"
          minW="80vw"
          borderRadius="xl"
          color="gray.500"
        >
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Image</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Designation</Th>
                <Th>Total Panchayat</Th>
                <Th>Date</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>{rows}</Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Root>
  );
}
