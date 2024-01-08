import { Flex, Text } from "@chakra-ui/react";
import { getCorrectDate } from "../../date";
export default function MemberFrontData({ userData }) {
  return (
    <Flex flexDirection="column" my="2" fontSize="sm">
      <Flex>
        <Text w="50%">ID No.</Text>
        <Text>:</Text>
        <Text w="50%" textAlign="right">
          {userData["userName"]}
        </Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text w="50%">Blood Group</Text>
        <Text>:</Text>
        <Text w="50%" textAlign="right">
          {userData["bloodGroup"]}
        </Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text w="50%">Mobile</Text>
        <Text>:</Text>
        <Text w="50%" textAlign="right">
          {userData.mobileNumber}
        </Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text w="50%">Designation</Text>
        <Text>:</Text>
        <Text w="50%" textAlign="right">
          {userData.designation}
        </Text>
      </Flex>
      {/* <Flex justifyContent="space-between">
        <Text w="50%">Valid From</Text>
        <Text>:</Text>
        <Text w="50%" textAlign="right">
          {userData["Valid From"]}
        </Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text w="50%">Valid To</Text>
        <Text>:</Text>
        <Text w="50%" textAlign="right">
          {userData["Valid To"]}
        </Text>
      </Flex> */}
    </Flex>
  );
}
