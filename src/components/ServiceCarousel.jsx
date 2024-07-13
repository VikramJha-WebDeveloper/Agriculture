import React from "react";

// import images
import ServiceImage1 from "/images/serviceCarousel1.jpg";
import ServiceImage2 from "/images/serviceCarousel2.jpg";
import ServiceImage3 from "/images/serviceCarousel3.jpg";
import ServiceImage4 from "/images/serviceCarousel4.jpg";
import ServiceImage5 from "/images/serviceCarousel5.jpg";
import ServiceImage6 from "/images/serviceCarousel6.jpg";
import ServiceImage7 from "/images/serviceCarousel7.jpg";
import ServiceImage8 from "/images/serviceCarousel8.jpg";

const data = [
  {
    image: ServiceImage1,
  },
  {
    image: ServiceImage2,
  },
  {
    image: ServiceImage3,
  },
  {
    image: ServiceImage4,
  },
  {
    image: ServiceImage5,
  },
  {
    image: ServiceImage6,
  },
  {
    image: ServiceImage7,
  },
  {
    image: ServiceImage8,
  },
];

const options = {
  items: 1,
  nav: true,
  rewind: true,
  autoplay: true,
};

const ServiceCarousel = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col col-12">
            <h2>SERVICES</h2>
            <p>Necessitatibus eius consequatur</p>
          </div>
          <div className="col col-12"></div>
        </div>
      </div>
    </>
  );
};
export default ServiceCarousel;
