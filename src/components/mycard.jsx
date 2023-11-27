import {
  Card,
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
      w="17vw"
      h="35vh"
      shadow="xl"
      bg="white"
      color="gray.400"
      borderRadius="3xl"
      mb="8"
      mx="4"
      px="9"
    >
      <CardHeader m="0" pb="2">
        <Text fontSize="5xl" color="gray.600" textAlign="center">
          {count}
        </Text>
      </CardHeader>
      <CardBody m="0" p="0">
        <Heading size="lg" textAlign="center">
          {" "}
          {title}{" "}
        </Heading>
      </CardBody>
      <CardFooter>
        <Link to={link}>
          <Button colorScheme="gray" ml="2">
            View More &rarr;
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
