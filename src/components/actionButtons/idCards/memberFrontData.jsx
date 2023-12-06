import { Flex, Text } from "@chakra-ui/react";
export default function MemberFrontData({ userData }) {
  return (
    <Flex flexDirection="column" my="2" fontSize="sm">
      <Flex>
        <Text w="50%">ID No.</Text>
        <Text>:</Text>
        <Text w="50%" textAlign="right">
          {userData["Id No."]}
        </Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text w="50%">Blood Group</Text>
        <Text>:</Text>
        <Text w="50%" textAlign="right">
          {userData["Blood Group"]}
        </Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text w="50%">Mobile</Text>
        <Text>:</Text>
        <Text w="50%" textAlign="right">
          {userData.Mobile}
        </Text>
      </Flex>
      <Flex justifyContent="space-between">
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
      </Flex>
    </Flex>
  );
}
