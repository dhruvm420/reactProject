import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import ErrorPage from "./components/errorPage.jsx";
import Dashboard from "./routes/dashboard.jsx";
import StateList from "./routes/statelist.jsx";
import DistrictList from "./routes/districtlist.jsx";
import TehsilList from "./routes/tehsillist.jsx";
import PanchayatList from "./routes/panchayatlist.jsx";
const router = createBrowserRouter([
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
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
