import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Dashboard from "./routes/dashboard.jsx";
import StateList from "./routes/statelist.jsx";
import ErrorPage from "./components/errorPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/statelist",
    element: <StateList />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
