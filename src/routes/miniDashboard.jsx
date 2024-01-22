import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../components/header";
import {
  Card,
  CardHeader,
  Select,
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
  Mark,
} from "@chakra-ui/react";
import MiniTable from "../components/miniTable";
import { getCorrectDate } from "../utilities/date";
export default function Minidashboard() {
  const { type } = useParams();
  let url;
  if (type == "state") url = "/districtlist/state";
  else if (type == "district") url = "/tehsillist/district";
  else if (type == "tehsil") url = "/panchayatlist/tehsil";
  else url = "/verifiedmembers/panchayat";
  const data = JSON.parse(localStorage.getItem("userKaData"));
  return (
    <>
      <Header title={`${type.toUpperCase()} Dashboard`} noHamburger={true} />
      <Flex wrap={"wrap"}>
        <Link to="/minilogout">
          <Button colorScheme="red" m="2" fontSize={["12", "14", "18"]}>
            Log Out
          </Button>
        </Link>
        <Link to={type == "member" ? "/memberID" : `/id/${type}`}>
          <Button colorScheme="teal" m="2" fontSize={["12", "14", "18"]}>
            ID Card
          </Button>
        </Link>
        <Link to={`/certifcate/${type}`}>
          <Button colorScheme="teal" m="2" fontSize={["12", "14", "18"]}>
            Certificate
          </Button>
        </Link>
        {type != "member" && (
          <Link to={`/appletter/${type}`}>
            <Button colorScheme="teal" m="2" fontSize={["12", "14", "18"]}>
              Appointment Letter
            </Button>
          </Link>
        )}
        {type != "member" && (
          <Link to={`/joinletter/${type}`}>
            <Button colorScheme="teal" m="2" fontSize={["12", "14", "18"]}>
              Joining Letter
            </Button>
          </Link>
        )}
        {type == "panchayat" && (
          <Link to="/createMember/panchayat">
            <Button colorScheme="green" m="2" fontSize={["12", "14", "18"]}>
              Create Member
            </Button>
          </Link>
        )}
      </Flex>
      <Card align="center">
        <CardHeader>
          <Flex justifyContent="space-between" flexDirection={"column"}>
            <Box p="2">
              <img
                crossOrigin="anonymous"
                src={`https://sksk-backend.onrender.com/${data["profilePictureLink"]}`}
                alt=""
                width="150px"
                height="150px"
                style={{ margin: "auto" }}
              />
            </Box>
            <Box p="2">
              <Heading as="h1" fontSize={["20", "24", "36"]}>
                {data["name"]}
              </Heading>
            </Box>
          </Flex>
        </CardHeader>
        <CardBody border={"1px"} borderColor={"black"} borderRadius="16">
          <MiniTable data={data} />
        </CardBody>
        <CardFooter>
          {type != "member" && (
            <Link to={url}>
              <Button colorScheme="teal">View More &rarr;</Button>
            </Link>
          )}
        </CardFooter>
      </Card>
    </>
  );
}
