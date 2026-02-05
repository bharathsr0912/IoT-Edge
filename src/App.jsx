import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";

import { FleetManagement } from "./components/Pages/fleet_management";
import { LiveTracking } from "./components/Pages/live_tracking";
import { PersonalSecurity } from "./components/Pages/personal_security";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <>
    <Navigation />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div>
            <Header data={landingPageData.Header} />
            <About data={landingPageData.About} />
            <Services data={landingPageData.Services} />
            <Contact data={landingPageData.Contact} />
          </div>
          } />
        <Route path="/fleet-management" element={<FleetManagement />} exact />
        <Route path="/personal-security" element={<PersonalSecurity />} exact />
        <Route path="/live-tracking" element={<LiveTracking />} exact/>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;