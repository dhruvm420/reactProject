import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import Action from "./action";
export default function TableGenerator({ data, title }) {
  const headers = Object.keys(data[0]);
  let noData = data == null || data[0][headers[0]] == null;
  let rows;
  if (noData) {
    rows = (
      <Tr>
        <Td colSpan={headers.length + 1} textAlign="center">
          No Registered {title} found
        </Td>
      </Tr>
    );
  } else {
    rows = data.map((dataItem, index) => (
      <Tr
        key={index}
        bg="white"
        _hover={{
          bg: "gray.200",
        }}
      >
        {headers.map((header, i) => (
          <Td key={i}>
            {header === "IMAGE" || header === "TIMELINE POST" ? (
              <img src={dataItem[header]} alt="" width="50px" height="50px" />
            ) : (
              dataItem[header]
            )}
          </Td>
        ))}
        <Td>
          <Action />
        </Td>
      </Tr>
    ));
  }

  return (
    <TableContainer
      border="1px"
      borderColor="gray.800"
      bg="white"
      borderRadius="xl"
      color="gray.500"
    >
      <Table variant="striped" colorScheme="white">
        <Thead>
          <Tr>
            {headers.map((header, index) => (
              <Th key={index}>{header}</Th>
            ))}
            <Th>ACTION</Th>
          </Tr>
        </Thead>
        <Tbody>{rows}</Tbody>
      </Table>
    </TableContainer>
  );
}
