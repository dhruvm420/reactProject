import { Flex, Text } from "@chakra-ui/react";
import { getCorrectDate } from "../../date";
export default function MemberBackData({ userData }) {
  return (
    <Flex flexDirection="column" my="2" fontSize="sm">
      <Flex>
        <Text w="50%">S/D/W of</Text>
        <Text>-</Text>
        <Text w="50%" textAlign="right">
          {userData.fatherName.toUpperCase()}
        </Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text w="50%">DOB</Text>
        <Text>-</Text>
        <Text w="50%" textAlign="right">
          {getCorrectDate(userData.DOB)}
        </Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text w="50%">Address</Text>
        <Text>- </Text>
        <Text w="50%" textAlign="right">
          {userData.addressResiding.toUpperCase()}
        </Text>
      </Flex>
    </Flex>
  );
}
