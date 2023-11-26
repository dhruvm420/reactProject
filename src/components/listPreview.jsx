import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
export default function ListPreview(props) {
  const data = props.data;
  const head = props.head;
  const title = props.title;
  let rows = data.map((dataItem) => {
    return (
      <Tr>
        <Td>{dataItem[title]}</Td>
      </Tr>
    );
  });
  return (
    <TableContainer
      border="1px"
      borderColor="gray.400"
      bg="gray.200"
      minW="33vw"
      borderRadius="xl"
      color="gray.500"
    >
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th fontSize="lg">
              {head}({data.length})
            </Th>
          </Tr>
        </Thead>
        <Tbody>{rows}</Tbody>
      </Table>
    </TableContainer>
  );
}
