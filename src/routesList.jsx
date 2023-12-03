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
import CreateDistrict from "./routes/createDistrict.jsx";
import CreateState from "./routes/createState.jsx";
import CreateTehsil from "./routes/createTehsil.jsx";
import CreatePanchayat from "./routes/createPanchayat.jsx";
import MyMessage from "./routes/mymessage.jsx";
import EventList from "./routes/eventlist.jsx";
import EventBooking from "./routes/eventBooking.jsx";
import PanchayatReport from "./routes/panchayatreport.jsx";
export let routesList = [
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/statelist",
    element: <StateList />,
  },
  {
    path: "/districtlist",
    element: <DistrictList />,
  },
  {
    path: "/tehsillist",
    element: <TehsilList />,
  },
  {
    path: "/panchayatlist",
    element: <PanchayatList />,
  },
  {
    path: "/verifiedmembers",
    element: <VerifiedList />,
  },
  {
    path: "/unverifiedmembers",
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
    path: "/publicuserlist",
    element: <PublicUserList />,
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
];
