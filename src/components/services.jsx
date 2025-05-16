import React from "react";
import { Link } from "react-router-dom";

export const Services = (props) => {
  return (
    <div id="services" className="text-center py-5">
      <div className="container">
        <div className="section-title mb-5">
          <h2>Our Services</h2>
          <p>
            Explore our advanced GPS trackers and mobile applications for
            efficient fleet and personal security management.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="col-12 col-sm-6 col-lg-4 d-flex align-items-stretch mb-4"
                >
                  <div className="card w-100 shadow-sm">
                    <img
                      src={d.src}
                      className="card-img-top img-fluid"
                      alt={d.name}
                      style={{
                        objectFit: "cover",
                        height: "200px",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                      }}
                    />
                    <div className="card-body d-flex flex-column justify-content-between">
                      <div>
                        <h5 className="card-title" style={{ fontSize: "1.25rem", marginTop: "15px" }}>
                          {d.name}
                        </h5>
                        <p className="card-text">{d.text}</p>
                      </div>
                      {/* <a href="#" className="btn btn-custom mt-3 align-self-start">
                        Learn More
                      </a> */}
                      <Link
                        to={d.link}
                        className="btn btn-custom mt-3 align-self-start"
                        style={{
                          backgroundColor: "#007bff",
                          color: "#fff",
                          textDecoration: "none",
                        }}> Learn More </Link>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};