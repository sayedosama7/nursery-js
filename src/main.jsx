import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Layout from "./Components/Layout/Layout.jsx";
import App from "./App";
import Services from './Pages/Services/Services.jsx';
import Report from './Pages/Report/Report';
import Dashboard from './Pages/Dashboard/Dashboard';
import Student from "./Pages/Student/Student.jsx";
import Teacher from "./Pages/Teacher/Teacher.jsx";
import Class from "./Pages/Class/Class.jsx";
import Nursery from "./Pages/Nursery/Nursery.jsx";
import Reservation from "./Pages/Reservation/Reservation.jsx";
import Discount from "./Pages/Discount/Discount.jsx";
import Parent from "./Pages/Parent/Parent.jsx";
import ServicesType from "./Pages/ServicesType/ServicesType.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><App /></Layout>, // Wrap App with Layout
    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/services-type",
        element: <ServicesType />
      },
      {
        path: "/report",
        element: <Report />
      },
      {
        path: "/student",
        element: <Student />
      },
      {
        path: "/teacher",
        element: <Teacher />
      },
      {
        path: "/class",
        element: <Class />
      },
      {
        path: "/nursery",
        element: <Nursery />
      },
      {
        path: "/reservation",
        element: <Reservation />
      },
      {
        path: "/discount",
        element: <Discount />
      },
      {
        path: "/parent",
        element: <Parent />
      },
    ]
  }
]);

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element. Check your HTML file.");
}
