import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MiniTable from "./miniTable";
import { Center, Spinner, Text } from "@chakra-ui/react";
import { axiosInstance, setAuthToken } from "../utilities/axiosInstance";
import TableGenerator from "./tableGenerator";

export default function UnderData() {
  const performNavigation = (async = () => {
    const { parent } = useParams();
    let navigate = useNavigate();
    if (parent == "state") navigate("/districtlist/state");
    else if (parent == "district") navigate("/tehsillist/district");
    else if (parent == "tehsil") navigate("panchayatlist/tehsil");
    else navigate("/districtlist/state");
  });
  useEffect(() => {
    performNavigation();
  }, []);
  return <></>;
}
