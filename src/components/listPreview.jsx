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
  let d = props.data;
  const head = props.head;
  const title = props.title;
  let link = props.link;
  const total = d.length;
  let data = d.slice(0, 4);
  let rows = data.map((dataItem) => {
    return (
      <Tr color="gray.500">
        <Td>{dataItem[title]}</Td>
      </Tr>
    );
  });
  return (
    <TableContainer
      shadow="xl"
      bg="white"
      color="gray.500"
      minW="30vw"
      borderRadius="xl"
    >
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th fontSize="lg">
              {head}({total})
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {rows}
          {d.length > 4 && (
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
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
