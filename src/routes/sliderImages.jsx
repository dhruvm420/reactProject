import { Flex, Button, Box } from "@chakra-ui/react";
import Root from "./root";
import TableGenerator from "../components/tableGenerator";
import { useState } from "react";
import { Link } from "react-router-dom";
import ActionPopUp from "../components/actionButtons/actionPopUp";

let sliderData = [
  {
    IMAGE: "https://skskf.in/testinomial-img/1_1272022104258.jpg",
    Position: 1,
  },
  {
    IMAGE:
      "https://skskf.in/testinomial-img/IMG-20230402-WA0115_0972023103713.jpg",
    Position: 2,
  },
  {
    IMAGE:
      "https://skskf.in/testinomial-img/IMG-20230505-WA0030_0972023103900.jpg",
    Position: 3,
  },
  {
    IMAGE:
      "https://skskf.in/testinomial-img/IMG-20221202-WA0039_0972023104548.jpg",
    Position: 4,
  },
];

export default function Slider() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [id, setId] = useState("");
  const [action, setAction] = useState("");
  return (
    <Root title="Slider Image">
      <Flex direction="column" mx="auto" mt="4">
        <ActionPopUp
          formName={"slider"}
          action={action}
          modifyId={id}
          isOpen={dialogIsOpen}
          setIsOpen={setDialogIsOpen}
        />
        <Box mx="auto">
          <Link to="/addSlider">
            <Button colorScheme="teal" mb="4">
              Add Image
            </Button>
          </Link>
        </Box>
        <TableGenerator
          data={sliderData}
          title="slider"
          setIsOpen={setDialogIsOpen}
          setAction={setAction}
          setId={setId}
          actionItems={["edit", "delete"]}
        />
      </Flex>
    </Root>
  );
}
