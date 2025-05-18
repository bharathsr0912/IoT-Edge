import React, { useState, useEffect } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import { Navigation } from "./navigation";
import { Header } from "./header";
import { Features } from "./features";
import { About } from "./about";
import { Services } from "./services";
import { Testimonials } from "./testimonials";
import { Team } from "./Team";
import { Contact } from "./contact";
import SmoothScroll from "smooth-scroll";

import "../App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Layout = (props) => {
   const location = useLocation(); // Initialize useLocation hook
  const navigate = useNavigate(); // Initialize useNavigate hook
  // Scroll to section if state contains a scroll target
  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });

          // Replace current history state to clear scrollTo after scroll
          navigate(location.pathname, { replace: true });
        }, 100);
      }
    }
  }, [location,navigate]);

  return (
    <div id="page-top">
      <Navigation showLinks={true} />
      <Header data={props.data.Header} />
      <About data={props.data.About} />
      <Services data={props.data.Services} />
      <Testimonials data={props.data.Testimonials} />
      <Contact data={props.data.Contact} />
      {/* <Features data={landingPageData.Features} /> */}
      {/* <Gallery data={landingPageData.Gallery} /> */}
      {/* <Team data={landingPageData.Team} /> */}
    </div>
  );
};

export default Layout;