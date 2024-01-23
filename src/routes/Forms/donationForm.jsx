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
import Root from "../../components/root";
export default function DonationForm({ edit = false, modifyId = null }) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    pancard: "",
    address: "",
    photo: null,
    amount: "",
    reciept: null,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      [fieldName]: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic with formData
    if (edit) {
      // edit donation of person with id = modifyId
    } else {
      // create a new donation of person
    }
  };

  return (
    <Root title="Donate Form">
      <Box mx="auto" shadow="2xl" h="82vh" bg="white" borderRadius="3xl" my="4">
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
                <FormLabel>Email (optional)</FormLabel>
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
                <FormLabel>Pan Number(optional)</FormLabel>
                <Input
                  type="number"
                  name="pancard"
                  border="1px"
                  borderColor="blue.500"
                  value={formData.pancard}
                  onChange={handleInputChange}
                />
              </FormControl>
            </HStack>
            <HStack spacing="20">
              <FormControl>
                <FormLabel>Address *</FormLabel>
                <Textarea
                  name="address"
                  border="1px"
                  borderColor="blue.500"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Enter your address"
                  required
                />
              </FormControl>
            </HStack>
            <HStack>
              <FormControl>
                <FormLabel>Photo *</FormLabel>
                <Input
                  type="file"
                  onChange={(e) => handleFileChange(e, "photo")}
                  accept="image/*"
                  required
                />
              </FormControl>
              <FormControl>
                <FormLabel>Amount *</FormLabel>
                <Input
                  type="number"
                  name="amount"
                  border="1px"
                  borderColor="blue.500"
                  value={formData.amount}
                  onChange={handleInputChange}
                  required
                />
              </FormControl>
            </HStack>
            <HStack>
              <FormControl>
                <FormLabel>Payment Reciept *</FormLabel>
                <Input
                  type="file"
                  onChange={(e) => handleFileChange(e, "reciept")}
                  accept="image/*"
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
