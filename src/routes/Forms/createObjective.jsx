import React, { useState } from "react";
import {
  Input,
  FormControl,
  FormLabel,
  Button,
  Box,
  Stack,
  Textarea,
  HStack,
} from "@chakra-ui/react";
export default function ObjectiveForm({ edit = false, modifyId = null }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    position: "",
    image: null,
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
      image: file,
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
  };
  return (
    <Box
      mx="auto"
      shadow={edit ? "0" : "2xl"}
      h="45vh"
      bg="white"
      w="90vh"
      borderRadius="3xl"
      my="4"
    >
      <form onSubmit={handleSubmit}>
        <Stack p="6" spacing="4" w="40vw" mx="auto">
          <HStack spacing="20">
            <FormControl>
              <FormLabel>Event Image *</FormLabel>
              <Input
                type="file"
                onChange={handleFileChange}
                accept="image/*"
                border="none"
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>Title *</FormLabel>
              <Input
                type="title"
                name="title"
                border="1px"
                borderColor="blue.500"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </FormControl>
          </HStack>
          <FormControl>
            <FormLabel>Description *</FormLabel>
            <Textarea
              name="description"
              border="1px"
              borderColor="blue.500"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Enter Description"
            />
          </FormControl>
          <Button type="submit" mt={4} colorScheme="blue" w="8vw" mx="auto">
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
