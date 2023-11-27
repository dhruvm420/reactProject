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
      shadow="xl"
      bg="white"
      color="gray.400"
      minW="33vw"
      borderRadius="xl"
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
