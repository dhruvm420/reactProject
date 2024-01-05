import React, { useState } from "react";
import {
  Input,
  Textarea,
  FormControl,
  FormLabel,
  Button,
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
      <form onSubmit={(e) => handleSubmit(e)}>
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
            <FormControl>
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
                name="DOB"
                border="1px"
                borderColor="blue.500"
                w="13vw"
                value={formData.DOB}
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
              <FormLabel>Assign Code *</FormLabel>
              <Input
                type="text"
                name="assignCode"
                border="1px"
                w="20vw"
                borderColor="blue.500"
                required
              />
            </FormControl>
          </HStack>
          <HStack>
            <FormControl>
              <FormLabel>State *</FormLabel>
              <Input
                type="text"
                name="stateResiding"
                border="1px"
                w="20vw"
                borderColor="blue.500"
                value={formData.stateResiding}
                onChange={handleInputChange}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>City *</FormLabel>
              <Input
                type="text"
                name="cityResiding"
                border="1px"
                w="20vw"
                borderColor="blue.500"
                value={formData.cityResiding}
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
              name="addressResiding"
              border="1px"
              borderColor="blue.500"
              value={formData.addressResiding}
              onChange={handleInputChange}
              placeholder="Enter your address"
            />
          </FormControl>
          <FormControl>
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
