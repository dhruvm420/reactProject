import { Flex, Button, Box } from "@chakra-ui/react";
import Root from "./root";
import TableGenerator from "../components/tableGenerator";
import { Link } from "react-router-dom";
import ActionPopUp from "../components/actionButtons/actionPopUp";
import { useState } from "react";
let donorsData = [
  {
    IMAGE: null,
    NAME: null,
    AMOUNT: null,
    EMAIL: null,
    "PAYMENT RECIEPT": null,
    MOBILE_NO: null,
    MODE: null,
  },
];

export default function Donors() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [id, setId] = useState("");
  const [action, setAction] = useState("");
  return (
    <Root title="Donors List">
      <Flex direction="column" mx="auto" mt="4">
        <ActionPopUp
          formName={"donation"}
          action={action}
          modifyId={id}
          isOpen={dialogIsOpen}
          setIsOpen={setDialogIsOpen}
        />
        <Box mx="auto">
          <Link to="/donationForm">
            <Button colorScheme="teal" mb="4">
              Add Donor
            </Button>
          </Link>
        </Box>
        <TableGenerator
          data={donorsData}
          title="Donor"
          actionItems={["edit", "delete"]}
          setIsOpen={setDialogIsOpen}
          setAction={setAction}
          setId={setId}
        />
      </Flex>
    </Root>
  );
}
