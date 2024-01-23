import { Box, Heading, Flex, Text } from "@chakra-ui/react";
import ListPreview from "../components/listPreview.jsx";
import { Center, Spinner } from "@chakra-ui/react";
import Root from "../components/root.jsx";
import { setAuthToken, axiosInstance } from "../utilities/axiosInstance.jsx";
import { useState, useEffect } from "react";
import DashboardCards from "../components/dashboardCards.jsx";
let posts = [];
let complaints = [];

let dummyData = {
  state: "0",
  district: "0",
  tehsil: "0",
  panchayat: "0",
  verifiedmembers: "0",
  unverifiedmembers: "0",
  complaints: "0",
  testimonials: "0",
  donations: "0",
  contactus: "0",
};
export default function Dashboard() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [dashboardData, setDashboardData] = useState({ dummyData });
  let postPreview = (
    <ListPreview data={posts} head="Latest Posts" title="TITLE" link="/posts" />
  );
  let complaintsPreview = (
    <ListPreview
      data={complaints}
      head="Latest Suggestions / Complaints"
      title="MESSAGE"
      link="/complaints"
    />
  );

  const fetchData = async () => {
    const storedToken = localStorage.getItem("jwtToken"); // Fetch the stored token

    if (storedToken) {
      // Set the token in the Axios headers before making the request
      setAuthToken(storedToken);

      // Make an authenticated request using axiosInstance
      await axiosInstance
        .get("/superadmin/crud/dashboard")
        .then((response) => {
          let obj = response.data.data.stats;
          let arr = Object.keys(obj);
          arr.forEach((element) => {
            dummyData[obj[element].roleName] = obj[element]["count"].toString();
          });
          dummyData.verifiedmembers =
            response.data.data["verifiedMemberCount"].toString();
          dummyData.unverifiedmembers =
            response.data.data["unverifiedMemberCount"].toString();
          dummyData.complaints =
            response.data.data["complaintsCount"].toString();
          dummyData.testimonials =
            response.data.data["testimonials"].toString();
          dummyData.donations = response.data.data["donationsCount"].toString();
          dummyData.contactus = response.data.data["contactUsCount"].toString();
          localStorage.setItem("myValues", JSON.stringify(dummyData));
          setDashboardData(dummyData);
          setDataLoaded(true);
        })
        .catch((error) => {
          // Handle error, e.g., unauthorized access
          console.error("Error fetching data:", error);
        });
    }
  };
  useEffect(() => {
    fetchData();
    // Assuming you have the JWT token stored in localStorage or somewhere else
  }, []);

  if (!dataLoaded)
    return (
      <>
        <Center height="100vh">
          <Spinner size="xl" color="blue.500" />
          <Text px="2"> Loading... </Text>
        </Center>
      </>
    );
  return (
    <Root title="Admin Dashboard">
      <Box p="6">
        <Flex wrap="wrap">
          <Flex justifyContent={"center"} wrap={"wrap"} p="0" m="0">
            <DashboardCards dashboardData={dashboardData} />
          </Flex>
          {postPreview} {complaintsPreview}
        </Flex>
      </Box>
    </Root>
  );
}
