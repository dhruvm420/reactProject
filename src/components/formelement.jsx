import { FormControl, FormLabel, Input, Box, Textarea } from "@chakra-ui/react";
import { ErrorMessage, Field } from "formik";
export default function FormElement({ type, name, id, formData }) {
  if (type == "text")
    return (
      <FormControl>
        <FormLabel htmlFor={id}>{name}</FormLabel>
        <Input as={Field} type={type} id={id} value={undefined} name={id} />
        <ErrorMessage name={id} />
      </FormControl>
    );
  else if (type == "textarea")
    return (
      <FormControl>
        <FormLabel htmlFor={id}>{name}</FormLabel>
        <Textarea
          as={Field}
          value={undefined}
          id={id}
          name={id}
          resize="vertical"
        />
        <ErrorMessage name={id} />
      </FormControl>
    );
  else if (type == "imagefile")
    return (
      <Box>
        <FormLabel htmlFor={id}>{name}</FormLabel>
        <Input as={Field} type="file" id={id} name={id} accept="image/*" />
        <ErrorMessage name={id} />
      </Box>
    );
  return <></>;
}
