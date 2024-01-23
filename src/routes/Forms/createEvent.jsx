import React, { useState } from "react";
import {
  Input,
  FormControl,
  FormLabel,
  Button,
  Stack,
  HStack,
  Textarea,
  Box,
} from "@chakra-ui/react";
import Root from "../../components/root";

export default function CreateEvent() {
  const [formData, setFormData] = useState({
    eventImage: null,
    title: "",
    description: "",
    venue: "",
    eventDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      eventImage: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic with formData
  };

  return (
    <Root title="Create Event">
      <Box mx="auto" shadow="2xl" h="60vh" bg="white" borderRadius="3xl" my="4">
        <form onSubmit={handleSubmit}>
          <Stack p="6" spacing="4" w="55vw">
            <HStack spacing="20">
              <FormControl>
                <FormLabel>Event Image *</FormLabel>
                <Input
                  type="file"
                  onChange={handleImageChange}
                  accept="image/*"
                  required
                />
              </FormControl>

              <FormControl>
                <FormLabel>Title *</FormLabel>
                <Input
                  type="text"
                  name="title"
                  value={formData.title}
                  border="1px"
                  borderColor="blue.500"
                  onChange={handleInputChange}
                  required
                />
              </FormControl>
            </HStack>
            <FormControl>
              <FormLabel>Description *</FormLabel>
              <Textarea
                name="description"
                value={formData.description}
                border="1px"
                borderColor="blue.500"
                onChange={handleInputChange}
                required
              />
            </FormControl>

            <HStack spacing="20">
              <FormControl>
                <FormLabel>Venue *</FormLabel>
                <Input
                  type="text"
                  name="venue"
                  value={formData.venue}
                  border="1px"
                  borderColor="blue.500"
                  onChange={handleInputChange}
                  required
                />
              </FormControl>

              <FormControl>
                <FormLabel>Event Date *</FormLabel>
                <Input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  border="1px"
                  borderColor="blue.500"
                  onChange={handleInputChange}
                  required
                />
              </FormControl>
            </HStack>
            <Button type="submit" mt={4} colorScheme="blue" w="8vw" mx="auto">
              Create Event
            </Button>
          </Stack>
        </form>
      </Box>
    </Root>
  );
}
