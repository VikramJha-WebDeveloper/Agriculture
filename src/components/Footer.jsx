import React from "react";
import styled from "styled-components";

const Footer = ({ colors }) => {
  const FooterSection = styled.div`
    background-color: ${colors.fifthColor};
    color: white;

    ul,
    li {
      border: none;
      background-color: transparent;
      a {
        color: white;
        text-decoration: none;
        transition-duration: 0.3s;
        &:hover {
          color: ${colors.secondColor};
        }
      }
    }
    h4::after {
      content: "";
      display: block;
      height: 3px;
      width: 15%;
      background-color: ${colors.secondColor};
      margin-top: 10px;
    }
    small span a {
      color: ${colors.secondColor};
      text-decoration: none;
    }
    .social-medias i {
      font-size: 20px;
      color: ${colors.secondColor};
      transition-duration: 0.3s;
    }
    .social-medias {
      margin: 0px 3px;
      /* border: 2px solid ${colors.secondColor}; */
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover i {
        color: white;
      }
    }
  `;
  return (
    <FooterSection>
      <div className="container py-5">
        <div className="row">
          <div className="col col-12 col-lg-4 col-md-6">
            <h2>Agriculture</h2>
            <p className="m-0 mt-4">A108 Adam Street</p>
            <p className="m-0">New York, NY 535022</p>

            <p className="m-0 mt-2">Phone: +1 5589 55488 55</p>
            <p className="m-0">Email: info@example.com</p>
          </div>
          <div className="col col-12 col-lg-8 col-md-6">
            <div className="row">
              <div className="col col-12 col-lg-3 col-md-6 mt-3 mt-md-0">
                <h4 className="fs-5">Useful Links</h4>
                <ul className="list-group">
                  <li className="list-group-item m-0">
                    <a href="#">Home</a>
                  </li>
                  <li className="list-group-item">
                    <a href="#">About Us</a>
                  </li>
                  <li className="list-group-item">
                    <a href="#">Services</a>
                  </li>
                  <li className="list-group-item">
                    <a href="#">Terms of service</a>
                  </li>
                  <li className="list-group-item">
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>
              <div className="col col-12 col-lg-3 col-md-6 mt-3 mt-md-0">
                <h4 className="fs-5">Our Services</h4>
                <ul className="list-group">
                  <li className="list-group-item">
                    <a href="#">Web Design</a>
                  </li>
                  <li className="list-group-item">
                    <a href="#">Web Development</a>
                  </li>
                  <li className="list-group-item">
                    <a href="#">Product Management</a>
                  </li>
                  <li className="list-group-item">
                    <a href="#">Marketing</a>
                  </li>
                  <li className="list-group-item">
                    <a href="#">Graphic Design</a>
                  </li>
                </ul>
              </div>
              <div className="col col-12 col-lg-3 col-md-6 mt-3 mt-lg-0">
                <h4 className="fs-5">Hic solutasetp</h4>
                <ul className="list-group">
                  <li className="list-group-item">
                    <a href="#">Molestiae accusamus iure</a>
                  </li>
                  <li className="list-group-item">
                    <a href="#">Excepturi dignissimos</a>
                  </li>
                  <li className="list-group-item">
                    <a href="#">Suscipit distinctio</a>
                  </li>
                  <li className="list-group-item">
                    <a href="#">Dilecta</a>
                  </li>
                  <li className="list-group-item">
                    <a href="#">Sit quas consectetur</a>
                  </li>
                </ul>
              </div>
              <div className="col col-12 col-lg-3 col-md-6 mt-3 mt-lg-0">
                <h4 className="fs-5">Nobis illum</h4>
                <ul className="list-group">
                  <li className="list-group-item">
                    <a href="#">Ipsam</a>
                  </li>
                  <li className="list-group-item">
                    <a href="#">Laudantium dolorum</a>
                  </li>
                  <li className="list-group-item">
                    <a href="#">Dinera</a>
                  </li>
                  <li className="list-group-item">
                    <a href="#">Trodelas</a>
                  </li>
                  <li className="list-group-item">
                    <a href="#">Flexo</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "black" }}>
        <div className="container py-4">
          <div className="row">
            <div className="col col-12 col-lg-6 d-flex mt-3 mt-lg-0 order-2 order-lg-1">
              <div className="mx-auto ms-lg-0 d-inline-block">
                © Copyright <span className="fw-bolder">MyWebsite</span>. All
                Rights Reserved
                <br></br>
                <small>
                  Designed by{" "}
                  <span>
                    <a href="https://bootstrapmade.com/">BootstrapMade</a>
                  </span>
                </small>
              </div>
            </div>
            <div className="col col-12 col-lg-6 d-flex align-items-center order-1 order-lg-2">
              <div className="d-flex mx-auto me-lg-0">
                <div className="social-medias rounded">
                  <a href="#" className="m-0 p-0">
                    <i class="fa-brands fa-x-twitter fs-4"></i>
                  </a>
                </div>
                <div className="social-medias rounded">
                  <a href="#" className="m-0 p-0">
                    <i class="fa-brands fa-facebook fs-4"></i>
                  </a>
                </div>
                <div className="social-medias rounded">
                  <a href="#" className="m-0 p-0">
                    <i class="fa-brands fa-instagram fs-4"></i>
                  </a>
                </div>
                <div className="social-medias rounded">
                  <a href="#" className="m-0 p-0">
                    <i class="fa-brands fa-linkedin fs-4"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterSection>
  );
};
export default Footer;
