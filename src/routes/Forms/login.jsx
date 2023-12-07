import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Text,
  Heading,
  FormErrorMessage,
} from "@chakra-ui/react";
import Header from "../../components/header";
import { Link } from "react-router-dom";
const LogIn = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    // Perform signup logic with form values (values.email, values.password)
    console.log("Form values:", values);
  };

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Email/Username is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    return errors;
  };

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

              {/* <Button type="submit" colorScheme="teal" width="full">
                Log In
              </Button> */}
              <Link to="/dashboard">
                <Button colorScheme="teal" width="full">
                  Log In
                </Button>
              </Link>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default LogIn;
