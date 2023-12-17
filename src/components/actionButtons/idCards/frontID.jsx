import { Flex, Text } from "@chakra-ui/react";
import { getCorrectDate } from "../../date";
export default function FrontID({ userData }) {
  return (
    <Flex flexDirection="column" my="2" fontSize="sm">
      <Flex>
        <Text w="50%">ID No.</Text>
        <Text>:</Text>
        <Text w="50%" textAlign="right">
          {userData._id}
        </Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text w="50%">Designation</Text>
        <Text>:</Text>
        <Text w="50%" textAlign="right">
          {userData.designation}
        </Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text w="50%">DOB</Text>
        <Text>:</Text>
        <Text w="50%" textAlign="right">
          {getCorrectDate(userData.DOB)}
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
        <Text w="50%">Register Date</Text>
        <Text>:</Text>
        <Text w="50%" textAlign="right">
          {getCorrectDate(userData.joiningDate)}
        </Text>
      </Flex>
    </Flex>
  );
}
