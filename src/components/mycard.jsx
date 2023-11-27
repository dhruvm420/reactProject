import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";

export default function MyCard(card) {
  return (
    <Card
      w="16vw"
      h="33vh"
      shadow="xl"
      bg="gray.300"
      color="gray.500"
      borderRadius="3xl"
      mb="8"
      mx="4"
      _hover={{
        backgroundColor: "gray.400",
        color: "gray.600",
        border: "2px",
        borderColor: "gray.500",
      }}
    >
      <CardHeader m="0" pb="2">
        <Heading size="lg" textAlign="center">
          {" "}
          {card.title}{" "}
        </Heading>
      </CardHeader>
      <CardBody m="0" p="0">
        <Text fontSize="5xl" color="gray.600" textAlign="center">
          {card.count}
        </Text>
      </CardBody>
      <CardFooter>
        <Text fontSize="xl" w="15vw" textAlign="center">
          View More
        </Text>
      </CardFooter>
    </Card>
  );
}
