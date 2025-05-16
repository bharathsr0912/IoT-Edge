import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import FleetManagement from "./pages/fleetmanagement";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/fleet-management" element={<FleetManagement />} />
      </Routes>
    </BrowserRouter>
  );
};