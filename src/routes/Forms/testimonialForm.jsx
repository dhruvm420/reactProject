import React, { useState } from "react";
import {
  Input,
  FormControl,
  FormLabel,
  Button,
  Box,
  Textarea,
  Stack,
  HStack,
} from "@chakra-ui/react";
import Root from "../root";
export default function CreateTestimonial() {
  const [formData, setFormData] = useState({
    name: "",
    photo: null,
    message: "",
    designation: "",
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
    console.log(formData);
  };

  return (
    <Root title="Create Management">
      <Box mx="auto">
        <form onSubmit={handleSubmit}>
          <Stack p="6" spacing="4" w="55vw">
            <HStack spacing="20">
              <FormControl>
                <FormLabel>Name *</FormLabel>
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
                <FormLabel>Photo *</FormLabel>
                <Input
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*"
                  required
                />
              </FormControl>
            </HStack>
            <HStack>
              <FormControl>
                <FormLabel>Message *</FormLabel>
                <Textarea
                  name="message"
                  border="1px"
                  borderColor="blue.500"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Enter your message"
                  required
                />
              </FormControl>
            </HStack>
            <HStack>
              <FormControl>
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
            </HStack>

            <Button type="submit" mt={4} colorScheme="blue" w="8vw" mx="auto">
              Submit
            </Button>
          </Stack>
        </form>
      </Box>
    </Root>
  );
}
