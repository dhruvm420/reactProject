import {
  Card,
  Flex,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function MyCard({ title, count, link }) {
  return (
    <Card
      w="64"
      h="52"
      shadow="xl"
      bg="white"
      color="gray.500"
      borderRadius="3xl"
      mb="8"
      mx="4"
      px="9"
    >
      <CardHeader m="0" pb="2">
        <Text
          fontSize="4xl"
          fontWeight="bold"
          color="gray.600"
          textAlign="center"
        >
          {count}
        </Text>
      </CardHeader>
      <CardBody m="0" p="0">
        <Heading size="md" textAlign="center">
          {" "}
          {title}{" "}
        </Heading>
      </CardBody>
      <CardFooter>
        <Flex justifyContent="center" w="64">
          <Link to={link}>
            <Button colorScheme="gray" fontSize="sm" textAlign="center">
              View All &rarr;
            </Button>
          </Link>
        </Flex>
      </CardFooter>
    </Card>
  );
}
