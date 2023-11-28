import { Button, Flex } from "@chakra-ui/react";
import TableGenerator from "../components/tableGenerator";
import Root from "./root";
let tehsilData = [
  {
    IMAGE: "https://skskf.in/userimg/IMG-20230627-WA0045_09152023162926.jpg",
    NAME: "KESHAW DAS",
    EMAIL: "keshawkwd666@gmail.com",
    DESIGNATION: "s./lohara",
    "Total Panchayat": "2",
    DATE: "2023-09-09 13:24:09",
  },
];

export default function TehsilList() {
  return (
    <Root title="Tehsil List">
      <Flex direction="column" mx="auto" mt="4">
        <Button colorScheme="teal" mb="4" mx="auto">
          Create Tehsil
        </Button>
        <TableGenerator data={tehsilData} title="Tehsil" />
      </Flex>
    </Root>
  );
}
