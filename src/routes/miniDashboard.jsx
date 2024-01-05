import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../components/header";
import {
  Card,
  CardHeader,
  Button,
  CardBody,
  CardFooter,
  Center,
  Spinner,
  Box,
  Text,
  Heading,
  Flex,
  HStack,
} from "@chakra-ui/react";
import MiniTable from "../components/miniTable";
import { getCorrectDate } from "../components/date";
export default function Minidashboard() {
  const { type } = useParams();
  const data = JSON.parse(localStorage.getItem("userKaData"));
  return (
    <>
      <Header title={`${type.toUpperCase()} Dashboard`} noHamburger={true} />
      <HStack m="2" spacing="2">
        <Link to="/minilogout">
          <Button colorScheme="red">Log Out</Button>
        </Link>
        <Link to="/id">
          <Button colorScheme="teal">ID Card</Button>
        </Link>
        <Link to="/certifcate">
          <Button colorScheme="teal">Certificate</Button>
        </Link>
        <Link to="/appletter">
          <Button colorScheme="teal">Appointment Letter</Button>
        </Link>
      </HStack>
      <Card align="center">
        <CardHeader>
          <Flex justifyContent="space-between" w="30vw">
            <Box>
              <img
                crossOrigin="anonymous"
                src={`https://sksk-backend.onrender.com/${data["profilePictureLink"]}`}
                alt=""
                width="150px"
                height="150px"
              />
            </Box>
            <Box>
              <Heading>{data["name"]}</Heading>
            </Box>
          </Flex>
        </CardHeader>
        <CardBody border={"1px"} borderColor={"black"} borderRadius="16">
          <MiniTable data={data} />
        </CardBody>
        <CardFooter>
          <Link to={`/underdata/${type}`}>
            <Button colorScheme="teal">View More &rarr;</Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}
