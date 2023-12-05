import Root from "./root";
import { Flex, Button, Box } from "@chakra-ui/react";
import TableGenerator from "../components/tableGenerator";
import { Link } from "react-router-dom";
let postsData = [
  {
    "POST DATE": "2023-09-07 16:22:24",
    "TIMELINE POST":
      "https://skskf.in/timeline-img/IMG-20230731-WA0036_0972023105224.jpg",
    TITLE: "SKSKF FOUNDATION",
    DESCRIPTION: "SKSKF foundation",
    VENUE: "skskf ",
    "EVENT START": "sksksf ",
  },
];

export default function Posts() {
  return (
    <Root title="Timeline Post List">
      <Flex direction="column" mx="auto" mt="4">
        <Box mx="auto">
          <Link to="/createPost">
            <Button colorScheme="teal" mb="4">
              New Post
            </Button>
          </Link>
        </Box>
        <TableGenerator
          data={postsData}
          title="Posts"
          actionItems={["delete", "edit"]}
        />
      </Flex>
    </Root>
  );
}
