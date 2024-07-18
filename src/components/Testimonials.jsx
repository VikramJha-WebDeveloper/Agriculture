import { React, useContext, useEffect } from "react";
import styled from "styled-components";
import { colors } from "../App";
import AOS from "aos";

// import images
import ImageOne from "/images/testimonialImg1.jpg";
import ImageTwo from "/images/testimonialImg2.jpg";
import ImageThree from "/images/testimonialImg3.jpg";
import ImageFour from "/images/testimonialImg4.jpg";

const data = [
  {
    image: ImageOne,
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident deleniti iusto molestias, dolore vel fugiat ab placeat ea?",
    name: "James Smith",
    fade_aos: "fade-up",
  },
  {
    image: ImageTwo,
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident deleniti iusto molestias, dolore vel fugiat ab placeat ea?",
    name: "Kate Smith",
    fade_aos: "fade-up",
  },
  {
    image: ImageThree,
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident deleniti iusto molestias, dolore vel fugiat ab placeat ea?",
    name: "Claire Anderson",
    fade_aos: "fade-up",
  },
  {
    image: ImageFour,
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident deleniti iusto molestias, dolore vel fugiat ab placeat ea?",
    name: "Dan Smith",
    fade_aos: "fade-up",
  },
];

const Testimonials = () => {
  const themeColors = useContext(colors);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  const TestimonialsSection = styled.div`
    h2 {
      color: ${themeColors.secondColor};
    }
    h2,
    h4 {
      text-transform: uppercase;
    }
    h4 {
      font-weight: normal;
      color: ${themeColors.secondColor};
    }
  `;
  return (
    <TestimonialsSection>
      <div className="container py-5">
        <div className="row">
          <div className="col col-12" data-aos="zoom-in">
            <h2 className="text-center">Testimonials</h2>
            <h3 className="text-center">Necessitatibus eius consequatur</h3>
          </div>
        </div>
        <div className="row mt-3">
          {data.map((d) => (
            <div className="col col-12 col-md-6 my-3" data-aos={d.fade_aos}>
              <div className="w-100">
                <img src={d.image} className="rounded rounded-circle" />
                <blockquote class="blockquote">
                  <p className="mt-3 mb-2">{d.paragraph}</p>
                </blockquote>
              </div>
              <h4 className="m-0">{d.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </TestimonialsSection>
  );
};

export default Testimonials;
