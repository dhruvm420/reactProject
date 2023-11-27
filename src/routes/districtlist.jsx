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
let districtData = [
  {
    IMAGE: "https://skskf.in/userimg/IMG-20230627-WA0045_09152023162926.jpg",
    NAME: "KESHAW DAS",
    EMAIL: "keshawkwd666@gmail.com",
    DESIGNATION: "s./lohara",
    "Total Tehsil": "2",
    DATE: "2023-09-09 13:24:09",
  },
];

export default function DistrictList() {
  let rows = districtData.map((data) => {
    return (
      <Tr _hover={{ backgroundColor: "gray.300", color: "gray.600" }}>
        <Td>
          <img src={data.IMAGE} alt="" width="50px" height="50px" />
        </Td>
        <Td>{data.NAME}</Td>
        <Td>{data.EMAIL}</Td>
        <Td>{data.DESIGNATION}</Td>
        <Td>{data["Total Tehsil"]}</Td>
        <Td>{data.DATE}</Td>
        <Td>
          <Action />
        </Td>
      </Tr>
    );
  });
  return (
    <Root title="District List">
      <Flex direction="column" mx="auto" mt="4">
        <Button colorScheme="teal" mb="4" mx="auto">
          Create District
        </Button>
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
                <Th>Image</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Designation</Th>
                <Th>Total Tehsil</Th>
                <Th>Date</Th>
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
