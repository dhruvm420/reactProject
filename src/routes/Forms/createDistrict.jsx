import { useState, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  Select,
  Input,
  Textarea,
  Button,
  Flex,
  HStack,
} from "@chakra-ui/react";
import Root from "../root";
import { axiosInstance, setAuthToken } from "../../components/axiosInstance";
import { useNavigate } from "react-router-dom";
import FormDialog from "./formDialog";
export default function CreateDistrict() {
  const [isOpen, setIsOpen] = useState(false);
  const [errorTitle, setErrorTitle] = useState(null);
  const [stateList, setStateList] = useState([]);
  const [objectList, setObjectList] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [stateId, setStateId] = useState(null);
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
    stateReferenceId: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOptionChange = (e) => {
    let sl = stateList;
    sl.shift();
    setStateList(sl);
    let sri = getIdByName(objectList, e.target.value);
    console.log(typeof sri);
    if (typeof sri == "object") sri = sri[0];
    console.log("sri " + sri);
    setStateId(sri);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      profilePicture: file,
    });
  };
  function extractNames(inputArray) {
    return inputArray.map((item) => item.name);
  }
  function getIdByName(inputArray, namey) {
    const matchingIds = inputArray
      .filter((obj) => obj.name === namey)
      .map((matchedObj) => matchedObj._id);

    return matchingIds;
  }
  const fetch = async () => {
    const storedToken = localStorage.getItem("jwtToken"); // Fetch the stored token

    // Set the token in the Axios headers before making the request
    setAuthToken(storedToken);

    // Make an authenticated request using axiosInstance
    await axiosInstance
      .get(`/superadmin/crud/state?limit=1000000&fields=&page=1`)
      .then((response) => {
        let obj = response.data.data.response;
        let arr = Object.keys(obj);
        let dumm = [];
        arr.forEach((element) => {
          dumm.push(obj[element]);
        });
        setObjectList(dumm);
        let array = extractNames(dumm);
        array.unshift("select-state");
        setStateList(array);
      })
      .catch((error) => {
        // Handle error, e.g., unauthorized access
        console.error("Error fetching data:", error);
        setErrorTitle(error.response.data.message);
        setIsOpen(true);
      });
  };
  useEffect(() => {
    fetch();
  }, []);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataLocal = new FormData(e.target);
    // Perform form submission logic with formData
    setFormData((prev) => {
      return {
        ...prev,
        profilePicture: formDataLocal.get("profilePicture"),
      };
    });

    console.log("formData");
    console.log(formData);
    // Perform form submission logic with formData
    console.log("🔥", formDataLocal.entries());
    postData(formDataLocal);
  };

  const postData = (data) => {
    console.log("<>----<>form data", formData);
    const storedToken = localStorage.getItem("jwtToken");
    setAuthToken(storedToken);
    axiosInstance
      .post("/superadmin/crud/district", data)
      .then((response) => {
        console.log(response);
        navigate("/districtlist");
      })
      .catch((error) => {
        console.log(
          "Failed to create District:\n",
          error.response.data.message
        );
      });
  };

  return (
    <Root title="District Form">
      <FormDialog title={errorTitle} isOpen={isOpen} setIsOpen={setIsOpen} />
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
          <FormControl w="15vw" my="4">
            <FormLabel>State Name *</FormLabel>
            <Select
              onChange={(e) => {
                setSelectedState(e.target.value);
                handleOptionChange(e);
                console.log(formData);
              }}
              value={selectedState}
            >
              {stateList.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl visibility="hidden" position="absolute">
            <FormLabel>stateReferenceId *</FormLabel>
            <Input
              type="text"
              name="stateReferenceId"
              value={stateId}
              border="1px"
              borderColor="blue.500"
              required
            />
          </FormControl>
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
}
