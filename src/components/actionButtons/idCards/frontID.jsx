import { Flex, Text } from "@chakra-ui/react";
export default function FrontID({ userData }) {
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
        <Text w="50%">Designation</Text>
        <Text>:</Text>
        <Text w="50%" textAlign="right">
          {userData.Designation}
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
        <Text w="50%">Mobile</Text>
        <Text>:</Text>
        <Text w="50%" textAlign="right">
          {userData.Mobile}
        </Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text w="50%">Register Date</Text>
        <Text>:</Text>
        <Text w="50%" textAlign="right">
          {userData["Register Date"]}
        </Text>
      </Flex>
    </Flex>
  );
}
