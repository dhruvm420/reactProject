import React, { useState } from "react";
import {
  Input,
  FormControl,
  FormLabel,
  Button,
  Select,
  Box,
  Stack,
  HStack,
} from "@chakra-ui/react";
import Root from "../../components/root";
export default function ManagementForm({ edit = false, modifyId = null }) {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    designation: "",
    positon: "",
    profilePicture: null,
  });
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
    if (edit) {
      // edit person with id = modifyId
    } else {
      // create new
    }
    console.log(formData);
  };
  const allstates = [
    "International",
    "National",
    "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Ladakh",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  return (
    <Root title="Create Management">
      <Box mx="auto" shadow="2xl" h="63vh" bg="white" borderRadius="3xl" my="4">
        <form onSubmit={handleSubmit}>
          <Stack p="6" spacing="4" w="55vw">
            <HStack spacing="20">
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
            </HStack>
            <HStack spacing="20">
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  border="1px"
                  borderColor="blue.500"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Designation</FormLabel>
                <Input
                  type="text"
                  name="designation"
                  border="1px"
                  borderColor="blue.500"
                  value={formData.designation}
                  onChange={handleInputChange}
                />
              </FormControl>
            </HStack>
            <HStack spacing="20">
              <FormControl>
                <FormLabel>Category</FormLabel>
                <Select
                  border="1px"
                  borderColor="blue.500"
                  onChange={handleInputChange}
                  value={formData.category}
                >
                  {allstates.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Position</FormLabel>
                <Input
                  type="text"
                  name="designation"
                  border="1px"
                  borderColor="blue.500"
                  value={formData.designation}
                  onChange={handleInputChange}
                />
              </FormControl>
            </HStack>
            <FormControl>
              <FormLabel>Profile Picture</FormLabel>
              <Input type="file" onChange={handleFileChange} accept="image/*" />
            </FormControl>
            <Button type="submit" mt={4} colorScheme="blue" w="8vw" mx="auto">
              Submit
            </Button>
          </Stack>
        </form>
      </Box>
    </Root>
  );
}
