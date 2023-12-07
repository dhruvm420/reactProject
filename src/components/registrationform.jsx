import React, { useState } from "react";
import {
  Input,
  Textarea,
  FormControl,
  FormLabel,
  Button,
  Box,
  Stack,
  HStack,
  Flex,
} from "@chakra-ui/react";
const RegistrationForm = (props) => {
  const [formData, setFormData] = useState({
    fullName: "",
    sonOf: "",
    dob: "",
    joiningDate: "",
    aadharNumber: "",
    mobileNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    state: "",
    city: "",
    address: "",
    qualification: "",
    designation: "",
    profilePicture: null,
  });
  const formName = props.title;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      profilePicture: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic with formData
    console.log(formData);
  };

  const stateInput = (
    <FormControl>
      <FormLabel>State Name*</FormLabel>
      <Input
        type="text"
        name="stateName"
        border="1px"
        w="20vw"
        borderColor="blue.500"
        value={formData.stateName}
        onChange={handleInputChange}
        required
      />
    </FormControl>
  );
  const districtInput = (
    <FormControl>
      <FormLabel>District Name*</FormLabel>
      <Input
        type="text"
        name="districtName"
        border="1px"
        w="20vw"
        borderColor="blue.500"
        value={formData.districtName}
        onChange={handleInputChange}
        required
      />
    </FormControl>
  );
  const tehsilInput = (
    <FormControl>
      <FormLabel>Tehsil Name*</FormLabel>
      <Input
        type="text"
        name="tehsilName"
        border="1px"
        w="20vw"
        borderColor="blue.500"
        value={formData.tehsilName}
        onChange={handleInputChange}
        required
      />
    </FormControl>
  );

  return (
    <form onSubmit={handleSubmit}>
      <Flex
        flexDirection="column"
        mx="auto"
        shadow="2xl"
        h="100vh"
        px="6"
        py="2"
        bg="white"
        borderRadius="3xl"
        m="4"
        justifyContent="space-evenly"
      >
        <HStack>
          {formName !== "state" && stateInput}
          {formName !== "state" && formName !== "district" && districtInput}
          {formName === "panchayat" && tehsilInput}
        </HStack>
        <HStack>
          <FormControl>
            <FormLabel>Full Name *</FormLabel>
            <Input
              type="text"
              name="fullName"
              value={formData.fullName}
              border="1px"
              borderColor="blue.500"
              onChange={handleInputChange}
              required
            />
          </FormControl>
          <FormControl>
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
        </HStack>
        <HStack>
          <FormControl>
            <FormLabel>Date of Birth *</FormLabel>
            <Input
              type="date"
              name="dob"
              border="1px"
              borderColor="blue.500"
              w="13vw"
              value={formData.dob}
              onChange={handleInputChange}
              required
            />
          </FormControl>

          <FormControl>
            <FormLabel>Joining Date *</FormLabel>
            <Input
              type="date"
              name="joiningDate"
              border="1px"
              borderColor="blue.500"
              w="13vw"
              value={formData.joiningDate}
              onChange={handleInputChange}
              required
            />
          </FormControl>
        </HStack>
        <HStack spacing="8">
          <FormControl>
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

          <FormControl>
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

          <FormControl>
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
        </HStack>
        <HStack>
          <FormControl>
            <FormLabel>Password *</FormLabel>
            <Input
              type="password"
              name="password"
              border="1px"
              borderColor="blue.500"
              w="20vw"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </FormControl>

          <FormControl>
            <FormLabel>Confirm Password *</FormLabel>
            <Input
              type="password"
              name="confirmPassword"
              border="1px"
              borderColor="blue.500"
              w="20vw"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          </FormControl>
        </HStack>
        <HStack>
          <FormControl>
            <FormLabel>State *</FormLabel>
            <Input
              type="text"
              name="state"
              border="1px"
              w="20vw"
              borderColor="blue.500"
              value={formData.state}
              onChange={handleInputChange}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>City *</FormLabel>
            <Input
              type="text"
              name="city"
              border="1px"
              w="20vw"
              borderColor="blue.500"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Qualification *</FormLabel>
            <Input
              type="text"
              name="qualification"
              border="1px"
              borderColor="blue.500"
              w="20vw"
              value={formData.qualification}
              onChange={handleInputChange}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Designation *</FormLabel>
            <Input
              type="text"
              name="designation"
              border="1px"
              borderColor="blue.500"
              w="20vw"
              value={formData.designation}
              onChange={handleInputChange}
              required
            />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel>Address</FormLabel>
          <Textarea
            name="address"
            border="1px"
            borderColor="blue.500"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Enter your address"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Profile Picture</FormLabel>
          <Input type="file" onChange={handleFileChange} accept="image/*" />
        </FormControl>
        <Button type="submit" mt={4} colorScheme="blue" w="12vw" mx="auto">
          Submit
        </Button>
      </Flex>
    </form>
  );
};
export default RegistrationForm;
