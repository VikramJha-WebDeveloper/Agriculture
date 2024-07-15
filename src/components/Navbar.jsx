import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navbar = ({ colors }) => {
  const NavSection = styled.nav`
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    background-color: ${colors.fifthColor};

    z-index: 2;
  `;
  return (
    <>
      <NavSection className="navbar navbar-expand-lg" data-bs-theme="dark">
        <div className="container">
          <NavLink to="/" className="navbar-brand fw-bolder text-light">
            Agriculture
          </NavLink>
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
                <NavLink to="/" className="nav-link mx-2 text-light rounded">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className="nav-link mx-2 text-light rounded"
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/services"
                  className="nav-link mx-2 text-light rounded"
                >
                  Our Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/testimonials"
                  className="nav-link mx-2 text-light rounded"
                >
                  Testimonials
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/blog"
                  className="nav-link mx-2 text-light rounded"
                >
                  Blog
                </NavLink>
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
                <NavLink to="/contact" className="nav-link text-light rounded">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </NavSection>
    </>
  );
};
export default Navbar;
