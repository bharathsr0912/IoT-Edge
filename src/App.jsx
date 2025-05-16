import {React, useState,useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import FleetManagement from "./pages/fleetmanagement";
import ScrollToTop from "./components/scrolltotop";
import JsonData from "./data/data.json";

export default function App() {

  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
          <Route path="/" element={<Layout data={landingPageData} />} />
          <Route path="/fleet-management" element={<FleetManagement data={landingPageData.ServiceDetailFleetManagement}/>} />
          <Route path="/live-tracking" element={<FleetManagement data={landingPageData.ServiceDetailLiveTracking}/>} />
          <Route path="/personal-security" element={<FleetManagement data={landingPageData.ServiceDetailPersonalSecurity}/>} />
      </Routes>
    </BrowserRouter>
  );
};