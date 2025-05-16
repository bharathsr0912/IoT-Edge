import React, { useState, useEffect } from "react";
import { Navigation } from "./navigation";
import { Header } from "./header";
import { Features } from "./features";
import { About } from "./about";
import { Services } from "./services";
import { Gallery } from "./gallery";
import { Testimonials } from "./testimonials";
import { Team } from "./Team";
import { Contact } from "./contact";
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";

import "../App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Layout = (props) => {
  
  return (
    <div>
      <Navigation showLinks={true} />
      <Header data={props.data.Header} />
      <About data={props.data.About} />
      <Services data={props.data.Services} />
      <Contact data={props.data.Contact} />
      {/* <Features data={landingPageData.Features} /> */}
      {/* <Gallery data={landingPageData.Gallery} /> */}
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      {/* <Team data={landingPageData.Team} /> */}
    </div>
  );
};

export default Layout;