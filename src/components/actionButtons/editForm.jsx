import React, { useEffect, useState } from "react";
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
  Text,
  Center,
  Spinner,
} from "@chakra-ui/react";
import CreateTestimonial from "../../routes/Forms/testimonialForm";
import ManagementForm from "../../routes/Forms/managementForm";
import DonationForm from "../../routes/Forms/donationForm";
import SliderForm from "../../routes/Forms/createSlider";
import ObjectiveForm from "../../routes/Forms/createObjective";
import FormDialog from "../../routes/Forms/formDialog";
import { axiosInstance, setAuthToken } from "../axiosInstance";
const formatDateForInput = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  month = month < 10 ? `0${month}` : month; // Adding leading zero if needed
  let day = date.getDate();
  day = day < 10 ? `0${day}` : day; // Adding leading zero if needed
  return `${year}-${month}-${day}`;
};
export default function EditForm(props) {
  let formName = props.formName;
  let modifyId = props.modifyId;
  const [changePassword, setChangePassword] = useState(false);
  const [changeProfilePic, setchangeProfilePic] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [errorTitle, setErrorTitle] = useState(null);
  const [errorType, setErrorType] = useState(null);
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
    const storedToken = localStorage.getItem("jwtToken");
    setAuthToken(storedToken);
    const formData = new FormData(e.target);
    // Perform form submission logic with formData
    console.log(formData);
    axiosInstance
      .patch(`/superadmin/crud/${formName}/${modifyId}`, formData)
      .then((response) => {
        console.log(response);
        setErrorTitle(`Successfully Edited!!!`);
        setErrorType("d");
        setIsOpen(true);
      })
      .catch((error) => {
        console.log("Failed to create State:\n", error);
        setErrorTitle(error.response.data.message);
        setErrorType("error");
        setIsOpen(true);
      });
  };

  const fetch = async () => {
    const storedToken = localStorage.getItem("jwtToken"); // Fetch the stored token
    let url = `/superadmin/crud/${formName}/${modifyId}`;
    if (storedToken) {
      // Set the token in the Axios headers before making the request
      setAuthToken(storedToken);

      // Make an authenticated request using axiosInstance
      await axiosInstance
        .get(url)
        .then((response) => {
          console.log(response);
          let obj = response.data.data.response[0];
          console.log(obj);
          obj.DOB = formatDateForInput(obj.DOB);
          obj.joiningDate = formatDateForInput(obj.joiningDate);
          setFormData(obj);
          setDataLoaded(true);
        })
        .catch((error) => {
          setDataLoaded(true);
          // Handle error, e.g., unauthorized access
          console.error("Error fetching data:", error);
        });
    }
  };
  useEffect(() => {
    fetch();
  }, []);

  if (!dataLoaded)
    return (
      <>
        <Center height="100vh">
          <Spinner size="xl" color="blue.500" />
          <Text px="2"> Loading... </Text>
        </Center>
      </>
    );
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
    <>
      <FormDialog
        title={errorTitle}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        type={errorType}
      />
      <form onSubmit={(e) => handleSubmit(e)}>
        <Stack p="6" spacing="0">
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
                type="number"
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
              w="15vw"
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
            />
          </FormControl>
          {changeProfilePic === true ? (
            <FormControl>
              <FormLabel>Profile Picture</FormLabel>
              <Input type="file" onChange={handleFileChange} accept="image/*" />
            </FormControl>
          ) : (
            <Button
              onClick={() => {
                setchangeProfilePic(true);
              }}
              colorScheme="blue"
              w="15vw"
              my="2"
            >
              Change Profile Picture
            </Button>
          )}

          <Button type="submit" mt={4} colorScheme="blue" w="12vw" mx="auto">
            Submit
          </Button>
        </Stack>
      </form>
    </>
  );
}
