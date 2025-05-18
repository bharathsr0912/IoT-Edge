import React from "react";

export const Testimonials = (props) => {
  const clientLogos = [
  { id: 1, src: 'img/testimonials/01.jpg', alt: 'Client 1' },
  { id: 2, src: 'img/testimonials/02.jpg', alt: 'Client 2' },
  { id: 3, src: 'img/testimonials/02.jpg', alt: 'Client 3' },
  { id: 4, src: 'img/testimonials/02.jpg', alt: 'Client 4' },
  { id: 5, src: 'img/testimonials/02.jpg', alt: 'Client 5' },
  // Add as many logos as you want
];

  return (
    <div id="testimonials" className="client-slider">
      <div className="slide-track">
        {clientLogos.concat(clientLogos).map((client, index) => (
          <div className="slide" key={index}>
            <img src={client.src} alt={client.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};
  // return (
  //   <div id="testimonials">
  //     <div className="container">
  //       <div className="section-title text-center">
  //         <h2>What our clients say</h2>
  //       </div>
  //       <div className="row">
  //         {props.data
  //           ? props.data.map((d, i) => (
  //               <div key={`${d.name}-${i}`} className="col-md-4">
  //                 <div className="testimonial">
  //                   <div className="testimonial-image">
  //                     {" "}
  //                     <img src={d.img} alt="" />{" "}
  //                   </div>
  //                   <div className="testimonial-content">
  //                     <p>"{d.text}"</p>
  //                     <div className="testimonial-meta"> - {d.name} </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             ))
  //           : "loading"}
  //       </div>
  //     </div>
  //   </div>
  // );
// };
