import { Flex, Box, Text } from "@chakra-ui/react";
import Root from "../../../routes/root";
import FrontID from "./frontID";
import BackID from "./backID";
export default function IDCard({ userData }) {
  return (
    <>
      <Root title="ID Card">
        <Flex
          justifyContent="space-around"
          py="8"
          wrap="wrap"
          mx="auto"
          id="id-card"
        >
          <Flex flexDirection="column">
            <Flex
              id="front-side"
              w="360px"
              h="550px"
              flexDirection="column"
              justifyContent="end"
              px="6"
              pb="8"
              backgroundImage={
                "https://skskf.in/webimg/idfront_08102023091854.png"
              }
              backgroundPosition="center"
              backgroundSize="cover"
            >
              <Box
                w="150px"
                h="150px"
                borderRadius="xl"
                overflow="auto"
                margin="auto"
                my="0"
              >
                <img src={userData.IMAGE} alt="user-image" />
              </Box>
              <Text fontSize="xl" my="1" px="2" textAlign="center">
                {userData.NAME}
              </Text>
              <Text fontSize="lg" px="2" textAlign="center">
                MEMBER
              </Text>
              <FrontID userData={userData} />
              <Flex justifyContent="end">
                <img
                  src="https://skskf.in/webimg/WhatsApp_Image_2023-09-04_at_16.50.20-removebg-preview%20(1)_0952023080126.png"
                  alt=""
                  width="90px"
                />
              </Flex>
            </Flex>
          </Flex>
          <Flex flexDirection="column" mx="4">
            <Flex
              id="back-side"
              w="360px"
              h="550px"
              flexDirection="column"
              justifyContent="end"
              px="6"
              pb="8"
              backgroundImage={
                "https://skskf.in/webimg/idfront_08102023091854.png"
              }
              backgroundPosition="center"
              backgroundSize="cover"
            >
              <Box
                w="150px"
                h="150px"
                borderRadius="xl"
                overflow="auto"
                margin="auto"
                my="0"
              >
                <img src={"https://skskf.in/qr-img/.png"} alt="user-image" />
              </Box>
              <BackID userData={userData} />
              <Flex justifyContent="end">
                <img
                  src="https://skskf.in/webimg/sksk_seal.png"
                  alt=""
                  width="90px"
                />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Root>
    </>
  );
}
