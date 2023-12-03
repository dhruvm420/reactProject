import { Flex } from "@chakra-ui/react";
import Root from "./root";
import TableGenerator from "../components/tableGenerator";
let contactData = [
  {
    NAME: null,
    MOBILE_NO: null,
    EMAIL: null,
    TOPIC: null,
    DESCRIPTION: null,
    REGISTER_DATE: null,
  },
];

export default function Contact() {
  return (
    <Root title="Contact Us">
      <Flex direction="column" mx="auto" mt="4">
        <TableGenerator data={contactData} title="Contact" />
      </Flex>
    </Root>
  );
}
