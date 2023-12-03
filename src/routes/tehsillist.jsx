import { Button, Flex, Box } from "@chakra-ui/react";
import TableGenerator from "../components/tableGenerator";
import { Link } from "react-router-dom";
import Root from "./root";
import DeleteOrVerify from "../components/actionButtons/deleteOrVerify";
import { useState } from "react";
let tehsilData = [
  {
    "USER ID": "0134",
    IMAGE: "https://skskf.in/userimg/IMG-20230627-WA0045_09152023162926.jpg",
    NAME: "KESHAW DAS",
    EMAIL: "keshawkwd666@gmail.com",
    DESIGNATION: "s./lohara",
    "Total Panchayat": "2",
    DATE: "2023-09-09 13:24:09",
  },
];

export default function TehsilList() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [id, setId] = useState("");
  const [action, setAction] = useState("");
  return (
    <>
      <DeleteOrVerify
        formName={"tehsil"}
        action={action}
        modifyId={id}
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
      />
      <Root title="Tehsil List">
        <Flex direction="column" mx="auto" mt="4">
          <Box mx="auto">
            <Link to="/createTehsil">
              <Button colorScheme="teal" mb="4">
                Create Tehsil
              </Button>
            </Link>
          </Box>
          <TableGenerator
            data={tehsilData}
            title="Tehsil"
            setIsOpen={setDialogIsOpen}
            setAction={setAction}
            setId={setId}
          />
        </Flex>
      </Root>
    </>
  );
}
