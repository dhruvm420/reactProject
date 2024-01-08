import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import bg from "../assets/appointmentBG.png";
import sign from "../assets/sign.png";
import html2canvas from "html2canvas";
export default function Letter({ data }) {
  const [cardImage, setCardImage] = useState("");
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
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;
  return (
    <Flex mx="auto" p="4" flexDirection="column">
      <Flex
        className="certificate_img"
        flexDirection="column"
        justifyContent="center"
        backgroundImage={bg}
        backgroundPosition="center"
        backgroundSize="cover"
        w="1500px"
        px="16"
        pt="300px"
        id="appointment"
        h="1100px"
      >
        <Flex my="4" justifyContent="space-between">
          {/* <div class="id">
                <p>ID No. - 0226</p>
              </div> */}
          <div class="date">
            <p>Date - {formattedDate}</p>
          </div>
        </Flex>
        <Box mt="4">
          <Text fontSize="xl">
            आदरणीय श्री/श्रीमती{" "}
            <strong>
              <span>{data.name}</span>
            </strong>{" "}
            पुत्र/पुत्री{" "}
            <strong>
              <span>{data.fatherName ? data.fatherName : data.sonOf}</span>
            </strong>{" "}
            आपके सामाजिक कार्यो के प्रति आपकी निष्ठा को देखते हुए अपार हर्ष के
            साथ सूचित किया जाता है कि <span>"एस के एस के फाउंडेशन "</span> में
            आपको <span>MEMBER</span> बनाया जाता है। हमें आशा ही नहीं अपितु पूर्ण
            विश्वास है कि आप संस्थान की नीतियों व सिद्धांतों से जन-मानस को अवगत
            करायेंगे/करायेंगी और संस्थान को प्रबल मजबूत बनायेंगे | संस्थापक एवं
            संचालक जी के नेतृत्व में घर-घर के सम्मान में, हर व्यक्ति को प्रबल,
            सशक्त, शिक्षित व आत्मनिर्भर बनाने के संकल्प को साकार करते हुए{" "}
            <span>"एस के एस के फाउंडेशन "</span> के विचारों को जन-जन तक
            पहुँचायेंगे व समाज को संगठित कर अपने राष्ट्र को शक्तिशाली बनायेंगे।
          </Text>
        </Box>
        <Flex justifyContent="end" p="16">
          <Box my="4">
            <img src={sign} alt="" />
          </Box>
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
