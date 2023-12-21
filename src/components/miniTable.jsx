import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
export default function MiniTable({ data }) {
  const headers = Object.keys(data);
  let rows = headers.map((header, index) => {
    if (header == "IMAGE") return <></>;
    return (
      <Tr
        key={index}
        bg="white"
        _hover={{
          bg: "gray.200",
        }}
      >
        <Td>{header}</Td>
        <Td>{data[header]}</Td>
      </Tr>
    );
  });
  return (
    <Table variant="simple">
      <Tbody>{rows}</Tbody>
    </Table>
  );
}
