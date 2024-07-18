import { React, useContext, useEffect } from "react";
import styled from "styled-components";
import { colors } from "../App";
import AOS from "aos";

// import images
import HappyFarmer from "/images/HappyFarmer.jpg";

const WhyChooseUs = () => {
  const themeColors = useContext(colors);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  const ChooseSection = styled.div`
    background-color: ${themeColors.firstColor};
    color: white;
    p,
    h3 {
      color: ${themeColors.thirdColor};
    }
    img {
      bottom: 50px;
    }
  `;
  return (
    <ChooseSection>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-lg-6">
            <img
              src={HappyFarmer}
              className="position-relative w-100 rounded"
              data-aos="zoom-in"
            />
          </div>
          <div className="col col-12 col-lg-6 mt-3 mt-lg-5">
            <h3
              className="fs-4 mt-lg-5"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              WHY CHOOSE US
            </h3>
            <h2 className="fs-2" data-aos="fade-up" data-aos-duration="2000">
              More than 50 year experience in agriculture industry
            </h2>
            <p className="my-4" data-aos="fade-up" data-aos-duration="3000">
              Reprehenderit, odio laboriosam? Blanditiis quae ullam quasi illum
              minima nostrum perspiciatis error consequatur sit nulla.
            </p>
            <div className="row">
              <div
                className="col col-12 d-flex align-items-center"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <i class="fa-solid fa-cloud-rain fs-1"></i>
                <div className="ms-3">
                  <h4>Plants needs rain</h4>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </div>
              <div
                className="col col-12 d-flex align-items-center"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <i class="fa-regular fa-heart fs-1"></i>
                <div className="ms-3">
                  <h4>Plants needs rain</h4>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </div>
              <div
                className="col col-12 d-flex align-items-center"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <i class="fa-solid fa-shop fs-1"></i>
                <div className="ms-3">
                  <h4>Plants needs rain</h4>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ChooseSection>
  );
};
export default WhyChooseUs;
