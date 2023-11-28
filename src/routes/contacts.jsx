import { Flex } from "@chakra-ui/react";
import Root from "./root";
import TableGenerator from "../components/tableGenerator";
let contactData = [
  {
    NAME: "KESHAW DAS",
    MOBILE_NO: "8999323212",
    EMAIL: "keshawkwd666@gmail.com",
    TOPIC: "topic",
    DESCRIPTION: "description",
    REGISTER_DATE: "2000 September 11",
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
