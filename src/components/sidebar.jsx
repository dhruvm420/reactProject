import { Stack, Box } from "@chakra-ui/react";
export default function Sidebar(props) {
  const list = props.data.map((item) => {
    return (
      <Box
        as="li"
        py="2"
        textAlign="center"
        _hover={{ background: "#B0A695", color: "white", cursor: "pointer" }}
      >
        {item}
      </Box>
    );
  });
  return (
    <Box>
      <Stack as="ul" bg="#F3EEEA" w="15vw" spacing="0">
        {list}
      </Stack>
    </Box>
  );
}
