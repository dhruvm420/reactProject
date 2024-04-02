import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Center, Heading, Spinner } from "@chakra-ui/react";
import {
  FormControl,
  Flex,
  FormLabel,
  Input,
  Select,
  Button,
  Box,
  FormErrorMessage,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { axiosInstance, setAuthToken } from "../../utilities/axiosInstance.jsx";

const LogIn = ({ coordinator }) => {
  const initialValues = {
    email: "",
    password: "",
  };
  const [loginType, setLoginType] = useState(coordinator?"state":"superadmin");
  const [loginError, setLoginError] = useState(null);
  const [loginStatus, setLoginStatus] = useState(false);
  let navigate = useNavigate();
  const onSubmit = (values) => {
    let navigatePath;
    if (loginType == "superadmin") navigatePath = "/dashboard";
    else navigatePath = `/minidashboard/${loginType}`;
    setLoginStatus(true);
    axiosInstance
      .post(`/${loginType}/auth/login`, values)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("jwtToken", token);
        if (loginType != "superadmin") {
          const data = response.data.user;
          localStorage.setItem("userKaData", JSON.stringify(data));
        }
        setAuthToken(token);
        navigate(navigatePath);
      })
      .catch((error) => {
        console.error("Login failed:", error);
        setLoginStatus(false);
        if (error.response && error.response.status === 401) {
          setLoginError("The email/username or password is wrong");
        } else {
          setLoginError("An error occurred during login");
        }
      });
  };

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Email/Username is required";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    return errors;
  };
  const loginlist = coordinator
    ? ["state", "district", "tehsil", "panchayat", "member"]
    : ["superadmin", "state", "district", "tehsil", "panchayat", "member"];
  if (loginStatus)
    return (
      <>
        <Center height="100vh">
          <Spinner size="xl" color="blue.500" />
          <Text px="2"> Loading... </Text>
        </Center>
      </>
    );
  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        borderBottomLeftRadius="xl"
        borderBottomRightRadius="xl"
        boxShadow="xl"
        py="5"
        bg="gray.600"
      >
        <Heading as="h1" color="white">
          Log In
        </Heading>
      </Flex>
      <Box maxW="md" mx="auto" mt="10" px="4">
        <FormControl mb="2">
          <FormLabel>Select LogIn Type:-</FormLabel>
          <Select
            onChange={(e) => {
              setLoginType(e.target.value);
            }}
            value={loginType}
          >
            {loginlist.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </FormControl>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validate={validate}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Field name="email">
                {({ field, form }) => (
                  <FormControl
                    mb="4"
                    isInvalid={form.errors.email && form.touched.email}
                  >
                    <FormLabel htmlFor="email">Email/Username</FormLabel>
                    <Input {...field} id="email" placeholder="Email/Username" />
                    <FormErrorMessage>
                      <ErrorMessage name="email" />
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="password">
                {({ field, form }) => (
                  <FormControl
                    mb="4"
                    isInvalid={form.errors.password && form.touched.password}
                  >
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Input
                      {...field}
                      type="password"
                      id="password"
                      placeholder="Password"
                    />
                    <FormErrorMessage>
                      <ErrorMessage name="password" />
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Button type="submit" colorScheme="teal" width="full">
                Log In
              </Button>
              {loginError && (
                <Text color="red" mt="2" textAlign="center">
                  {loginError}
                </Text>
              )}
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default LogIn;
