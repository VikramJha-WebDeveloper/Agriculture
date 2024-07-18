import { React, useContext, useEffect } from "react";
import { colors } from "../App";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import AOS from "aos";

// import react icons
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

// import images
import Farmer from "/images/farmer.jpg";
import Marketing from "/images/marketing.jpg";
import Content from "/images/content.jpg";
import Accountant from "/images/accountant.jpg";

const datas = [
  {
    img: Farmer,
    name: "Joshu Stefan",
    position: "Farmer",
    socialMedias: {
      facebook: <CiFacebook className="icon fs-2 my-1 p-1" />,
      xTwitter: <FaXTwitter className="icon fs-2 my-1 p-1" />,
      linkedIn: <CiLinkedin className="icon fs-2 my-1 p-1" />,
    },
    flip_aos: "flip-left",
  },
  {
    img: Marketing,
    name: "Sheena Anderson",
    position: "Marketing",
    socialMedias: {
      facebook: <CiFacebook className="icon fs-2 my-1 p-1" />,
      xTwitter: <FaXTwitter className="icon fs-2 my-1 p-1" />,
      linkedIn: <CiLinkedin className="icon fs-2 my-1 p-1" />,
    },
    flip_aos: "flip-left",
  },
  {
    img: Content,
    name: "Evan Smith",
    position: "Content",
    socialMedias: {
      facebook: <CiFacebook className="icon fs-2 my-1 p-1" />,
      xTwitter: <FaXTwitter className="icon fs-2 my-1 p-1" />,
      linkedIn: <CiLinkedin className="icon fs-2 my-1 p-1" />,
    },
    flip_aos: "flip-left",
  },
  {
    img: Accountant,
    name: "Kaylie Jones",
    position: "Accountant",
    socialMedias: {
      facebook: <CiFacebook className="icon fs-2 my-1 p-1" />,
      xTwitter: <FaXTwitter className="icon fs-2 my-1 p-1" />,
      linkedIn: <CiLinkedin className="icon fs-2 my-1 p-1" />,
    },
    flip_aos: "flip-left",
  },
];

const Team = () => {
  const themeColor = useContext(colors);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  const TeamSection = styled.div`
    a {
      color: ${themeColor.secondColor} !important;
      transition-duration: 0.3s;
      .icon {
        background-color: white;
        transition-duration: 0.3s;
      }

      &:hover {
        color: white !important;
      }
      &:hover .icon {
        background-color: ${themeColor.secondColor};
      }
    }
  `;
  return (
    <TeamSection>
      <div className="container py-5">
        <div className="row">
          <div className="col col-12">
            <h2 className="text-center">Team</h2>
            <h3 className="text-center">Necessitatibus eius consequatur</h3>
          </div>
        </div>
        <div className="row pt-3">
          {datas.map((d) => (
            <div
              className="col col-12 col-lg-3 col-md-6 mt-3"
              data-aos={`${d.flip_aos}`}
            >
              <div className="card overflow-hidden border-0">
                <div className=" rounded position-relative">
                  <img src={d.img} className="w-100 rounded" />
                  <div className="position-absolute bottom-0 d-flex flex-column p-1">
                    <NavLink to="/">{d.socialMedias.facebook}</NavLink>
                    <NavLink to="/">{d.socialMedias.xTwitter}</NavLink>
                    <NavLink to="/">{d.socialMedias.linkedIn}</NavLink>
                  </div>
                </div>
                <div className="card-body">
                  <h4 className="card-title text-center">{d.name}</h4>
                  <h5 className="card-text text-center fs-6 text-secondary">
                    {d.position}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </TeamSection>
  );
};

export default Team;
