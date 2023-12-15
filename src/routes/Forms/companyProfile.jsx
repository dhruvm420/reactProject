// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import {
//   ChakraProvider,
//   FormControl,
//   FormLabel,
//   Input,
//   Button,
//   Textarea,
//   Box,
//   Center,
//   Text,
//   Select,
// } from "@chakra-ui/react";
// import FormElement from "../../components/formelement";

// const MyCompanyForm = () => {
//   const validationSchema = Yup.object({
//     brandName: Yup.string().required("Brand Name is required"),
//     email: Yup.string()
//       .email("Invalid email address")
//       .required("Email is required"),
//     websiteName: Yup.string().required("Website Name is required"),
//     facebookLink: Yup.string().required("Facebook Link is required"),
//     twitterLink: Yup.string().required("Twitter Link is required"),
//     instagramLink: Yup.string().required("Instagram Link is required"),
//     youtubeLink: Yup.string().required("YouTube Link is required"),
//     facebookIframe: Yup.string().required("Facebook Iframe is required"),
//     whatsAppNumber: Yup.string().required("WhatsApp Number is required"),
//     mobile: Yup.string().required("Mobile is required"),
//     siteKey: Yup.string().required("Site Key is required"),
//     secretKey: Yup.string().required("Secret Key is required"),
//     address: Yup.string().required("Address is required"),

//     aboutUs: Yup.string().required("About Us is required"),
//     privacyPolicy: Yup.string().required("Privacy Policy is required"),
//     termsAndConditions: Yup.string().required(
//       "Terms & Conditions are required"
//     ),
//     disclaimer: Yup.string().required("Disclaimer is required"),
//     refundPolicy: Yup.string().required("Refund Policy is required"),

//     presidentMessage: Yup.string().required("President Message is required"),

//     websiteLogo: Yup.mixed().required("Website Logo is required"),
//     signaturePic: Yup.mixed().required("Signature Pic is required"),
//     idCardFront: Yup.mixed().required("ID Card Front is required"),
//     idCardBack: Yup.mixed().required("ID Card Back is required"),
//     certificate: Yup.mixed().required("Certificate is required"),
//     niyukti: Yup.mixed().required("Niyukti is required"),
//     aboutUsImage: Yup.mixed().required("About Us Image is required"),
//     slip: Yup.mixed().required("Slip is required"),
//     presidentImage: Yup.mixed().required("President Image is required"),

//     websiteLink: Yup.string().required("Website Link is required"),
//     ytLink1: Yup.string().required("YouTube Link 1 is required"),
//     ytLink2: Yup.string().required("YouTube Link 2 is required"),
//     paymentSetting: Yup.string().required("Payment Setting is required"),
//     playStoreAppLink: Yup.string().required("Play Store App Link is required"),
//     slider: Yup.string().required("Slider is required"),
//     qrImage: Yup.mixed().required("QR Image is required"),
//     paymentGatewayLink: Yup.string().required(
//       "Payment Gateway Link is required"
//     ),
//     paymentDetail: Yup.string().required("Payment Detail is required"),
//   });
//   const handleSubmit = (values, { resetForm }) => {
//     console.log(values); // Handle form submission logic
//     resetForm();
//   };
//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//       onSubmit={handleSubmit}
//     >
//       {({ setFieldValue }) => (
//         <Form>
//           <FormElement
//             type="text"
//             name="Brand Name"
//             id="brandName"
//             formData={initialValues}
//           />
//           <FormElement
//             type="text"
//             name="Email"
//             id="email"
//             formData={initialValues}
//           />
//           <FormElement
//             type="text"
//             name="Website Name"
//             id="websiteName"
//             formData={initialValues}
//           />
//           <FormElement
//             type="text"
//             name="Facebook Link"
//             id="facebookLink"
//             formData={initialValues}
//           />
//           <FormElement
//             type="text"
//             name="Instagram Link"
//             id="instagramLink"
//             formData={initialValues}
//           />
//           <FormElement
//             type="text"
//             name="Youtube Link"
//             id="youtubeLink"
//             formData={initialValues}
//           />
//           <FormElement
//             type="text"
//             name="Twitter Link"
//             id="twitterLink"
//             formData={initialValues}
//           />
//           <FormElement
//             type="text"
//             name="Facebook iframe"
//             id="facebookIframe"
//             formData={initialValues}
//           />
//           <FormElement
//             type="text"
//             name="WhatsApp Link Number"
//             id="whatsAppNumber"
//             formData={initialValues}
//           />
//           <FormElement
//             type="text"
//             name="Mobile"
//             id="mobile"
//             formData={initialValues}
//           />
//           <FormElement
//             type="text"
//             name="Site key"
//             id="siteKey"
//             formData={initialValues}
//           />
//           <FormElement
//             type="text"
//             name="Secret Key"
//             id="secretKey"
//             formData={initialValues}
//           />
//           <FormElement
//             type="textarea"
//             name="Address"
//             id="address"
//             formData={initialValues}
//           />
//           <FormElement
//             type="textarea"
//             name="About Us"
//             id="aboutUs"
//             formData={initialValues}
//           />
//           <FormElement
//             type="textarea"
//             name="Privacy policy"
//             id="privacyPolicy"
//             formData={initialValues}
//           />
//           <FormElement
//             type="textarea"
//             name="Terms & conditions"
//             id="termsAndConditions"
//             formData={initialValues}
//           />
//           <FormElement
//             type="textarea"
//             name="Disclaimer"
//             id="disclaimer"
//             formData={initialValues}
//           />
//           <FormElement
//             type="textarea"
//             name="Refund policy"
//             id="refundPolicy"
//             formData={initialValues}
//           />
//           <FormElement
//             type="imagefile"
//             name="Website logo"
//             id="websiteLogo"
//             formData={initialValues}
//           />
//           <FormElement
//             type="imagefile"
//             name="signature pic"
//             id="signaturePic"
//             formData={initialValues}
//           />
//           <FormElement
//             type="imagefile"
//             name="Id card front"
//             id="idCardFront"
//             formData={initialValues}
//           />
//           <FormElement
//             type="imagefile"
//             name="Id card back"
//             id="idCardBack"
//             formData={initialValues}
//           />
//           <FormElement
//             type="imagefile"
//             name="Certificate"
//             id="certificate"
//             formData={initialValues}
//           />
//           <FormElement
//             type="imagefile"
//             name="Niyukti"
//             id="niyukti"
//             formData={initialValues}
//           />
//           <FormElement
//             type="imagefile"
//             name="About us image"
//             id="aboutUsImage"
//             formData={initialValues}
//           />
//           <FormElement
//             type="imagefile"
//             name="Slip"
//             id="slip"
//             formData={initialValues}
//           />
//           <FormElement
//             type="imagefile"
//             name="President Image"
//             id="presidentImage"
//             formData={initialValues}
//           />
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default MyCompanyForm;
// const initialValues = {
//   presidentMessage: "",
//   websiteLink: "",
//   ytLink1: "",
//   ytLink2: "",
//   paymentSetting: "",
//   playStoreAppLink: "",
//   slider: "deactivate",
//   qrImage: null,
//   paymentGatewayLink: "",
//   paymentDetail: "",
// };
