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
import Root from "../../components/root.jsx";
import {
  axiosInstance,
  setAuthToken,
} from "../../utilities/axiosInstance.jsx";
import { useNavigate, useParams } from "react-router-dom";
import FormDialog from "../../components/formDialog.jsx";
const CreateChild = () => {
  const { parent } = useParams();
  const data = JSON.parse(localStorage.getItem("userKaData"));
  let child;
  if (parent == "state") child = "district";
  else if (parent == "district") child = "tehsil";
  else if (parent == "tehsil") child = "panchayat";
  else child = "member";
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
    // Perform form submission logic with formData

    setFormData((prev) => {
      return {
        ...prev,
        profilePicture: formData.get("profilePicture"),
      };
    });
    axiosInstance
      .post(`/${parent}/crud/${child}`, formData)
      .then((response) => {
        const res = response.data.data.user;
        let titles = `Successfully Created ${child} with UserName: ${res["userName"]}`;
        setErrorTitle(titles);
        setErrorType("mini");
        setIsOpen(true);
      })
      .catch((error) => {
        setErrorTitle(error.response.data.message);
        setErrorType("error");
        setIsOpen(true);
      });
  };

  return (
    <Root title={`${child} Form`} noSideBar={true}>
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
          <FormControl visibility="hidden" position="absolute">
            <FormLabel>stateReferenceId *</FormLabel>
            <Input
              type="text"
              name="stateReferenceId"
              value={parent == "state" ? data._id : data.stateReferenceId}
              border="1px"
              borderColor="blue.500"
              required
            />
          </FormControl>
          {parent != "state" && (
            <FormControl visibility="hidden" position="absolute">
              <FormLabel>districtReferenceId *</FormLabel>
              <Input
                type="text"
                name="districtReferenceId"
                value={
                  parent == "district" ? data._id : data.districtReferenceId
                }
                border="1px"
                borderColor="blue.500"
                required
              />
            </FormControl>
          )}
          {parent != "state" && parent != "district" && (
            <FormControl visibility="hidden" position="absolute">
              <FormLabel>tehsilReferenceId *</FormLabel>
              <Input
                type="text"
                name="tehsilReferenceId"
                value={parent == "tehsil" ? data._id : data.tehsilReferenceId}
                border="1px"
                borderColor="blue.500"
              />
            </FormControl>
          )}
          <Flex flexWrap="wrap">
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
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </FormControl>
          </Flex>
          <Flex flexWrap="wrap">
            <FormControl w="60" m="2">
              <FormLabel>Assign Code *</FormLabel>
              <Input
                type="text"
                name="assignCode"
                border="1px"
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
                value={formData.qualification}
                onChange={handleInputChange}
                required
              />
            </FormControl>
          </Flex>
          <Flex flexWrap="wrap">
            <FormControl w="60" m="2">
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
            <FormControl w="60" m="2">
              <FormLabel>Profile Picture</FormLabel>
              <Input type="file" name="profilePicture" accept="image/*" />
            </FormControl>
          </Flex>
          <Button type="submit" mt={4} colorScheme="blue" w="12vw" mx="auto">
            Submit
          </Button>
        </Flex>
      </form>
    </Root>
  );
};
export default CreateChild;
