import React, { useState } from "react";
import {
  Input,
  Textarea,
  FormControl,
  FormLabel,
  Button,
  Select,
  HStack,
  Flex,
} from "@chakra-ui/react";
import Root from "../root.jsx";
import {
  axiosInstance,
  setAuthToken,
} from "../../components/axiosInstance.jsx";
import { useNavigate } from "react-router-dom";
import FormDialog from "./formDialog.jsx";

const CreateState = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [errorTitle, setErrorTitle] = useState(null);
  const [errorType, setErrorType] = useState(null);
  const [bloodGroup, setBloodGroup] = useState("select");
  const [formData, setFormData] = useState({
    name: "",
    sonOf: "",
    DOB: "",
    joiningDate: "",
    aadharNumber: "",
    mobileNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    stateResiding: "",
    cityResiding: "",
    addressResiding: "",
    qualification: "",
    designation: "",
    profilePicture: null,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedToken = localStorage.getItem("jwtToken");
    setAuthToken(storedToken);
    const formData = new FormData(e.target);
    console.log(formData.get("profilePicture"));
    // Perform form submission logic with formData

    setFormData((prev) => {
      return {
        ...prev,
        profilePicture: formData.get("profilePicture"),
      };
    });
    console.log(formData);
    axiosInstance
      .post("/superadmin/crud/state", formData)
      .then((response) => {
        console.log(response);
        const res = response.data.data.response;
        setErrorTitle(
          `Successfully Created State\nUserName: ${res["userName"]}`
        );
        setErrorType("state");
        setIsOpen(true);
      })
      .catch((error) => {
        console.log("Failed to create State:\n", error);
        setErrorTitle(error.response.data.message);
        setErrorType("error");
        setIsOpen(true);
      });
  };

  return (
    <Root title="State Form">
      <FormDialog
        title={errorTitle}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        type={errorType}
      />
      <form onSubmit={(e) => handleSubmit(e)} style={{ margin: "auto" }}>
        <Flex
          flexDirection="column"
          shadow="2xl"
          px="10"
          py="8"
          bg="white"
          borderRadius="3xl"
          m="4"
          justifyContent="space-evenly"
        >
          <Flex flexWrap="wrap" p="1">
            <FormControl w="60" m="2">
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
            <FormControl w="60" m="2">
              <FormLabel>S/O *</FormLabel>
              <Input
                type="text"
                name="sonOf"
                border="1px"
                borderColor="blue.500"
                value={formData.sonOf}
                onChange={handleInputChange}
                required
              />
            </FormControl>
            <FormControl w="60" m="2">
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
            <FormControl w="60" m="2">
              <FormLabel>Joining Date *</FormLabel>
              <Input
                type="date"
                name="joiningDate"
                border="1px"
                borderColor="blue.500"
                value={formData.joiningDate}
                onChange={handleInputChange}
                required
              />
            </FormControl>
          </Flex>
          <Flex flexWrap="wrap">
            <FormControl w="60" m="2">
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

            <FormControl w="60" m="2">
              <FormLabel>Mobile Number *</FormLabel>
              <Input
                type="tel"
                name="mobileNumber"
                border="1px"
                borderColor="blue.500"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                required
              />
            </FormControl>
            <FormControl w="60" m="2">
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
            <FormControl w="60" m="2">
              <FormLabel>Password *</FormLabel>
              <Input
                type="password"
                name="password"
                border="1px"
                borderColor="blue.500"
                w="60"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </FormControl>
          </Flex>
          <Flex flexWrap="wrap" spacing="8">
            <FormControl w="60" m="2">
              <FormLabel>Assign Code *</FormLabel>
              <Input
                type="text"
                name="assignCode"
                border="1px"
                w="60"
                borderColor="blue.500"
                required
              />
            </FormControl>
            <FormControl w="60" m="2">
              <FormLabel>State *</FormLabel>
              <Input
                type="text"
                name="stateResiding"
                border="1px"
                w="60"
                borderColor="blue.500"
                value={formData.stateResiding}
                onChange={handleInputChange}
                required
              />
            </FormControl>
            <FormControl w="60" m="2">
              <FormLabel>City *</FormLabel>
              <Input
                type="text"
                name="cityResiding"
                border="1px"
                w="60"
                borderColor="blue.500"
                value={formData.cityResiding}
                onChange={handleInputChange}
                required
              />
            </FormControl>
            <FormControl w="60" m="2">
              <FormLabel>Qualification *</FormLabel>
              <Input
                type="text"
                name="qualification"
                border="1px"
                borderColor="blue.500"
                w="60"
                value={formData.qualification}
                onChange={handleInputChange}
                required
              />
            </FormControl>
          </Flex>
          <Flex flexWrap="wrap">
            <FormControl w="60" m="2">
              <FormLabel>Work Place *</FormLabel>
              <Input
                type="text"
                name="workPlace"
                value={formData.workPlace}
                border="1px"
                borderColor="blue.500"
                onChange={handleInputChange}
                required
              />
            </FormControl>
            <FormControl w="60" m="2">
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
            <FormControl w="60" m="2">
              <FormLabel>Designation *</FormLabel>
              <Input
                type="text"
                name="designation"
                border="1px"
                borderColor="blue.500"
                w="60"
                value={formData.designation}
                onChange={handleInputChange}
                required
              />
            </FormControl>
            <FormControl w="60" m="2">
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
          </Flex>
          <FormControl w="60" m="2">
            <FormLabel>Profile Picture</FormLabel>
            <Input type="file" name="profilePicture" accept="image/*" />
          </FormControl>
          <Button type="submit" mt={4} colorScheme="blue" w="12vw" mx="auto">
            Submit
          </Button>
        </Flex>
      </form>
    </Root>
  );
};
export default CreateState;
