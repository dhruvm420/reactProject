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

export default function MyCard({ card }) {
  let linkDestination = `\${card.title}`;
  return (
    <Link>
      <Card
        w="20vw"
        h="33vh"
        shadow="lg"
        bg="teal.300"
        color="gray.500"
        borderRadius="3xl"
        mb="8"
      >
        <CardHeader>
          <Heading size="xl" textAlign="center">
            {" "}
            {card.title}{" "}
          </Heading>
        </CardHeader>
        <CardBody>
          <Text fontSize="5xl" textAlign="center">
            {card.count}
          </Text>
        </CardBody>
      </Card>
    </Link>
  );
}
