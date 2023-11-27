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
let verifiedData = [
  {
    USER_ID: "0226",
    NAME: "KESHAW DAS",
    MOBILE: "9999889999",
    CITY: "Kawardha",
    AUTHORITY: "Member",
  },
  {
    USER_ID: "0227",
    NAME: "GOPAL DAS",
    MOBILE: "9999889999",
    CITY: "Kawardha",
    AUTHORITY: "Member",
  },
  {
    USER_ID: "0226",
    NAME: "KESHAW DAS",
    MOBILE: "9999889999",
    CITY: "Kawardha",
    AUTHORITY: "Member",
  },
];

export default function VerifiedList() {
  let rows = verifiedData.map((data) => {
    return (
      <Tr _hover={{ backgroundColor: "gray.300", color: "gray.600" }}>
        <Td>{data.USER_ID}</Td>
        <Td>{data.NAME}</Td>
        <Td>{data.MOBILE}</Td>
        <Td>{data.CITY}</Td>
        <Td>{data.AUTHORITY}</Td>
        <Td>
          <Action />
        </Td>
      </Tr>
    );
  });
  return (
    <Root title="Verified Users">
      <Flex direction="column" mx="auto" mt="4">
        <TableContainer
          border="1px"
          borderColor="gray.400"
          bg="gray.200"
          minW="80vw"
          borderRadius="xl"
          color="gray.500"
        >
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>USER ID</Th>
                <Th>NAME</Th>
                <Th>MOBILE NO.</Th>
                <Th>CITY</Th>
                <Th>AUTHORITY</Th>
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
