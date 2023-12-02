import { Flex, Button, Box } from "@chakra-ui/react";
import Root from "./root";
import TableGenerator from "../components/tableGenerator";
import { Link } from "react-router-dom";
let panchayatData = [
  {
    IMAGE: "https://skskf.in/userimg/IMG-20230627-WA0045_09152023162926.jpg",
    NAME: "KESHAW DAS",
    EMAIL: "keshawkwd666@gmail.com",
    DESIGNATION: "s./lohara",
    DATE: "2023-09-09 13:24:09",
  },
];

export default function PanchayatList() {
  return (
    <Root title="Panchayat List">
      <Flex direction="column" mx="auto" mt="4">
        <Box mx="auto">
          <Link to="/createPanchayat">
            <Button colorScheme="teal" mb="4">
              Create Panchayat
            </Button>
          </Link>
        </Box>
        <TableGenerator data={panchayatData} title="Panchayat" />
      </Flex>
    </Root>
  );
}
