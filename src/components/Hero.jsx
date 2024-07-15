import { React, useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";

// import images
import Bg1 from "/images/heroBg1.jpg";
import Bg2 from "/images/heroBg2.jpg";
import Bg3 from "/images/heroBg3.jpg";
import Bg4 from "/images/heroBg4.jpg";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  const HeroSection = styled.div`
    width: 100%;
    height: calc(100vh - 56px);
    .black-overlay {
      background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    }
    .carouselOne,
    .carouselTwo,
    .carouselThree,
    .carouselFour {
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
    .carouselOne {
      background-image: url(${Bg1});
    }
    .carouselTwo {
      background-image: url(${Bg2});
    }
    .carouselThree {
      background-image: url(${Bg3});
    }
    .carouselFour {
      background-image: url(${Bg4});
    }
    .carousel-caption {
      height: 100%;
      display: flex !important;
      justify-content: center;
      flex-direction: column;
      h1 {
        margin-top: 50px;
      }
    }
  `;
  return (
    <HeroSection>
      <div id="carouselHero" className="carousel slide h-100">
        <div className="carousel-inner h-100">
          <div className="carousel-item active h-100 position-relative carouselOne">
            <div className="black-overlay w-100 h-100 position-absolute"></div>
            {/* <img src={Bg1} className="w-100 h-100" /> */}
            <div className="carousel-caption d-none d-md-block">
              <h1 className="display-3 fw-bolder" data-aos="fade-down">
                Farming is the best solution of worlds starvation
              </h1>
              <p data-aos="fade-up">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="carousel-item h-100 position-relative carouselTwo">
            <div className="black-overlay w-100 h-100 position-absolute"></div>
            {/* <img src={Bg2} className="w-100 h-100" /> */}
            <div className="carousel-caption d-none d-md-block">
              <h1 className="display-3 fw-bolder">
                Organic vegetables is good for health
              </h1>
              <p>
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus.
              </p>
            </div>
          </div>
          <div className="carousel-item h-100 position-relative carouselThree">
            <div className="black-overlay w-100 h-100 position-absolute"></div>
            {/* <img src={Bg3} className="w-100 h-100" /> */}
            <div className="carousel-caption d-none d-md-block">
              <h1 className="display-3 fw-bolder">
                Providing Fresh Produce Every Single Day
              </h1>
              <p>
                Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit.
              </p>
            </div>
          </div>
          <div className="carousel-item h-100 position-relative carouselFour">
            <div className="black-overlay w-100 h-100 position-absolute"></div>
            {/* <img src={Bg4} className="w-100 h-100" /> */}
            <div className="carousel-caption d-none d-md-block">
              <h1 className="display-3 fw-bolder">Farming as a Passione</h1>
              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselHero"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselHero"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </HeroSection>
  );
};
export default Hero;
