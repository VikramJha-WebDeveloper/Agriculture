import React from "react";
import styled from "styled-components";

const Navbar = ({ colors }) => {
  const NavSection = styled.nav`
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    background-color: ${colors.fifthColor};
    z-index: 2;
    a {
      transition-duration: 0.3s;
    }
    a:hover {
      background-color: white;
      color: ${colors.fifthColor} !important;
    }
  `;
  return (
    <>
      <NavSection className="navbar navbar-expand-lg" data-bs-theme="dark">
        <div className="container">
          <a className="navbar-brand fw-bolder text-light">Agriculture</a>
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="ms-auto navbar-nav">
              <li className="nav-item">
                <a href="#" className="nav-link mx-2 text-light rounded">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link mx-2 text-light rounded">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link mx-2 text-light rounded">
                  Our Services
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link mx-2 text-light rounded">
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link mx-2 text-light rounded">
                  Blog
                </a>
              </li>
              <li className="nav-item dropdown mx-2">
                <a
                  href="#"
                  className="nav-link dropdown-toggle text-light rounded"
                  data-bs-toggle="dropdown"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#" className="dropdown-item">
                      Dropdown 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Dropdown 2
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Dropdown 3
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider"></hr>
                  </li>
                  <li className="dropdown-submenu">
                    <a href="#" className="dropdown-item dropdown-toggle">
                      Deep Dropdown
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link text-light rounded">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </NavSection>
    </>
  );
};
export default Navbar;