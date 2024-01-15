import { Flex, Text } from "@chakra-ui/react";
import { getCorrectDate } from "../../date";
export default function BackID({ userData }) {
  return (
    <Flex flexDirection="column" my="2" fontSize="sm">
      <Flex>
        <Text w="50%">S/D/W of</Text>
        <Text>-</Text>
        <Text w="50%" textAlign="right">
          {userData.sonOf.toUpperCase()}
        </Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text w="50%">ADDRESS</Text>
        <Text>- </Text>
        <Text w="50%" textAlign="right">
          {userData.addressResiding.toUpperCase()}
        </Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text w="50%">REGISTER DATE</Text>
        <Text>-</Text>
        <Text w="50%" textAlign="right">
          {getCorrectDate(userData.joiningDate)}
        </Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text w="50%">WORK PLACE</Text>
        <Text>- </Text>
        <Text w="50%" textAlign="right">
          {userData.workPlace.toUpperCase()}
        </Text>
      </Flex>
    </Flex>
  );
}
