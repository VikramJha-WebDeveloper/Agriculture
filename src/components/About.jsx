import { React, useContext } from "react";
import styled from "styled-components";
import { colors } from "../App";

// import videos
import VideoOne from "/videos/video-one.mp4";

// import images
import VideoImg from "/images/videoImg.jpg";

const About = () => {
  const themeColors = useContext(colors);
  const AboutSection = styled.div`
    button {
      background-color: ${themeColors.firstColor};
    }
    .play {
      width: 80px;
      height: 80px;
      background-color: ${themeColors.secondColor};
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition-duration: 0.3s;
      i {
        color: white;
      }
    }
    .play:hover {
      transform: scale(1.3);
    }
  `;
  return (
    <AboutSection>
      <div className="container py-5">
        <div className="row">
          <div className="col col-12 col-lg-6 order-2 order-lg-1 d-flex justify-content-center align-items-start flex-column">
            <h2>Plants Make Life Better</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              necessitatibus placeat, atque qui voluptatem velit explicabo vitae
              repellendus architecto provident nisi ullam minus asperiores
              commodi! Tenetur, repellat aliquam nihil illo.
            </p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item border-0">
                <i className="fa-solid fa-check me-2"></i>
                Lorem ipsum dolor sit amet
              </li>
              <li className="list-group-item border-0">
                <i className="fa-solid fa-check me-2"></i>
                Velit explicabo vitae repellendu
              </li>
              <li className="list-group-item border-0">
                <i className="fa-solid fa-check me-2"></i>
                Repellat aliquam nihil illo
              </li>
            </ul>
            <button className="btn px-4 py-3 text-light mt-3">
              GET IN TOUCH
            </button>
          </div>
          <div className="col col-12 col-lg-6 mb-3 mb-lg-0 order-1 order-lg-2 d-flex justify-content-center align-items-start flex-column">
            <div className="position-relative d-flex align-items-center justify-content-center">
              <img src={VideoImg} className="rounded w-100"></img>
              <div
                className="play position-absolute rounded rounded-circle"
                data-bs-toggle="modal"
                data-bs-target="#popupVideo"
              >
                <i class="fa-solid fa-play text fs-2 m-0 p-0"></i>
              </div>
            </div>

            <div className="modal fade modal-lg" id="popupVideo">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-body">
                    <div class="embed-responsive embed-responsive-16by9 w-100">
                      <video
                        className="embed-responsive-item w-100 rounded"
                        controls
                      >
                        <source src={VideoOne} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AboutSection>
  );
};
export default About;
