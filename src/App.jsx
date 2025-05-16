import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import FleetManagement from "./pages/fleetmanagement";
import ScrollToTop from "./components/scrolltotop";
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/fleet-management" element={<FleetManagement />} />
      </Routes>
    </BrowserRouter>
  );
};