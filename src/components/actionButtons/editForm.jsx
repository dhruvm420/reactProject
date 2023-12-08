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
  Heading,
  position,
} from "@chakra-ui/react";
import CreateTestimonial from "../../routes/Forms/testimonialForm";
import ManagementForm from "../../routes/Forms/managementForm";
import DonationForm from "../../routes/Forms/donationForm";
import SliderForm from "../../routes/Forms/createSlider";
import ObjectiveForm from "../../routes/Forms/createObjective";
export default function EditForm(props) {
  let formName = props.formName;
  let modifyId = props.modifyId;
  const [changePassword, setChangePassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    sonOf: "",
    dob: "",
    joiningDate: "",
    aadharNumber: "",
    mobileNumber: "",
    email: "",
    password: "",
    state: "",
    city: "",
    address: "",
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      profilePicture: file,
    });
  };
  //modifyId is the id of person whose data is to be modified
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic with formData
    // if(formName == "state") modify data of state with id 'modifyId'
    // if(formName == "tehsil") modify data of tehsil with id 'modifyId'
    // if(formName == "panchayat") modify data of panchayat with id 'modifyId'
    // if(formName == "district") modify data of district with id 'modifyId'

    // Going back
    console.log(formData);
    props.onClose();
  };

  if (formName == "verified")
    return <Heading>Member Apply Form will be shown here....</Heading>;
  if (formName == "testimonial")
    return <CreateTestimonial edit={true} modifyId={modifyId} />;
  if (formName == "management")
    return <ManagementForm edit={true} modifyId={modifyId} />;
  if (formName == "donation")
    return <DonationForm edit={true} modifyId={modifyId} />;
  if (formName == "slider")
    return <SliderForm edit={true} modifyId={modifyId} />;
  if (formName == "objective")
    return <ObjectiveForm edit={true} modifyId={modifyId} />;
  return (
    <form onSubmit={handleSubmit}>
      <Stack p="6" spacing="0">
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
        {changePassword === true ? (
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
        ) : (
          <Button
            onClick={() => {
              setChangePassword(true);
            }}
            colorScheme="blue"
            w="10vw"
            my="2"
          >
            Change Password
          </Button>
        )}
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
      </Stack>
    </form>
  );
}
