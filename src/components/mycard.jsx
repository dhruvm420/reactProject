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
      w="16vw"
      h="35vh"
      shadow="xl"
      bg="white"
      color="gray.400"
      borderRadius="3xl"
      mb="8"
      mx="4"
      px="8"
    >
      <CardHeader m="0" pb="2">
        <Text fontSize="5xl" color="gray.600" textAlign="left">
          {count}
        </Text>
      </CardHeader>
      <CardBody m="0" p="0">
        <Heading size="lg" textAlign="left">
          {" "}
          {title}{" "}
        </Heading>
      </CardBody>
      <CardFooter p="4" mt="2">
        <Link to={link}>
          <Button colorScheme="gray">View More &rarr;</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
