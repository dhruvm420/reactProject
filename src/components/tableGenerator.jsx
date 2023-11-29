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
  if (!data || data.length === 0) {
    return (
      <TableContainer
        border="1px"
        borderColor="gray.300"
        bg="white"
        minW="80vw"
        borderRadius="xl"
        color="gray.500"
      >
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th colSpan="6" textAlign="center">
                No Registered {title} found
              </Th>
            </Tr>
          </Thead>
          <Tbody></Tbody>
        </Table>
      </TableContainer>
    );
  }

  const headers = Object.keys(data[0]);

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
        <Tbody>
          {data.map((dataItem, index) => (
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
                    <img
                      src={dataItem[header]}
                      alt=""
                      width="50px"
                      height="50px"
                    />
                  ) : (
                    dataItem[header]
                  )}
                </Td>
              ))}
              <Td>
                <Action />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
