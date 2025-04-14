import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container-fluid">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
          Explore our advanced GPS trackers and mobile applications for efficient fleet and personal security management.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <div className="card" >
                    <img src={d.src} className="card-img-top" alt="..." style={{height:"250px", width:"450px", borderRadius:"10px"}}/>
                    <div className="card-body">
                      <h5 className="card-title" style={{fontSize: "135%", marginTop:"30px"}}>{d.name}</h5>
                      <p className="card-text">{d.text}</p>
                      <a href="#" className="btn btn-custom" style={{marginTop:"15px"}}>Go somewhere</a>
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
