import { React, useContext } from "react";
import styled from "styled-components";
import { colors } from "../App";

// import images
import HappyFarmer from "/images/HappyFarmer.jpg";

const WhyChooseUs = () => {
  const themeColors = useContext(colors);
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
            />
          </div>
          <div className="col col-12 col-lg-6 mt-3 mt-lg-5">
            <h3 className="fs-4 mt-lg-5">WHY CHOOSE US</h3>
            <h2 className="fs-2">
              More than 50 year experience in agriculture industry
            </h2>
            <p className="my-4">
              Reprehenderit, odio laboriosam? Blanditiis quae ullam quasi illum
              minima nostrum perspiciatis error consequatur sit nulla.
            </p>
            <div className="row">
              <div className="col col-12 d-flex align-items-center">
                <i class="fa-solid fa-cloud-rain fs-1"></i>
                <div className="ms-3">
                  <h4>Plants needs rain</h4>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </div>
              <div className="col col-12 d-flex align-items-center">
                <i class="fa-regular fa-heart fs-1"></i>
                <div className="ms-3">
                  <h4>Plants needs rain</h4>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </div>
              <div className="col col-12 d-flex align-items-center">
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
