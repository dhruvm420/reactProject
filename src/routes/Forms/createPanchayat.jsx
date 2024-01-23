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
function extractNames(inputArray) {
  return inputArray.map((item) => item.name);
}
function getIdByName(inputArray, namey) {
  const matchingIds = inputArray
    .filter((obj) => obj.name === namey)
    .map((matchedObj) => matchedObj._id);

  return matchingIds;
}
export default function CreatePanchayat() {
  const [isOpen, setIsOpen] = useState(false);
  const [errorTitle, setErrorTitle] = useState(null);
  const [stateList, setStateList] = useState([]);
  const [objectStateList, setObjectStateList] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [stateId, setStateId] = useState(null);
  const [districtList, setDistrictList] = useState([]);
  const [bloodGroup, setBloodGroup] = useState("select");
  const [objectDistrictList, setObjectDistrictList] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [districtId, setDistrictId] = useState(null);
  const [tehsilList, setTehsilList] = useState([]);
  const [errorType, setErrorType] = useState(null);
  const [objectTehsilList, setObjectTehsilList] = useState([]);
  const [selectedTehsil, setSelectedTehsil] = useState("");
  const [tehsilId, setTehsilId] = useState(null);
  const fetchList = async (listName) => {
    if (listName == "district" && stateId == null) return;
    if (listName == "tehsil" && districtId == null) return;
    const storedToken = localStorage.getItem("jwtToken"); // Fetch the stored token

    // Set the token in the Axios headers before making the request
    setAuthToken(storedToken);
    // Make an authenticated request using axiosInstance
    const url =
      listName == "state"
        ? `/superadmin/crud/state?limit=1000000&fields=&page=1`
        : listName == "district"
        ? `/superadmin/crud/district?stateReferenceId=${stateId}`
        : `/superadmin/crud/tehsil?districtReferenceId=${districtId}`;
    await axiosInstance
      .get(url)
      .then((response) => {
        let obj = response.data.data.response;
        let arr = Object.keys(obj);
        let dumm = [];
        arr.forEach((element) => {
          dumm.push(obj[element]);
        });
        let array;
        if (listName == "state") {
          setObjectStateList(dumm);
          array = extractNames(dumm);
          array.unshift("select-state");
          setStateList(array);
        } else if (listName == "district") {
          setObjectDistrictList(dumm);
          array = extractNames(dumm);
          array.unshift("select-district");
          setDistrictList(array);
        } else {
          setObjectTehsilList(dumm);
          array = extractNames(dumm);
          array.unshift("select-tehsil");
          setTehsilList(array);
        }
      })
      .catch((error) => {
        // Handle error, e.g., unauthorized access
        console.error(`Error fetching ${listName} data:`, error);
        if (listName == "district") setDistrictList([]);
        if (listName == "tehsil") setTehsilList([]);
      });
  };
  useEffect(() => {
    fetchList("state");
  }, []);
  useEffect(() => {
    fetchList("district");
  }, [selectedState]);
  useEffect(() => {
    fetchList("tehsil");
  }, [selectedDistrict]);

  const navigate = useNavigate();
  const handleStateChange = (e) => {
    let sl = stateList;
    sl.shift();
    setStateList(sl);
    let sri = getIdByName(objectStateList, e.target.value);
    if (typeof sri == "object") sri = sri[0];
    setStateId(sri);
  };
  const handleDistrictChange = (e) => {
    let sl = districtList;
    sl.shift();
    setDistrictList(sl);
    let sri = getIdByName(objectDistrictList, e.target.value);
    if (typeof sri == "object") sri = sri[0];
    setDistrictId(sri);

  };
  const handleTehsilChange = (e) => {
    let sl = tehsilList;
    sl.shift();
    setTehsilList(sl);
    let sri = getIdByName(objectTehsilList, e.target.value);
    if (typeof sri == "object") sri = sri[0];
    setTehsilId(sri);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataLocal = new FormData(e.target);
    postData(formDataLocal);
  };

  const postData = (data) => {
    const storedToken = localStorage.getItem("jwtToken");
    setAuthToken(storedToken);
    axiosInstance
      .post("/superadmin/crud/panchayat", data)
      .then((response) => {
        const res = response.data.data.response;
        setErrorTitle(
          `Successfully Created Panchayat\nUserName: ${res["userName"]}`
        );
        setErrorType("panchayat");
        setIsOpen(true);
      })
      .catch((error) => {
        setErrorTitle(error.response.data.message);
        setErrorType("error");
        setIsOpen(true);
      });
  };
  return (
    <Root title="Panchayat Form">
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
                  handleStateChange(e);
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
              <FormLabel>District Name *</FormLabel>
              <Select
                onChange={(e) => {
                  setSelectedDistrict(e.target.value);
                  handleDistrictChange(e);
                }}
                value={selectedDistrict}
              >
                {districtList.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl visibility="hidden" position="absolute">
              <FormLabel>districtReferenceId *</FormLabel>
              <Input
                type="text"
                name="districtReferenceId"
                value={districtId}
                border="1px"
                borderColor="blue.500"
                required
              />
            </FormControl>
            <FormControl w="60" m="2">
              <FormLabel>Tehsil Name *</FormLabel>
              <Select
                onChange={(e) => {
                  setSelectedTehsil(e.target.value);
                  handleTehsilChange(e);
                }}
                value={selectedTehsil}
              >
                {tehsilList.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl visibility="hidden" position="absolute">
              <FormLabel>tehsilReferenceId *</FormLabel>
              <Input
                type="text"
                name="tehsilReferenceId"
                value={tehsilId}
                border="1px"
                borderColor="blue.500"
              />
            </FormControl>
            <FormControl w="60" m="2">
              <FormLabel>Full Name *</FormLabel>
              <Input
                type="text"
                name="name"
                // value={formData.name}
                border="1px"
                borderColor="blue.500"
                // onChange={handleInputChange}
                required
              />
            </FormControl>
          </Flex>
          <Flex flexWrap="wrap">
            <FormControl w="60" m="2">
              <FormLabel>S/O *</FormLabel>
              <Input
                type="text"
                name="sonOf"
                border="1px"
                borderColor="blue.500"
                // value={formData.sonOf}
                // onChange={handleInputChange}
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
                // value={formData.DOB}
                // onChange={handleInputChange}
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
                // value={formData.joiningDate}
                // onChange={handleInputChange}
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
                // value={formData.aadharNumber}
                // onChange={handleInputChange}
                required
              />
            </FormControl>
          </Flex>
          <Flex flexWrap="wrap">
            <FormControl w="60" m="2">
              <FormLabel>Mobile Number *</FormLabel>
              <Input
                type="tel"
                name="mobileNumber"
                border="1px"
                borderColor="blue.500"
                // value={formData.mobileNumber}
                // onChange={handleInputChange}
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
                // value={formData.email}
                // onChange={handleInputChange}
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
                // value={formData.password}
                // onChange={handleInputChange}
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
          </Flex>
          <Flex flexWrap="wrap">
            <FormControl w="60" m="2">
              <FormLabel>State *</FormLabel>
              <Input
                type="text"
                name="stateResiding"
                border="1px"
                borderColor="blue.500"
                // value={formData.stateResiding}
                // onChange={handleInputChange}
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
                // value={formData.cityResiding}
                // onChange={handleInputChange}
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
                // value={formData.qualification}
                // onChange={handleInputChange}
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
                // value={formData.designation}
                // onChange={handleInputChange}
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
                // value={formData.workPlace}
                border="1px"
                borderColor="blue.500"
                // onChange={handleInputChange}
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
              <FormLabel>Address</FormLabel>
              <Textarea
                name="addressResiding"
                border="1px"
                borderColor="blue.500"
                // value={formData.addressResiding}
                // onChange={handleInputChange}
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
