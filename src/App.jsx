import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import Registeration from "./Pages/Registeration";
import AboutUs from "./Pages/AboutUs";
import Donate from "./Pages/Donate";
import Contactus from "./Pages/Contactus";
import "./App.css";

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <Header />
        <Registeration />
      </>
    ),
  },
  {
    path: "/about-us",
    element: (
      <>
        <Header />
        <AboutUs />
      </>
    ),
  },
  {
    path: "/donate",
    element: (
      <>
        <Header />
        <Donate />
      </>
    ),
  },
  {
    path: "/contact-us",
    element: (
      <>
        <Header />
        <Contactus />
      </>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
