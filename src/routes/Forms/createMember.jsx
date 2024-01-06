import React, { useState } from "react";
import {
  Input,
  Textarea,
  FormControl,
  FormLabel,
  Button,
  Select,
  HStack,
  Flex,
} from "@chakra-ui/react";
import Root from "../root.jsx";
import {
  axiosInstance,
  setAuthToken,
} from "../../components/axiosInstance.jsx";
import { useNavigate, useParams } from "react-router-dom";
import FormDialog from "./formDialog.jsx";
const CreateMember = () => {
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
  const [gender, setGender] = useState("select");
  const [bloodGroup, setBloodGroup] = useState("select");
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    DOB: "",
    joiningDate: "",
    aadharNumber: "",
    profession: "",
    mobileNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    stateResiding: "",
    districtResiding: "",
    pincodeResiding: "",
    idProofType: "",
    cityResiding: "",
    addressResiding: "",
    qualification: "",
    designation: "",
    adharCardImage: null,
    idProofImage: null,
    panCardImage: null,
    assignCode: "",
    profilePic: null,
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
    console.log(formData.get("profilePic"));
    // Perform form submission logic with formData

    setFormData((prev) => {
      return {
        ...prev,
        profilePic: formData.get("profilePic"),
        adharCardImage: formData.get("adharCardImage"),
        idProofImage: formData.get("idProofImage"),
        panCardImage: formData.get("panCardImage"),
      };
    });
    let url = `/${parent}/crud/${child}`;
    console.log(formData);
    axiosInstance
      .post(url, formData)
      .then((response) => {
        console.log(response);
        let res = response.data.data.member;
        let titles = `Successfully Created ${child} with UserName: ${res["userName"]}`;
        setErrorTitle(titles);
        setErrorType("mini");
        setIsOpen(true);
      })
      .catch((error) => {
        console.log(`Failed to create State: ${child}`, error);
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
      <form onSubmit={(e) => handleSubmit(e)}>
        <Flex
          flexDirection="column"
          mx="auto"
          w="90vw"
          shadow="2xl"
          //   h="105vh"
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
              <FormLabel>Gender *</FormLabel>
              <Select
                name="gender"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                value={gender}
              >
                <option key={0} value={"Male"}>
                  {"Male"}
                </option>
                <option key={1} value={"Female"}>
                  {"Female"}
                </option>
                <option key={2} value={"Other"}>
                  {"Other"}
                </option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>S/O *</FormLabel>
              <Input
                type="text"
                name="fatherName"
                border="1px"
                borderColor="blue.500"
                value={formData.fatherName}
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
          </HStack>
          <FormControl>
            <FormLabel>Profession *</FormLabel>
            <Input
              type="text"
              name="profession"
              border="1px"
              borderColor="blue.500"
              value={formData.profession}
              onChange={handleInputChange}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Blood Group *</FormLabel>
            <Select
              name="bloodGroup"
              onChange={(e) => {
                setBloodGroup(e.target.value);
              }}
              value={bloodGroup}
            >
              <option value={"A+"}>A+</option>
              <option value={"A-"}>A-</option>
              <option value={"B+"}>B+</option>
              <option value={"B-"}>B-</option>
              <option value={"AB+"}>AB+</option>
              <option value={"AB-"}>AB-</option>
              <option value={"O+"}>O+</option>
              <option value={"O-"}>O-</option>
            </Select>
          </FormControl>
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
          </HStack>
          <HStack>
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
                name="districtResiding"
                border="1px"
                w="20vw"
                borderColor="blue.500"
                value={formData.districtResiding}
                onChange={handleInputChange}
                required
              />
            </FormControl>
          </HStack>
          <HStack>
            <FormControl>
              <FormLabel>Pin Code *</FormLabel>
              <Input
                type="number"
                name="pincodeResiding"
                border="1px"
                w="20vw"
                borderColor="blue.500"
                value={formData.pincodeResiding}
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
          <HStack>
            <FormControl>
              <FormLabel>Email *</FormLabel>
              <Input
                type="email"
                name="email"
                border="1px"
                w="20vw"
                borderColor="blue.500"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </FormControl>
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
          </HStack>
          <HStack>
            <FormControl>
              <FormLabel>Assign Code *</FormLabel>
              <Input
                type="text"
                name="assignCode"
                value={formData.assignCode}
                onChange={handleInputChange}
                border="1px"
                w="20vw"
                borderColor="blue.500"
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>Id Proof Type *</FormLabel>
              <Input
                type="text"
                name="idProofType"
                value={formData.idProofType}
                border="1px"
                w="20vw"
                onChange={handleInputChange}
                borderColor="blue.500"
                required
              />
            </FormControl>
          </HStack>
          <FormControl>
            <FormLabel>Profile Picture</FormLabel>
            <Input type="file" name="profilePic" accept="image/*" />
          </FormControl>
          <FormControl>
            <FormLabel>adharCardImage</FormLabel>
            <Input type="file" name="adharCardImage" accept="image/*" />
          </FormControl>
          <FormControl>
            <FormLabel>idProofImage</FormLabel>
            <Input type="file" name="idProofImage" accept="image/*" />
          </FormControl>
          <FormControl>
            <FormLabel>panCardImage</FormLabel>
            <Input type="file" name="panCardImage" accept="image/*" />
          </FormControl>
          <Button type="submit" mt={4} colorScheme="blue" w="12vw" mx="auto">
            Submit
          </Button>
        </Flex>
      </form>
    </Root>
  );
};
export default CreateMember;
