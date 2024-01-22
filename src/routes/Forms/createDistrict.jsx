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
import Root from "../../components/root";
import { axiosInstance, setAuthToken } from "../../utilities/axiosInstance";
import { useNavigate } from "react-router-dom";
import FormDialog from "../../components/formDialog";
export default function CreateDistrict() {
  const [isOpen, setIsOpen] = useState(false);
  const [errorTitle, setErrorTitle] = useState(null);
  const [stateList, setStateList] = useState([]);
  const [objectList, setObjectList] = useState([]);
  const [errorType, setErrorType] = useState(null);
  const [selectedState, setSelectedState] = useState("");
  const [bloodGroup, setBloodGroup] = useState("select");
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
        const res = response.data.data.response;
        setErrorTitle(
          `Successfully Created District\nUserName: ${res["userName"]}`
        );
        setErrorType("district");
        setIsOpen(true);
      })
      .catch((error) => {
        console.log(
          "Failed to create District:\n",
          error.response.data.message
        );
        setErrorTitle(error.response.data.message);
        setErrorType("error");
        setIsOpen(true);
      });
  };

  return (
    <Root title="District Form">
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
            <FormControl w="60" m="2">
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
                w="13vw"
                value={formData.DOB}
                onChange={handleInputChange}
                required
              />
            </FormControl>
          </Flex>
          <Flex flexWrap="wrap">
            <FormControl w="60" m="2">
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
          </Flex>
          <Flex flexWrap="wrap">
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
          </Flex>
          <Flex flexWrap="wrap">
            <FormControl w="60" m="2">
              <FormLabel>Work Place *</FormLabel>
              <Input
                type="text"
                name="workPlace"
                value={formData.workPlace}
                border="1px"
                borderColor="blue.500"
                onChange={handleInputChange}
                required
              />
            </FormControl>
            <FormControl w="56" m="2">
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
}
