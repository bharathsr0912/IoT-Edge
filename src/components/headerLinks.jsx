import React, { useState } from "react";
import { Link } from 'react-scroll';

const HeaderLinks = () => {
  const [selectedService, setSelectedService] = useState("");

  // Service options for dropdown
  const serviceOptions = [
    { id: "service-0", name: "Fleet Management" },
    { id: "service-1", name: "Home Automation" },
    { id: "service-2", name: "Agriculture Sector" },
    { id: "service-3", name: "OEM Integration" },
    { id: "service-4", name: "Software Solution" }
  ];

  // Handle dropdown change - scroll to service section
  const handleServiceSelect = (e) => {
    const serviceId = e.target.value;
    setSelectedService(serviceId);
    
    if (serviceId) {
      // First, scroll to services section
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth", block: "start" });
        
        // Then scroll to specific service after a short delay
        setTimeout(() => {
          const element = document.getElementById(serviceId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }, 500);
      }
    }
  };

  return (
    <div
      className="collapse navbar-collapse"
      id="bs-example-navbar-collapse-1"
    >
      <ul className="nav navbar-nav navbar-right">
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="page-scroll"
          >
            ABOUT
          </Link>
        </li>
        
        {/* Services Dropdown */}
        <li className="dropdown-nav-item">
          <select
            className="services-nav-dropdown"
            value={selectedService}
            onChange={handleServiceSelect}
          >
            <option value="">SERVICES</option>
            {serviceOptions.map((service, index) => (
              <option key={index} value={service.id}>
                {service.name}
              </option>
            ))}
          </select>
        </li>

        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="page-scroll"
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderLinks;