import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Center, Spinner } from "@chakra-ui/react";

import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  FormErrorMessage,
  Text,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/header";
import {
  axiosInstance,
  setAuthToken,
} from "../../components/axiosInstance.jsx";

const LogIn = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const [loginError, setLoginError] = useState(null);
  const [loginStatus, setLoginStatus] = useState(false);
  let navigate = useNavigate();
  const onSubmit = (values) => {
    setLoginStatus(true);
    console.log("Form values:", values);
    axiosInstance
      .post("/superadmin/auth/login", values)
      .then((response) => {
        console.log(response);
        const token = response.data.token;
        localStorage.setItem("jwtToken", token);
        console.log("token " + localStorage.getItem("jwtToken"));
        setAuthToken(token);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Login failed:", error);
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
      <Header title="Log In" />
      <Box maxW="md" mx="auto" mt="20">
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
