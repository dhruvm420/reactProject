import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import html2canvas from "html2canvas";
import Root from "../../routes/root";
import bg from "../../assets/appointmentBG.png";
import sign from "../../assets/sign.png";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
export default function Appointment() {
  const { listName, userId } = useParams();
  const [cardImage, setCardImage] = useState("");
  const [userData, setUserData] = useState(false);
  let dummyData = {
    NAME: "RUPA BAI MARKAM",
    IMAGE: "https://skskf.in/userimg/IMG-20230627-WA0045_09152023162926.jpg",
    "Id No.": "64fc24a1d4a6a",
    Designation: "state co.ordinator CG",
    DOB: "29-10-1991",
    Mobile: "9691658557",
    "Register Date": "26-Sep-2022",
    "S/D/W of": "SAHEB DAS MANIKPURI",
    Address:
      "vill.+post.odiya khurd tah.s/lohara dist.kabirdham, , Chhattisgarh",
  };
  useEffect(() => {
    function fetchData() {
      // according to listName & userId , set user Data
      if (userData != false) return;
      setUserData(dummyData);
    }

    fetchData();

    return () => {};
  }, []);

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
        link.download = "certificate.png";
        link.click();
      });
    }
  };
  return (
    <Flex mx="auto" p="4" flexDirection="column">
      <Flex
        class="certificate_img"
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
          <div class="id">
            <p>ID No. - 0226</p>
          </div>
          <div class="date">
            <p>Date - 01-06-2023</p>
          </div>
        </Flex>
        <Box mt="4">
          <Text fontSize="xl">
            आदरणीय श्री/श्रीमती <span>{userData.NAME}</span> पुत्र/पुत्री{" "}
            <span>{userData["S/D/W of"]}</span> आपके सामाजिक कार्यो के प्रति
            आपकी निष्ठा को देखते हुए अपार हर्ष के साथ सूचित किया जाता है कि{" "}
            <span>"एस के एस के फाउंडेशन "</span> में आपको <span>MEMBER</span>{" "}
            बनाया जाता है। हमें आशा ही नहीं अपितु पूर्ण विश्वास है कि आप संस्थान
            की नीतियों व सिद्धांतों से जन-मानस को अवगत करायेंगे/करायेंगी और
            संस्थान को प्रबल मजबूत बनायेंगे | संस्थापक एवं संचालक जी के नेतृत्व
            में घर-घर के सम्मान में, हर व्यक्ति को प्रबल, सशक्त, शिक्षित व
            आत्मनिर्भर बनाने के संकल्प को साकार करते हुए{" "}
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
