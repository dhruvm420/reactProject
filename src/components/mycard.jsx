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
      shadow="2xl"
      bg="white"
      borderRadius="3xl"
      color="gray.500"
      mb="8"
      mx="4"
      py={["0", "2", "4"]}
    >
      <CardHeader m="0" pb="2">
        <Text
          fontSize={["xl", "2xl", "4xl"]}
          fontWeight="bold"
          color="gray.600"
          textAlign="center"
        >
          {count}
        </Text>
      </CardHeader>
      <CardBody m="0" p="0">
        <Heading size={["xs", "sm", "md"]} textAlign="center">
          {" "}
          {title}{" "}
        </Heading>
      </CardBody>
      <CardFooter>
        <Flex justifyContent="center" px="12">
          <Link to={link}>
            <Button
              colorScheme="gray"
              fontSize={["10px", "12px", "14px"]}
              textAlign="center"
            >
              View All &rarr;
            </Button>
          </Link>
        </Flex>
      </CardFooter>
    </Card>
  );
}
