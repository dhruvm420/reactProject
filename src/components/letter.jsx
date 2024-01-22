import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import bg from "../assets/appointment1.png";
import bg2 from "../assets/appointment2.png";
import html2canvas from "html2canvas";
import { getCorrectDate } from "../utilities/date";

export default function Letter({ data, type }) {
  const [cardImage, setCardImage] = useState("");
  const date = new Date();
  const handleDownload = () => {
    const idCardElement = document.getElementById("appointment");
    if (idCardElement) {
      html2canvas(idCardElement, {
        allowTaint: true,
        useCORS: true,
        scrollX: 0,
        scrollY: 0,
        windowWidth: document.documentElement.offsetWidth,
        windowHeight: document.documentElement.offsetHeight,
      }).then((canvas) => {
        const dataUrl = canvas.toDataURL("image/png");
        setCardImage(dataUrl);
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "appointment.png";
        link.click();
      });
    }
  };
  return (
    <Flex p="4" flexDirection="column" alignItems={"center"}>
      <Flex id="appointment">
        <Flex
          className="certificate_img"
          flexDirection="column"
          justifyContent="center"
          backgroundImage={bg}
          backgroundPosition="center"
          backgroundSize="cover"
          w="620px"
          h="900px"
          px="16"
          pt="130px"
          fontSize={"14px"}
        >
          <Flex justifyContent={"space-between"}>
            <Text>
              <strong>Code.</strong> {data.assignCode}
            </Text>
            <Text>{getCorrectDate(date)}</Text>
          </Flex>
          <Box as="ul" listStyleType={"none"}>
            <Text as="li">
              <strong>Mr/Mrs.</strong> {data.name}
            </Text>
            <Text as="li">
              <strong>C/o.</strong> {type}
            </Text>
            <Text as="li">
              <strong>Address.</strong> {data.addressResiding}
            </Text>
            <Text as="li">
              <strong>Dist. </strong>
              {data.cityResiding}
            </Text>
          </Box>
          <Text as="p">
            With reference to your application and subsequent interview you had
            with our team, we are pleased to select you as{" "}
            <strong>{type} Coordinator </strong> of SKSKF under direct super
            vision chhattisgarh H.O. sadguru kabir saheb kripa faundation
            chhattisgarh with effect from.{" "}
            <strong>{getCorrectDate(data.joiningDate)}</strong> under the
            following terms and condition.
          </Text>
          <Text>
            1. Documents : You Are Required To Provide All Original Academic And
            Educational Testimonials For Verification.
          </Text>
          <Text>
            2. Probation : You will be on probation for an initial period of 6
            months during which time your selection may be terminated without
            assigning any reason without notice or without compensation in lieu
            thereof. the said probation period may be extended for a further
            period of 6 six months at the discretion of the foundation
          </Text>
          <Text>
            3. termination : The Foundation reserves the right to terminate and
            forfeit your candidature without any notice and without any
            composition, if you are found to have committed any misconduct or
            violating the Trust Rules or code of conduct.{" "}
          </Text>
          <Text>
            4. Compliance : The Foundation requires that co-ordinators comply
            with all laws, rules and regulation applicable whenever it does work
            you are expected to use good judgment seeking to comply with all
            applicable laws,rules &regulation and to ask for advice when you are
            uncertain about them. The Foundation reserves the right to intiate
            legal proceeding against you (ceiminal/ civil) uin the event you are
            found to have indulged in any activity that is against any such law,
            rule and regulation.
          </Text>
        </Flex>
        <Flex
          className="certificate_img"
          flexDirection="column"
          justifyContent="center"
          backgroundImage={bg2}
          backgroundPosition="center"
          backgroundSize="cover"
          w="620px"
          h="900px"
          px="16"
          ml="10px"
          pb="70px"
          fontSize={"12px"}
        >
          <Text>
            5. Honest ethical conduct and fair dealing : you understand that
            given the nature of service being carried by The Foundation and for
            reasons of public importance you must take utmost care in all The
            Foundation co-ordinators & beneficiaries statement regarding
            Foundation & service must not be untrue mis leading, deceptive or
            fraudulent you must not take unfair advantage of any one through
            manipulation concealment abuse of privileged information
            misrepresentation of material fact or any other unfair practice.
          </Text>
          <Text>
            6. correspondence and address for communication : you are required
            to give your permanent address, temporary address and personal email
            address at the time of Selection/ joining, In case of any Subsequent
            changes in your permanent/temporary address you shall intimate The
            Foundation with in three days from the date of Such change. interest
          </Text>
          <Text>
            7. conflict of interest : As co-ordinators you are expected to act
            in the best interest of The Foundation and must refrain from
            engaging in any activity or having personal interest that present a
            conflict of interest either with The Foundation policies or with the
            trust work.
          </Text>
          <Text>
            8. confidentiality : During the course of your work you are expected
            to maintain complete confidentiality of The Foundation As any
            disclosure of the same will be considered as a breach of trust
            policy and will be dealt with strictly, you shall maintain strict
            secrecy and confidently of the data and information entrusted to you
            by The Foundation. unauthorized disclosure of any confidential
            information is prohibited. you shall not retain any copies or
            extract of document which may be in your possession relating to
            Foundation business.
          </Text>
          <Text>
            9. term and conditions :
            <Text as="ol" listStyleType={"lower-alpha"} pl="25px">
              <Text as="li">
                you are selected for the post of{" "}
                <strong>{type} Coordinator </strong>by The Foundation
                management.
              </Text>
              <Text as="li">
                Excepting, on official duties you will not leaves head quarters
                of you are posting without prior permissions of the appropriate
                authority. During your working period you will exhibit absolute
                loyalty to the organization and due diligence im your work to
                ensure that the interest of the organization is always protected
                and never your action will lead to any loss financial or
                otherwise to the organization.
              </Text>
              <Text as="li">
                If you leave or are fired from your job, you will not provoke or
                misguide any member or employee of the Foundation and will not
                take any action to get the member or employee hired by you to
                fire or get the fees refunded. If you do so, you will be held
                liable and the Foundation may take legal action against you.
                .....(e) At all times you will maintain good and respectful
                relation with the senior, junior or parallel colleagues in
                office. your dealing with our staff should be friend, cordial
                and helpful at all times.
              </Text>
              <Text as="li">
                you must submit your monthly closing report before The
                Foundation by 5th day of every month your commission/sallery
                will transfer to your account accordingly.
              </Text>
              <Text as="li">
                you should attend office or field when on duty in time and
                properly dressed.
              </Text>
              <Text as="li">
                you will maintain absolute secrecy about the official and
                related information. Any deviation from this will amount to
                serious lapse and will make you able for severe punishment.
              </Text>
            </Text>
          </Text>
        </Flex>
      </Flex>
      <Box mx="auto" my="2">
        <Button onClick={handleDownload} w="10vw" colorScheme="teal">
          Download
        </Button>
      </Box>
    </Flex>
  );
}

