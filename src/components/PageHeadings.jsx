import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import backgroundImage from "/images/pageHeadingImg.jpg";

const PageHeadings = ({ page, description }) => {
  const Heading = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)),
      url(${backgroundImage});
    background-size: cover;
    background-position: bottom;
    min-height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .breadcrumb-item + .breadcrumb-item::before {
      content: " / ";
      color: white;
    }
  `;
  return (
    <Heading className="text-light">
      <h1>{page}</h1>
      <p>{description}</p>
      <nav style={{ "--bs-breadcrumb-divider": "'/'" }}>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="breadcrumb-item active text-light">{page}</li>
        </ol>
      </nav>
    </Heading>
  );
};
export default PageHeadings;
