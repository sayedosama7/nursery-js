import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Layout from "./Components/Layout/Layout.jsx";
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

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services-type" element={<ServicesType />} />
            <Route path="/report" element={<Report />} />
            <Route path="/student" element={<Student />} />
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/class" element={<Class />} />
            <Route path="/nursery" element={<Nursery />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/discount" element={<Discount />} />
            <Route path="/parent" element={<Parent />} />
          </Routes>
        </Layout>
      </HashRouter>
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element. Check your HTML file.");
}
