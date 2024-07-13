import React from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// import images
import Harvesting from "/images/we-do-harvesting.jpg";
import Mowing from "/images/we-do-mowing.jpg";
import Planting from "/images/we-do-planting.jpg";
import Seeding from "/images/we-do-seeding.jpg";
import Watering from "/images/we-do-watering.jpg";
import Fertilizing from "/images/we-do-fertilizing.jpg";
import Mulching from "/images/we-do-mulching.jpg";
const data = [
  {
    image: Harvesting,
  },
  {
    image: Mowing,
  },
  {
    image: Planting,
  },
  {
    image: Seeding,
  },
  {
    image: Watering,
  },
  {
    image: Fertilizing,
  },
  {
    image: Mulching,
  },
];

const ServiceCarousel = ({ colors }) => {
  const ScarouselSection = styled.div`
    background-color: ${colors.fifthColor};
    h2 {
      color: ${colors.thirdColor};
    }
    .cards-box {
      top: 50px;
    }
    img {
      transition-duration: 0.3s;
    }
    img:hover {
      transform: scale(1.3);
    }
  `;

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <ScarouselSection>
      <div className="container pt-5 text-light">
        <div className="row">
          <div className="col col-12">
            <h2 className="fs-4">SERVICES</h2>
            <h3 className="fs-2 fw-bolder">Necessitatibus eius consequatur</h3>
          </div>
          <div className="col col-12 position-relative cards-box">
            <Carousel
              responsive={responsive}
              autoplay={true}
              autoPlaySpeed={3000} // Set the speed in milliseconds
              infinite={true}
              keyBoardControl={true}
              transitionDuration={500}
              showDots={true}
            >
              {data.map((d) => (
                <div className="card overflow-hidden border-0 mx-3">
                  <img src={d.image} className="w-100" />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </ScarouselSection>
  );
};
export default ServiceCarousel;
