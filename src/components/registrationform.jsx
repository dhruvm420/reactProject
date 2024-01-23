import React, { useState } from "react";
import {
  Input,
  Textarea,
  FormControl,
  FormLabel,
  Button,
  Select,
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
  const [selectedState, setSelectedState] = useState("select-state");
  const [selectedDistrict, setSelectedDistrict] = useState("select-district");
  const [selectedTehsil, setSelectedTehsil] = useState("select-tehsil");
  const formName = props.title;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleOptionChange = (e) => {};

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
  };
  let stateList, stateInput;
  let districtList, districtInput;
  let tehsilList, tehsilInput;
  if (formName !== "state") {
    stateList = ["state-1", "state-2", "state-3"];
    stateInput = (
      <FormControl w="15vw" my="4">
        <FormLabel>State Name *</FormLabel>
        <Select onChange={handleOptionChange} value={selectedState}>
          {stateList.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </FormControl>
    );
  }
  if (formName !== "state" && formName !== "district") {
    districtList = ["district-1", "district-2", "district-3"];
    districtInput = (
      <FormControl w="15vw" m="4">
        <FormLabel>District Name *</FormLabel>
        <Select onChange={handleOptionChange} value={selectedDistrict}>
          {districtList.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </FormControl>
    );
  }
  if (formName === "panchayat") {
    tehsilList = ["tehsil-1", "tehsil-2", "tehsil-3"];
    tehsilInput = (
      <FormControl w="15vw" m="4">
        <FormLabel>Tehsil Name *</FormLabel>
        <Select onChange={handleOptionChange} value={selectedTehsil}>
          {tehsilList.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </FormControl>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex
        flexDirection="column"
        mx="auto"
        shadow="2xl"
        h="105vh"
        px="4"
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
