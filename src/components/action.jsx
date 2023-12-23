import { HStack, Box, Button, Flex } from "@chakra-ui/react";
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
  const items = props.items;
  return (
    <Flex wrap="wrap" w="12vw" alignItems="center">
      {items.includes("id") && (
        <Link to={`/idcard/${name.toLowerCase()}/${id}`}>
          <img src={idCard} alt="" width="30px" />
        </Link>
      )}
      {items.includes("appointment") && (
        <Link to={`/appointment/${name.toLowerCase()}/${id}`}>
          <Box m="0" p="0" backgroundColor="yellow">
            <img src={idCard} alt="" width="30px" />
          </Box>
        </Link>
      )}
      {items.includes("certificate") && (
        <Link to={`/certificate/${name.toLowerCase()}/${id}`}>
          <Box m="0" p="0" backgroundColor="skyblue">
            <img src={idCard} alt="" width="30px" />
          </Box>
        </Link>
      )}
      {items.includes("edit") && (
        <Button
          colorScheme="white"
          p="0"
          mx="-1"
          onClick={() => {
            setId(id);
            setAction("edit");
            setIsOpen(true);
          }}
        >
          <img src={edit} alt="" width="25px" />
        </Button>
      )}

      {items.includes("verify") && (
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
      )}
      {items.includes("delete") && (
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
      )}
      {items.includes("menu") && (
        <Button
          colorScheme="white"
          p="0"
          mx="-1"
          onClick={() => {
            setId(id);
            setAction("menu");
            setIsOpen(true);
          }}
        >
          <img src={menu} alt="" width="30px" />
        </Button>
      )}
    </Flex>
  );
}
