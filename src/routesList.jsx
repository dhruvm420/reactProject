import ErrorPage from "./components/errorPage.jsx";
import Dashboard from "./routes/dashboard.jsx";
import StateList from "./routes/statelist.jsx";
import DistrictList from "./routes/districtlist.jsx";
import TehsilList from "./routes/tehsillist.jsx";
import PanchayatList from "./routes/panchayatlist.jsx";
import VerifiedList from "./routes/verifiedlist.jsx";
import UnVerifiedList from "./routes/unverifiedlist.jsx";
import Complaints from "./routes/complaints.jsx";
import Testimonials from "./routes/testimonials.jsx";
import Donors from "./routes/donors.jsx";
import Contact from "./routes/contacts.jsx";
import Management from "./routes/management.jsx";
import PublicUserList from "./routes/publicuserlist.jsx";
import Posts from "./routes/posts.jsx";
import CreateDistrict from "./routes/Forms/createDistrict.jsx";
import CreateState from "./routes/Forms/createState.jsx";
import CreateTehsil from "./routes/Forms/createTehsil.jsx";
import CreatePanchayat from "./routes/Forms/createPanchayat.jsx";
import MyMessage from "./routes/mymessage.jsx";
import EventList from "./routes/eventlist.jsx";
import EventBooking from "./routes/eventBooking.jsx";
import PanchayatReport from "./routes/panchayatreport.jsx";
import ManagementForm from "./routes/Forms/managementForm.jsx";
import CreateTestimonial from "./routes/Forms/testimonialForm.jsx";
import DonationForm from "./routes/Forms/donationForm.jsx";
import CreateEvent from "./routes/Forms/createEvent.jsx";
import CreatePost from "./routes/Forms/createPost.jsx";
import RecieptApplication from "./routes/receiptApplication.jsx";
import Id from "./components/actionButtons/idCards/id.jsx";
import Appointment from "./components/actionButtons/appointment.jsx";
import Certificate from "./components/actionButtons/certificate.jsx";
import LogIn from "./routes/Forms/login.jsx";
import Slider from "./routes/sliderImages.jsx";
import SliderForm from "./routes/Forms/createSlider.jsx";
import ObjectiveList from "./routes/objectivelist.jsx";
import ObjectiveForm from "./routes/Forms/createObjective.jsx";
import LogOut from "./routes/logOut.jsx";
import MyCompanyForm from "./routes/Forms/companyProfile.jsx";
import Minidashboard from "./routes/miniDashboard.jsx";
import UnderData from "./routes/underData.jsx";
import MiniLogout from "./routes/miniLogout.jsx";
import MiniID from "./routes/miniID.jsx";
import MiniAppLetter from "./routes/miniappointment.jsx";
import MiniCertificate from "./routes/miniCertificate.jsx";
import CreateChild from "./routes/Forms/createChild.jsx";
import CreateMember from "./routes/Forms/createMember.jsx";
import AboutUsList from "./routes/aboutusposts.jsx";
export let routesList = [
  {
    path: "/",
    element: <LogIn />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/statelist/:parent",
    element: <StateList />,
  },
  {
    path: "/logout",
    element: <LogOut />,
  },
  {
    path: "/districtlist/:parent",
    element: <DistrictList />,
  },
  {
    path: "/tehsillist/:parent",
    element: <TehsilList />,
  },
  {
    path: "/panchayatlist/:parent",
    element: <PanchayatList />,
  },
  {
    path: "/verifiedmembers/:parent",
    element: <VerifiedList />,
  },
  {
    path: "/unverifiedmembers/:parent",
    element: <UnVerifiedList />,
  },
  {
    path: "/complaints",
    element: <Complaints />,
  },
  {
    path: "/testimonials",
    element: <Testimonials />,
  },
  {
    path: "/donations",
    element: <Donors />,
  },
  {
    path: "/contactus",
    element: <Contact />,
  },
  {
    path: "/management",
    element: <Management />,
  },
  {
    path: "/slider",
    element: <Slider />,
  },
  {
    path: "/addSlider",
    element: <SliderForm />,
  },
  {
    path: "/objectivelist",
    element: <ObjectiveList />,
  },
  {
    path: "/addObjective",
    element: <ObjectiveForm />,
  },
  {
    path: "/publicuserlist",
    element: <PublicUserList />,
  },
  {
    path: "/receiptapplication",
    element: <RecieptApplication />,
  },
  {
    path: "/posts",
    element: <Posts />,
  },
  {
    path: "/createDistrict",
    element: <CreateDistrict />,
  },

  {
    path: "/createState",
    element: <CreateState />,
  },

  {
    path: "/createTehsil",
    element: <CreateTehsil />,
  },
  {
    path: "/createPanchayat",
    element: <CreatePanchayat />,
  },
  {
    path: "/mymessage",
    element: <MyMessage />,
  },
  {
    path: "/event",
    element: <EventList />,
  },
  {
    path: "/eventbooking",
    element: <EventBooking />,
  },
  {
    path: "/panchayatreport",
    element: <PanchayatReport />,
  },
  {
    path: "/createManagement",
    element: <ManagementForm />,
  },
  {
    path: "/createTestimonial",
    element: <CreateTestimonial />,
  },
  {
    path: "/donationForm",
    element: <DonationForm />,
  },
  {
    path: "/createEvent",
    element: <CreateEvent />,
  },

  {
    path: "/createPost",
    element: <CreatePost />,
  },

  {
    path: "/aboutus",
    element: <AboutUsList />,
  },
  {
    path: "/companyprofile",
    element: <MyCompanyForm />,
  },
  {
    path: "/idcard/:listName/:userId",
    element: <Id />,
  },
  {
    path: "/id",
    element: <MiniID />,
  },
  {
    path: "/appointment/:listName/:userId",
    element: <Appointment />,
  },
  {
    path: "/appletter",
    element: <MiniAppLetter />,
  },
  {
    path: "/certificate/:listName/:userId",
    element: <Certificate />,
  },
  {
    path: "/certifcate",
    element: <MiniCertificate />,
  },
  {
    path: "/minidashboard/:type",
    element: <Minidashboard />,
  },
  {
    path: "/underdata/:parent",
    element: <UnderData />,
  },
  {
    path: "/createChild/:parent",
    element: <CreateChild />,
  },
  {
    path: "/createMember/:parent",
    element: <CreateMember />,
  },
  {
    path: "/minilogout",
    element: <MiniLogout />,
  },
];
