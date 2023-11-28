import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Button,
  TableCaption,
  TableContainer,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function ListPreview(props) {
  let data = props.data;
  const head = props.head;
  const title = props.title;
  let link = props.link;
  data = data.slice(0, 4);
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
      minW="30vw"
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
        <Tbody>
          {rows}
          <Tr>
            <Flex justifyContent="center" w="64" m="auto">
              <Link to={link}>
                <Button
                  colorScheme="gray"
                  fontSize="sm"
                  textAlign="center"
                  my="3"
                >
                  View More &rarr;
                </Button>
              </Link>
            </Flex>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
