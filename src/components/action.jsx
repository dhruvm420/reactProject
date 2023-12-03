import { HStack, Box, Button } from "@chakra-ui/react";
import toggle from "../assets/toggle.svg";
import edit from "../assets/edit.svg";
import del from "../assets/delete.svg";
import approve from "../assets/approve.svg";
import idCard from "../assets/idCard.svg";
import menu from "../assets/menu.svg";
import { Link } from "react-router-dom";
export default function Action(props) {
  const name = props.name;
  const id = props.id;
  const setId = props.setId;
  const setIsOpen = props.setIsOpen;
  const setAction = props.setAction;
  return (
    <HStack spacing="2">
      <img src={idCard} alt="" width="30px" />
      {/* <img src={toggle} alt="" width="30px" /> */}
      <Link to={`/edit/${name.toLowerCase()}/${id}`} m="0" p="0">
        <img src={edit} alt="" width="25px" />
      </Link>
      <Button
        colorScheme="white"
        p="0"
        mx="-1"
        onClick={() => {
          setId(id);
          setAction("delete");
          setIsOpen(true);
        }}
      >
        <img src={del} alt="" width="25px" />
      </Button>
      <Button
        colorScheme="white"
        p="0"
        mx="-1"
        onClick={() => {
          setId(id);
          setAction("verify");
          setIsOpen(true);
        }}
      >
        <img src={approve} alt="" width="25px" />
      </Button>
      <img src={menu} alt="" width="30px" />
    </HStack>
  );
}
