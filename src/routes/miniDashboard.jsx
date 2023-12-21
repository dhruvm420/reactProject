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
} from "@chakra-ui/react";
import MiniTable from "../components/miniTable";
import { getCorrectDate } from "../components/date";
export default function Minidashboard() {
  const { type } = useParams();

  const data = {
    name: localStorage.getItem("name"),
    DOB: getCorrectDate(localStorage.getItem("DOB")),
    joiningDate: getCorrectDate(localStorage.getItem("joiningDate")),
    aadharNumber: localStorage.getItem("aadharNumber"),
    mobileNumber: localStorage.getItem("mobileNumber"),
    designation: localStorage.getItem("designation"),
  };
  return (
    <>
      <Header title={`${type.toUpperCase()} Dashboard`} />
      <Link to="/minilogout">
        <Button colorScheme="teal" mt="5" mx="10">
          Log Out
        </Button>
      </Link>
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
        <CardBody>
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
