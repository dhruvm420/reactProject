import { Flex, Text } from "@chakra-ui/react";
export default function MemberBackData({ userData }) {
  return (
    <Flex flexDirection="column" my="2" fontSize="sm">
      <Flex>
        <Text w="50%">S/D/W of</Text>
        <Text>:</Text>
        <Text w="50%" textAlign="right">
          {userData["S/D/W of"]}
        </Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text w="50%">DOB</Text>
        <Text>:</Text>
        <Text w="50%" textAlign="right">
          {userData.DOB}
        </Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text w="50%">Address</Text>
        <Text>: </Text>
        <Text w="50%" textAlign="right">
          {userData.Address}
        </Text>
      </Flex>
    </Flex>
  );
}
