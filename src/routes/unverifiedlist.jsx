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
let unVerifiedData = [
  {
    USER_ID: "0226",
    COORDINATOR_ID: "650166793dcec",
    NAME: "KESHAW DAS",
    MOBILE: "9999889999",
    CITY: "Kawardha",
    DATE: "2023-09-09 13:24:09",
  },
  {
    USER_ID: "0227",
    COORDINATOR_ID: "650166793dcec",
    NAME: "GOPAL DAS",
    MOBILE: "9999889999",
    CITY: "Kawardha",
    DATE: "2023-09-09 13:24:09",
  },
  {
    USER_ID: "0226",
    COORDINATOR_ID: "650166793dcec",
    NAME: "KESHAW DAS",
    MOBILE: "9999889999",
    CITY: "Kawardha",
    DATE: "2023-09-09 13:24:09",
  },
];

export default function UnVerifiedList() {
  let rows = unVerifiedData.map((data) => {
    return (
      <Tr _hover={{ backgroundColor: "gray.300", color: "gray.600" }}>
        <Td>{data.USER_ID}</Td>
        <Td>{data.COORDINATOR_ID}</Td>
        <Td>{data.NAME}</Td>
        <Td>{data.MOBILE}</Td>
        <Td>{data.CITY}</Td>
        <Td>{data.DATE}</Td>
        <Td>
          <Action />
        </Td>
      </Tr>
    );
  });
  return (
    <Root title="Unverified Users">
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
                <Th>COORDINATOR ID</Th>
                <Th>NAME</Th>
                <Th>MOBILE NO.</Th>
                <Th>CITY</Th>
                <Th>APPLY DATE</Th>
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
