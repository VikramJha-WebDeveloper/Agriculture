import { React, useContext, useEffect } from "react";
import styled from "styled-components";
import { colors } from "../App";
import AOS from "aos";

// import images
import Planting from "/images/planting.jpg";
import Mulching from "/images/mulching.jpg";
import Plowing from "/images/plowing.jpg";
import Mowing from "/images/mowing.jpg";
import Seeding from "/images/seeding.jpg";
import FreshVegetables from "/images/fresh-vegetables.jpg";
import Watering from "/images/watering.jpg";
import VegetablesSelling from "/images/vegetables-selling.jpg";

const data = [
  {
    serviceImage: Planting,
    serviceHeading: "Planting",
    serviceDescription:
      "Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie",
    aos_fade: "fade-up",
    aos_duration: 1000,
  },
  {
    serviceImage: Mulching,
    serviceHeading: "Mulching",
    serviceDescription:
      "Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie",
    aos_fade: "fade-up",
    aos_duration: 2000,
  },
  {
    serviceImage: Plowing,
    serviceHeading: "Plowing",
    serviceDescription:
      "Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie",
    aos_fade: "fade-up",
    aos_duration: 3000,
  },
  {
    serviceImage: Mowing,
    serviceHeading: "Mowing",
    serviceDescription:
      "Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie",
    aos_fade: "fade-up",
    aos_duration: 1000,
  },
  {
    serviceImage: Seeding,
    serviceHeading: "Seeding",
    serviceDescription:
      "Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie",
    aos_fade: "fade-up",
    aos_duration: 2000,
  },
  {
    serviceImage: FreshVegetables,
    serviceHeading: "Fresh Vegetables",
    serviceDescription:
      "Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie",
    aos_fade: "fade-up",
    aos_duration: 3000,
  },
  {
    serviceImage: Watering,
    serviceHeading: "Watering",
    serviceDescription:
      "Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie",
    aos_fade: "fade-up",
    aos_duration: 1000,
  },
  {
    serviceImage: VegetablesSelling,
    serviceHeading: "Vegetable Selling",
    serviceDescription:
      "Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie",
    aos_fade: "fade-up",
    aos_duration: 2000,
  },
];

const Services = () => {
  const themeColors = useContext(colors);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  const ServicesSection = styled.div`
    h2 {
      color: ${themeColors.firstColor};
    }
  `;
  return (
    <ServicesSection>
      <div className="container py-5">
        <div className="row">
          <div className="col col-12 mb-3">
            <h2 className="fs-4 text-center">Services</h2>
            <p className="fs-2 fw-bolde text-center">
              Providing Fresh Produce Every Single Day
            </p>
          </div>
          <div className="col col-12">
            <div className="row">
              {data.map((d) => (
                <div
                  className="py-3 col col-12 col-lg-3 col-md-6 d-flex flex-column align-items-center justify-content-center"
                  data-aos={`${d.aos_fade}`}
                  data-aos-duration={`${d.aos_duration}`}
                >
                  <img src={d.serviceImage} />
                  <h3 className="fs-5">{d.serviceHeading}</h3>
                  <p className="text-center">{d.serviceDescription}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ServicesSection>
  );
};

export default Services;
