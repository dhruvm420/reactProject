import {
  Table,
  Thead,
  Box,
  Tbody,
  Tfoot,
  Tr,
  Flex,
  Th,
  Td,
  TableCaption,
  Button,
  TableContainer,
} from "@chakra-ui/react";
import Action from "../components/action";
import Root from "./root";
let complaintsData = [];

export default function Complaints() {
  let rows;
  if (complaintsData.length == 0)
    rows = (
      <Tr>
        <Td colSpan="6" textAlign="center">
          No Registered Complaints found
        </Td>
      </Tr>
    );
  else {
    rows = complaintsData.map((data) => {
      return (
        <Tr _hover={{ backgroundColor: "gray.100", color: "gray.600" }}>
          <Td>{data.NAME}</Td>
          <Td>{data.MESSAGE}</Td>
          <Td>{data.DESCRIPTION}</Td>
          <Td>{data.REGISTERED_DATE}</Td>
          <Td>{data.STATUS}</Td>
          <Td>
            <Action />
          </Td>
        </Tr>
      );
    });
  }
  return (
    <Root title="Complaints">
      <Flex direction="column" mx="auto" mt="4">
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
                <Th>NAME</Th>
                <Th>MESSAGE</Th>
                <Th>DESCRIPTION</Th>
                <Th>REGISTERED DATE</Th>
                <Th>STATUS</Th>
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
