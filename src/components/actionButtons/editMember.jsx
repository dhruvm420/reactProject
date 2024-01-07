import React, { useEffect, useState } from "react";
import {
  Input,
  Textarea,
  FormControl,
  FormLabel,
  Button,
  Flex,
  Box,
  Stack,
  HStack,
  Heading,
  position,
  Select,
  Text,
  Center,
  Spinner,
} from "@chakra-ui/react";
import FormDialog from "../../routes/Forms/formDialog";
import { axiosInstance, setAuthToken } from "../axiosInstance";
import { useNavigate } from "react-router-dom";
const formatDateForInput = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  month = month < 10 ? `0${month}` : month; // Adding leading zero if needed
  let day = date.getDate();
  day = day < 10 ? `0${day}` : day; // Adding leading zero if needed
  return `${year}-${month}-${day}`;
};
export default function EditMember({ modifyId, formName, parent }) {
  let child;
  if (parent == "state") child = "district";
  else if (parent == "district") child = "tehsil";
  else if (parent == "tehsil") child = "panchayat";
  else child = "member";
  const [dataLoaded, setDataLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [idpanchayat, setIdPanchayat] = useState("");
  const [errorTitle, setErrorTitle] = useState(null);
  const [errorType, setErrorType] = useState(null);
  const [gender, setGender] = useState("select");
  const [bloodGroup, setBloodGroup] = useState("select");
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    DOB: "",
    joiningDate: "",
    aadharNumber: "",
    profession: "",
    mobileNumber: "",
    email: "",
    stateResiding: "",
    districtResiding: "",
    pincodeResiding: "",
    idProofType: "",
    cityResiding: "",
    addressResiding: "",
    qualification: "",
    designation: "",
    adharCardImage: null,
    idProofImage: null,
    panCardImage: null,
    assignCode: "",
    profilePic: null,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  const fetch = async () => {
    const storedToken = localStorage.getItem("jwtToken"); // Fetch the stored token
    let url = `/superadmin/crud/${formName}/${modifyId}`;
    if (parent != "superadmin") url = `/${parent}/crud/${child}/${modifyId}`;
    console.log("url", url);
    if (storedToken) {
      // Set the token in the Axios headers before making the request
      setAuthToken(storedToken);

      // Make an authenticated request using axiosInstance
      await axiosInstance
        .get(url)
        .then((response) => {
          console.log(response);
          let obj = response.data.data.response[0];
          console.log(obj);
          obj.DOB = formatDateForInput(obj.DOB);
          setIdPanchayat(obj.panchayatReferenceId);
          obj.profilePic = null;
          console.log(obj);
          setFormData(obj);
          setDataLoaded(true);
        })
        .catch((error) => {
          setDataLoaded(true);
          // Handle error, e.g., unauthorized access
          console.error("Error fetching data:", error);
        });
    }
  };
  useEffect(() => {
    fetch();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const storedToken = localStorage.getItem("jwtToken");
    setAuthToken(storedToken);
    const formData = new FormData(e.target);
    // Perform form submission logic with formData

    setFormData((prev) => {
      return {
        ...prev,
        profilePic: formData.get("profilePic"),
      };
    });
    let url = `/superadmin/crud/${formName}/${modifyId}`;
    if (parent != "superadmin") url = `/${parent}/crud/${child}/${modifyId}`;
    console.log("url", url);
    console.log(formData);
    axiosInstance
      .patch(url, formData)
      .then((response) => {
        console.log(response);
        let res = response.data.data.member;
        let titles = `Successfully edited`;
        setErrorTitle(titles);
        setErrorType("mini");
        setIsOpen(true);
      })
      .catch((error) => {
        console.log(`Failed to edit: ${child}`, error);
        setErrorTitle(error.response.data.message);
        setErrorType("error");
        setIsOpen(true);
      });
  };

  return (
    <>
      <FormDialog
        title={errorTitle}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        type={errorType}
      />
      <form onSubmit={(e) => handleSubmit(e)} style={{ margin: "auto" }}>
        <Flex
          flexDirection="column"
          px="10"
          py="8"
          bg="white"
          borderRadius="3xl"
          m="4"
          justifyContent="space-evenly"
        >
          <Flex flexWrap="wrap">
            {/* <FormControl visibility="hidden" position="absolute">
              <FormLabel>panchayatReferenceId *</FormLabel>
              <Input
                type="text"
                name="panchayatReferenceId"
                value={idpanchayat}
                onChange={handleInputChange}
                border="1px"
                borderColor="blue.500"
                required
              />
            </FormControl> */}
            <FormControl w="56" m="2">
              <FormLabel>Full Name *</FormLabel>
              <Input
                type="text"
                name="name"
                value={formData.name}
                border="1px"
                borderColor="blue.500"
                onChange={handleInputChange}
                required
              />
            </FormControl>
            <FormControl w="56" m="2">
              <FormLabel>Gender *</FormLabel>
              <Select
                name="gender"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                value={gender}
              >
                <option key={0} value={"Male"}>
                  {"Male"}
                </option>
                <option key={1} value={"Female"}>
                  {"Female"}
                </option>
                <option key={2} value={"Other"}>
                  {"Other"}
                </option>
              </Select>
            </FormControl>
            <FormControl w="56" m="2">
              <FormLabel>S/O *</FormLabel>
              <Input
                type="text"
                name="fatherName"
                border="1px"
                borderColor="blue.500"
                value={formData.fatherName}
                onChange={handleInputChange}
                required
              />
            </FormControl>
            <FormControl w="56" m="2">
              <FormLabel>Date of Birth *</FormLabel>
              <Input
                type="date"
                name="DOB"
                border="1px"
                borderColor="blue.500"
                value={formData.DOB}
                onChange={handleInputChange}
                required
              />
            </FormControl>
          </Flex>
          <Flex flexWrap="wrap">
            <FormControl w="56" m="2">
              <FormLabel>Profession *</FormLabel>
              <Input
                type="text"
                name="profession"
                border="1px"
                borderColor="blue.500"
                value={formData.profession}
                onChange={handleInputChange}
                required
              />
            </FormControl>
            <FormControl w="56" m="2">
              <FormLabel>Blood Group *</FormLabel>
              <Select
                name="bloodGroup"
                onChange={(e) => {
                  setBloodGroup(e.target.value);
                }}
                value={bloodGroup}
              >
                <option value={"A+"}>A+</option>
                <option value={"A-"}>A-</option>
                <option value={"B+"}>B+</option>
                <option value={"B-"}>B-</option>
                <option value={"AB+"}>AB+</option>
                <option value={"AB-"}>AB-</option>
                <option value={"O+"}>O+</option>
                <option value={"O-"}>O-</option>
              </Select>
            </FormControl>
            <FormControl w="56" m="2">
              <FormLabel>Aadhar Number *</FormLabel>
              <Input
                type="number"
                name="aadharNumber"
                border="1px"
                borderColor="blue.500"
                value={formData.aadharNumber}
                onChange={handleInputChange}
                required
              />
            </FormControl>

            <FormControl w="56" m="2">
              <FormLabel>Mobile Number *</FormLabel>
              <Input
                type="number"
                name="mobileNumber"
                border="1px"
                borderColor="blue.500"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                required
              />
            </FormControl>
          </Flex>
          <Flex flexWrap="wrap">
            <FormControl w="56" m="2">
              <FormLabel>Address</FormLabel>
              <Textarea
                name="addressResiding"
                border="1px"
                borderColor="blue.500"
                value={formData.addressResiding}
                onChange={handleInputChange}
                placeholder="Enter your address"
              />
            </FormControl>
            <FormControl w="56" m="2">
              <FormLabel>State *</FormLabel>
              <Input
                type="text"
                name="stateResiding"
                border="1px"
                borderColor="blue.500"
                value={formData.stateResiding}
                onChange={handleInputChange}
                required
              />
            </FormControl>
            <FormControl w="56" m="2">
              <FormLabel>City *</FormLabel>
              <Input
                type="text"
                name="districtResiding"
                border="1px"
                borderColor="blue.500"
                value={formData.districtResiding}
                onChange={handleInputChange}
                required
              />
            </FormControl>
            <FormControl w="56" m="2">
              <FormLabel>Pin Code *</FormLabel>
              <Input
                type="number"
                name="pincodeResiding"
                border="1px"
                borderColor="blue.500"
                value={formData.pincodeResiding}
                onChange={handleInputChange}
                required
              />
            </FormControl>
          </Flex>
          <Flex flexWrap="wrap">
            <FormControl w="56" m="2">
              <FormLabel>Qualification *</FormLabel>
              <Input
                type="text"
                name="qualification"
                border="1px"
                borderColor="blue.500"
                value={formData.qualification}
                onChange={handleInputChange}
                required
              />
            </FormControl>
            <FormControl w="56" m="2">
              <FormLabel>Designation *</FormLabel>
              <Input
                type="text"
                name="designation"
                border="1px"
                borderColor="blue.500"
                value={formData.designation}
                onChange={handleInputChange}
                required
              />
            </FormControl>
            <FormControl w="56" m="2">
              <FormLabel>Email *</FormLabel>
              <Input
                type="email"
                name="email"
                border="1px"
                borderColor="blue.500"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </FormControl>
          </Flex>
          <Flex flexWrap="wrap">
            <FormControl w="56" m="2">
              <FormLabel>Assign Unique Code *</FormLabel>
              <Input
                type="text"
                name="assignCode"
                value={formData.assignCode}
                onChange={handleInputChange}
                border="1px"
                borderColor="blue.500"
                required
              />
            </FormControl>
            <FormControl w="56" m="2">
              <FormLabel>Id Proof Type *</FormLabel>
              <Input
                type="text"
                name="idProofType"
                value={formData.idProofType}
                border="1px"
                onChange={handleInputChange}
                borderColor="blue.500"
                required
              />
            </FormControl>
            <FormControl w="56" m="2">
              <FormLabel>Profile Picture</FormLabel>
              <Input type="file" name="profilePic" accept="image/*" />
            </FormControl>
          </Flex>

          <Button type="submit" mt={4} colorScheme="blue" w="12vw" mx="auto">
            Submit
          </Button>
        </Flex>
      </form>
    </>
  );
}
