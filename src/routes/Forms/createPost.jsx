import React, { useState } from "react";
import {
  Input,
  FormControl,
  FormLabel,
  HStack,
  Button,
  Textarea,
  RadioGroup,
  Radio,
  Stack,
  Box,
} from "@chakra-ui/react";
import Root from "../root";

export default function CreatePost() {
  const [formData, setFormData] = useState({
    uploadMedia: "Image",
    timelineMedia: "",
    title: "",
    description: "",
    venue: "",
    city: "",
    eventStart: "",
    eventEnd: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRadioChange = (value) => {
    setFormData({
      ...formData,
      uploadMedia: value,
      timelineMedia: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic with formData
    console.log(formData);
  };

  return (
    <Root title="Create Post">
      <Box mx="auto">
        <form onSubmit={handleSubmit}>
          <Stack p="6" spacing="4" w="55vw">
            <FormControl>
              <FormLabel>Upload Media *</FormLabel>
              <RadioGroup defaultValue="Image" onChange={handleRadioChange}>
                <Stack direction="row">
                  <Radio value="Image">Image</Radio>
                  <Radio value="Video">Video</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
            <HStack spacing="20">
              <FormControl>
                <FormLabel>Timeline Media *</FormLabel>
                {formData.uploadMedia === "Image" ? (
                  <Input
                    type="file"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        timelineMedia: e.target.files[0],
                      })
                    }
                    accept="image/*"
                    required
                  />
                ) : (
                  <Textarea
                    name="timelineMedia"
                    border="1px"
                    borderColor="blue.500"
                    value={formData.timelineMedia}
                    onChange={handleInputChange}
                    placeholder="Enter video iframe tag"
                    required
                  />
                )}
              </FormControl>

              <FormControl>
                <FormLabel>Title *</FormLabel>
                <Input
                  type="text"
                  border="1px"
                  borderColor="blue.500"
                  name="title"
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
                required
              />
            </FormControl>
            <HStack spacing="20">
              <FormControl>
                <FormLabel>Venue *</FormLabel>
                <Input
                  type="text"
                  border="1px"
                  borderColor="blue.500"
                  name="venue"
                  value={formData.venue}
                  onChange={handleInputChange}
                  required
                />
              </FormControl>

              <FormControl>
                <FormLabel>City *</FormLabel>
                <Input
                  type="text"
                  border="1px"
                  borderColor="blue.500"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
              </FormControl>
            </HStack>

            <HStack spacing="20">
              <FormControl>
                <FormLabel>Event Start *</FormLabel>
                <Input
                  type="date"
                  border="1px"
                  borderColor="blue.500"
                  name="eventStart"
                  value={formData.eventStart}
                  onChange={handleInputChange}
                  required
                />
              </FormControl>

              <FormControl>
                <FormLabel>Event End *</FormLabel>
                <Input
                  type="date"
                  border="1px"
                  borderColor="blue.500"
                  name="eventEnd"
                  value={formData.eventEnd}
                  onChange={handleInputChange}
                  required
                />
              </FormControl>
            </HStack>
            <Button type="submit" mt={4} colorScheme="blue" w="8vw" mx="auto">
              Create Post
            </Button>
          </Stack>
        </form>
      </Box>
    </Root>
  );
}
