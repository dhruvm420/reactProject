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
import Root from "../../components/root.jsx";
import {
  axiosInstance,
  setAuthToken,
} from "../../utilities/axiosInstance.jsx";
import { useNavigate, useParams } from "react-router-dom";
import FormDialog from "../../components/formDialog.jsx";
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
    axiosInstance
      .post(url, formData)
      .then((response) => {
        let res = response.data.data.member;
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
          <Flex flexWrap="wrap">
            <FormControl visibility="hidden" position="absolute">
              <FormLabel>panchayatReferenceId *</FormLabel>
              <Input
                type="text"
                name="panchayatRefrenceId"
                value={data._id}
                border="1px"
                borderColor="blue.500"
                required
              />
            </FormControl>
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
            <FormControl w="60" m="2">
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
          </Flex>
          <Flex flexWrap="wrap">
            <FormControl w="60" m="2">
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
            <FormControl w="60" m="2">
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
                type="number"
                name="mobileNumber"
                border="1px"
                borderColor="blue.500"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                required
              />
            </FormControl>
          </Flex>
          <Flex flexWrap="wrap">
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
                name="districtResiding"
                border="1px"
                borderColor="blue.500"
                value={formData.districtResiding}
                onChange={handleInputChange}
                required
              />
            </FormControl>
            <FormControl w="60" m="2">
              <FormLabel>Pin Code *</FormLabel>
              <Input
                type="number"
                name="pincodeResiding"
                border="1px"
                borderColor="blue.500"
                value={formData.pincodeResiding}
                onChange={handleInputChange}
                required
              />
            </FormControl>
          </Flex>
          <Flex flexWrap="wrap">
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
              <FormLabel>Assign Unique Code *</FormLabel>
              <Input
                type="text"
                name="assignCode"
                value={formData.assignCode}
                onChange={handleInputChange}
                border="1px"
                borderColor="blue.500"
                required
              />
            </FormControl>
            <FormControl w="60" m="2">
              <FormLabel>Id Proof Type</FormLabel>
              <Input
                type="text"
                name="idProofType"
                value={formData.idProofType}
                border="1px"
                onChange={handleInputChange}
                borderColor="blue.500"
              />
            </FormControl>
            <FormControl w="60" m="2">
              <FormLabel>Profile Picture *</FormLabel>
              <Input type="file" name="profilePic" accept="image/*" required />
            </FormControl>
            <FormControl w="60" m="2">
              <FormLabel>adharCardImage</FormLabel>
              <Input type="file" name="adharCardImage" accept="image/*" />
            </FormControl>
          </Flex>
          <Flex flexWrap="wrap">
            <FormControl w="60" m="2">
              <FormLabel>idProofImage</FormLabel>
              <Input type="file" name="idProofImage" accept="image/*" />
            </FormControl>
            <FormControl w="60" m="2">
              <FormLabel>panCardImage</FormLabel>
              <Input type="file" name="panCardImage" accept="image/*" />
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
          <Button type="submit" mt={4} colorScheme="blue" w="12vw" mx="auto">
            Submit
          </Button>
        </Flex>
      </form>
    </Root>
  );
};
export default CreateMember;
