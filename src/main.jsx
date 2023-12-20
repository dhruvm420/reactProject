import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme.jsx";
import { routesList } from "./routesList.jsx";
const router = createBrowserRouter(routesList);
ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
  </ChakraProvider>
);
