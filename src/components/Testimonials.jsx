import React from "react";
import styled from "styled-components";

// import images
import ImageOne from "/images/testimonialImg1.jpg";
import ImageTwo from "/images/testimonialImg2.jpg";
import ImageThree from "/images/testimonialImg3.jpg";
import ImageFour from "/images/testimonialImg4.jpg";

const Testimonials = ({ colors }) => {
  const TestimonialsSection = styled.div`
    background-color: ${colors.fourthColor};
    h2 {
      color: ${colors.secondColor};
    }
    h2,
    h4 {
      text-transform: uppercase;
    }
    h4 {
      font-weight: normal;
      color: ${colors.secondColor};
    }
  `;
  return (
    <TestimonialsSection>
      <div className="container py-5">
        <div className="row">
          <div className="col col-12">
            <h2 className="text-center">Testimonials</h2>
            <h3 className="text-center">Necessitatibus eius consequatur</h3>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col col-12 col-md-6 my-3">
            <div className="w-100">
              <img src={ImageOne} className="rounded rounded-circle" />
              <p className="mt-3 mb-2">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae, sint numquam! Voluptatem incidunt tempore rem iste
                inventore doloribus, sit maxime voluptatibus vero, eius
                repellendus consectetur!"
              </p>
              <h4 className="m-0">James Smith</h4>
            </div>
          </div>
          <div className="col col-12 col-md-6 my-3">
            <div className="w-100">
              <img src={ImageTwo} className="rounded rounded-circle" />
              <p className="mt-3 mb-2">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae, sint numquam! Voluptatem incidunt tempore rem iste
                inventore doloribus, sit maxime voluptatibus vero, eius
                repellendus consectetur!"
              </p>
              <h4 className="m-0">Kate Smith</h4>
            </div>
          </div>
          <div className="col col-12 col-md-6 my-3">
            <div className="w-100">
              <img src={ImageThree} className="rounded rounded-circle" />
              <p className="mt-3 mb-2">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae, sint numquam! Voluptatem incidunt tempore rem iste
                inventore doloribus, sit maxime voluptatibus vero, eius
                repellendus consectetur!"
              </p>
              <h4 className="m-0">Claire Anderson</h4>
            </div>
          </div>
          <div className="col col-12 col-md-6 my-3">
            <div className="w-100">
              <img src={ImageFour} className="rounded rounded-circle" />
              <p className="mt-3 mb-2">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae, sint numquam! Voluptatem incidunt tempore rem iste
                inventore doloribus, sit maxime voluptatibus vero, eius
                repellendus consectetur!"
              </p>
              <h4 className="m-0">Dan Smith</h4>
            </div>
          </div>
        </div>
      </div>
    </TestimonialsSection>
  );
};

export default Testimonials;
