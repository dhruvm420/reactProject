import { HStack } from "@chakra-ui/react";
import id from "../assets/id.svg";
import toggle from "../assets/toggle.svg";
import edit from "../assets/edit.svg";
import del from "../assets/delete.svg";
import approve from "../assets/approve.svg";
import menu from "../assets/menu.svg";
export default function Action() {
  return (
    <HStack spacing="2">
      <img src={id} alt="" width="30px" />
      <img src={toggle} alt="" width="30px" />
      <img src={edit} alt="" width="25px" />
      <img src={del} alt="" width="25px" />
      <img src={approve} alt="" width="25px" />
      <img src={menu} alt="" width="30px" />
    </HStack>
  );
}
