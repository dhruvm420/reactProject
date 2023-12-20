import React, { useEffect, useState } from "react";
import {
  Input,
  Textarea,
  FormControl,
  FormLabel,
  Button,
  HStack,
  Flex,
  Select,
  Center,
  Spinner,
} from "@chakra-ui/react";
import Root from "../root.jsx";
import {
  axiosInstance,
  setAuthToken,
} from "../../components/axiosInstance.jsx";
import { useNavigate } from "react-router-dom";
import FormDialog from "./formDialog.jsx";

const CompanyProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [errorTitle, setErrorTitle] = useState(null);
  const [errorType, setErrorType] = useState(null);
  const [sliderState, setSliderState] = useState("");
  // const [formData, setFormData] = useState(null);
  // const [dataLoaded,setDataLoaded] = useState(false);]
  const navigate = useNavigate();

  // const fetch = async () => {
  //   const storedToken = localStorage.getItem("jwtToken"); // Fetch the stored token

  //   setAuthToken(storedToken);

  //   await axiosInstance
  //     .get('/superadmin/cms/companyProfile')
  //     .then((response) => {
  //       let obj = response.data.data.response;
  //       let dumm = [];
  //       arr.forEach((element) => {
  //         dumm.push(obj[element]);
  //       });
  //       let array;
  //       if (listName == "state") {
  //         setObjectStateList(dumm);

  //         array = extractNames(dumm);
  //         array.unshift("select-state");
  //         setStateList(array);
  //       } else {
  //         setObjectDistrictList(dumm);
  //         array = extractNames(dumm);
  //         array.unshift("select-district");
  //         setDistrictList(array);
  //       }
  //     })
  //     .catch((error) => {
  //       // Handle error, e.g., unauthorized access
  //       console.error(`Error fetching ${listName} data:`, error);
  //       if (listName == "district") setDistrictList([]);
  //     });
  // };
  // useEffect(()=>{
  //   fetch();
  // },[]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const storedToken = localStorage.getItem("jwtToken");
    setAuthToken(storedToken);
    const formData = new FormData(e.target);
    // Perform form submission logic with formData
    axiosInstance
      .patch("/superadmin/cms/companyProfile", formData)
      .then((response) => {
        console.log(response);
        alert("Submitted");
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log("Failed to create State:\n", error);
        setErrorTitle(error.response.data.message);
        setErrorType("error");
        setIsOpen(true);
      });
  };
  // if (!dataLoaded)
  //   return (
  //     <>
  //       <Center height="100vh">
  //         <Spinner size="xl" color="blue.500" />
  //         <Text px="2"> Loading... </Text>
  //       </Center>
  //     </>
  //   );
  return (
    <Root title="Company Profile">
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
          // h="105vh"
          px="4"
          py="2"
          bg="white"
          borderRadius="3xl"
          m="4"
          justifyContent="space-evenly"
        >
          <HStack>
            <FormControl>
              <FormLabel>Brand Name *</FormLabel>
              <Input
                type="text"
                name="brandName"
                //placeholder={formData.brandName}
                border="1px"
                borderColor="blue.500"
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>email *</FormLabel>
              <Input
                type="email"
                name="email"
                border="1px"
                borderColor="blue.500"
                //placeholder={formData.email}
                required
              />
            </FormControl>
          </HStack>
          <HStack>
            <FormControl>
              <FormLabel>website Name *</FormLabel>
              <Input
                type="text"
                name="websiteName"
                border="1px"
                borderColor="blue.500"
                w="13vw"
                //placeholder={formData.websiteName}
                required
              />
            </FormControl>
          </HStack>
          <HStack>
            <FormControl>
              <FormLabel>website Link *</FormLabel>
              <Input
                type="text"
                name="websiteLink"
                border="1px"
                borderColor="blue.500"
                w="13vw"
                //placeholder={formData.websiteLink}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>facebook Link *</FormLabel>
              <Input
                type="text"
                name="facebookLink"
                border="1px"
                borderColor="blue.500"
                //placeholder={formData.facebookLink}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>twitter Link *</FormLabel>
              <Input
                type="text"
                name="twitterLink"
                border="1px"
                borderColor="blue.500"
                w="13vw"
                //placeholder={formData.twitterLink}
                required
              />
            </FormControl>
          </HStack>
          <HStack>
            <FormControl>
              <FormLabel>instagram Link *</FormLabel>
              <Input
                type="text"
                name="instagramLink"
                border="1px"
                borderColor="blue.500"
                w="13vw"
                //placeholder={formData.instagramLink}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>youtube Link *</FormLabel>
              <Input
                type="text"
                name="youtubeLink"
                border="1px"
                borderColor="blue.500"
                w="13vw"
                //placeholder={formData.youtubeLink}
                required
              />
            </FormControl>
          </HStack>
          <HStack>
            <FormControl>
              <FormLabel>playStoreApp Link*</FormLabel>
              <Input
                type="text"
                name="playStoreAppLink"
                border="1px"
                borderColor="blue.500"
                w="13vw"
                //placeholder={formData.playStoreAppLink}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>facebookIframe *</FormLabel>
              <Input
                type="text"
                name="facebookIframe"
                border="1px"
                borderColor="blue.500"
                w="13vw"
                //placeholder={formData.facebookIframe}
                required
              />
            </FormControl>
          </HStack>
          <HStack>
            <FormControl>
              <FormLabel>whatsAppLink Number *</FormLabel>
              <Input
                type="tel"
                name="whatsAppLinkNumber"
                border="1px"
                borderColor="blue.500"
                //placeholder={formData.whatsAppLinkNumber}
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
                //placeholder={formData.mobileNumber}
                required
              />
            </FormControl>
          </HStack>
          <HStack>
            <FormControl>
              <FormLabel>siteKey *</FormLabel>
              <Input
                type="text"
                name="siteKey"
                border="1px"
                borderColor="blue.500"
                w="13vw"
                //placeholder={formData.siteKey}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>secretKey *</FormLabel>
              <Input
                type="text"
                name="secretKey"
                border="1px"
                borderColor="blue.500"
                w="13vw"
                //placeholder={formData.secretKey}
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
              //placeholder={formData.addressResiding}
              required
            />
          </FormControl>
          <HStack>
            <FormControl>
              <FormLabel>aboutUs *</FormLabel>
              <Input
                type="text"
                name="aboutUs"
                border="1px"
                borderColor="blue.500"
                w="13vw"
                //placeholder={formData.aboutUs}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>privacyPolicy *</FormLabel>
              <Input
                type="text"
                name="privacyPolicy"
                border="1px"
                borderColor="blue.500"
                w="13vw"
                //placeholder={formData.privacyPolicy}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>termsAndConditions *</FormLabel>
              <Input
                type="text"
                name="termsAndConditions"
                border="1px"
                borderColor="blue.500"
                w="13vw"
                //placeholder={formData.termsAndConditions}
                required
              />
            </FormControl>
          </HStack>
          <HStack>
            <FormControl>
              <FormLabel>disclaimer *</FormLabel>
              <Input
                type="text"
                name="disclaimer"
                border="1px"
                borderColor="blue.500"
                w="13vw"
                //placeholder={formData.disclaimer}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>refundPolicy *</FormLabel>
              <Input
                type="text"
                name="refundPolicy"
                border="1px"
                borderColor="blue.500"
                w="13vw"
                //placeholder={formData.refundPolicy}
                required
              />
            </FormControl>
          </HStack>
          <HStack>
            <FormControl>
              <FormLabel>youtubeVideo1Link *</FormLabel>
              <Input
                type="text"
                name="youtubeVideo1Link"
                border="1px"
                borderColor="blue.500"
                w="13vw"
                //placeholder={formData.youtubeVideo1Link}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>youtubeVideo2Link *</FormLabel>
              <Input
                type="text"
                name="youtubeVideo2Link"
                border="1px"
                borderColor="blue.500"
                w="13vw"
                //placeholder={formData.youtubeVideo2Link}
                required
              />
            </FormControl>
          </HStack>
          <HStack>
            <FormControl>
              <FormLabel>memberShipChargesDetails *</FormLabel>
              <Input
                type="text"
                name="memberShipChargesDetails"
                border="1px"
                borderColor="blue.500"
                w="13vw"
                //placeholder={formData.memberShipChargesDetails}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>paymentGatewayLink *</FormLabel>
              <Input
                type="text"
                name="paymentGatewayLink"
                border="1px"
                borderColor="blue.500"
                w="13vw"
                //placeholder={formData.paymentGatewayLink}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>paymentDetails *</FormLabel>
              <Input
                type="text"
                name="paymentDetails"
                border="1px"
                borderColor="blue.500"
                w="13vw"
                //placeholder={formData.paymentDetails}
                required
              />
            </FormControl>
          </HStack>

          <FormControl>
            <FormLabel>slider *</FormLabel>
            <Select
              onChange={(e) => {
                setSliderState(e.target.value);
              }}
              value={sliderState}
            >
              <option value={"activate"}>{"activate"}</option>
              <option value={"deactivate"}>{"deactivate"}</option>
            </Select>
          </FormControl>
          <FormControl visibility="hidden" position="absolute">
            <FormLabel>Sliderd *</FormLabel>
            <Input
              type="text"
              name="slider"
              value={sliderState}
              border="1px"
              borderColor="blue.500"
              required
            />
          </FormControl>

          <FormControl>
            <FormLabel>presidentMessage *</FormLabel>
            <Input
              type="text"
              name="presidentMessage"
              border="1px"
              borderColor="blue.500"
              w="13vw"
              //placeholder={formData.presidentMessage}
              required
            />
          </FormControl>

          <HStack>
            <FormControl>
              <FormLabel>qrCodeImage</FormLabel>
              <Input type="file" name="qrCodeImageLink" accept="image/*" />
            </FormControl>
            <FormControl>
              <FormLabel>websiteLogo</FormLabel>
              <Input type="file" name="websiteLogoLink" accept="image/*" />
            </FormControl>
            <FormControl>
              <FormLabel>signature</FormLabel>
              <Input type="file" name="signatureLink" accept="image/*" />
            </FormControl>
          </HStack>
          <HStack>
            <FormControl>
              <FormLabel>idFront</FormLabel>
              <Input type="file" name="idFrontLink" accept="image/*" />
            </FormControl>
            <FormControl>
              <FormLabel>idBack</FormLabel>
              <Input type="file" name="idBackLink" accept="image/*" />
            </FormControl>
          </HStack>
          <HStack>
            <FormControl>
              <FormLabel>certificateLink</FormLabel>
              <Input type="file" name="certificateLink" accept="image/*" />
            </FormControl>
            <FormControl>
              <FormLabel>aboutUsPhotoLink</FormLabel>
              <Input type="file" name="aboutUsPhotoLink" accept="image/*" />
            </FormControl>
            <FormControl>
              <FormLabel>slipImageLink</FormLabel>
              <Input type="file" name="slipImageLink" accept="image/*" />
            </FormControl>
          </HStack>
          <FormControl>
            <FormLabel>presidentImageLink</FormLabel>
            <Input type="file" name="presidentImageLink" accept="image/*" />
          </FormControl>
          <Button type="submit" mt={4} colorScheme="blue" w="12vw" mx="auto">
            Submit
          </Button>
        </Flex>
      </form>
    </Root>
  );
};
export default CompanyProfile;
