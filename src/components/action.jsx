import { HStack, Box, Button } from "@chakra-ui/react";
import toggle from "../assets/toggle.svg";
import edit from "../assets/edit.svg";
import del from "../assets/delete.svg";
import approve from "../assets/approve.svg";
import menu from "../assets/menu.svg";
import { Link } from "react-router-dom";
export default function Action(props) {
  const name = props.name;
  const id = props.id;
  return (
    <HStack spacing="2">
      <img src={id} alt="" width="30px" />
      <img src={toggle} alt="" width="30px" />
      <Box>
        <Link to={`/edit/${name.toLowerCase()}/${id}`}>
          <img src={edit} alt="" width="25px" />
        </Link>
      </Box>
      <Button colorScheme="white" p="0">
        <img src={del} alt="" width="25px" />
      </Button>
      <img src={approve} alt="" width="25px" />
      <img src={menu} alt="" width="30px" />
    </HStack>
  );
}
