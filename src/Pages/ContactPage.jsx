import { React, useContext } from "react";
import styled from "styled-components";
import { colors } from "../App";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaMobileRetro } from "react-icons/fa6";

import PageHeadings from "../components/PageHeadings";

const ContactPage = () => {
  const themeColors = useContext(colors);

  const ContactSection = styled.div`
    .card {
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .btn[type="submit"] {
      background-color: ${themeColors.firstColor};
      color: white;
    }
  `;
  const page = "Contact";
  const description =
    "Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.";

  return (
    <ContactSection>
      <PageHeadings page={page} description={description}></PageHeadings>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3493.5537420098144!2d77.07331117496607!3d28.881888772714458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390da96923f6a47b%3A0x5b051e8fb5fdccfe!2sSafiabad%20Rd!5e0!3m2!1sen!2sin!4v1721191367972!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container py-5">
        <div className="row">
          <div className="col col-12 col-lg-4">
            <div className="card rounded-">
              <div className="card-body">
                <h4 className="card-title">Get in touch</h4>
                <p className="cad-text">
                  Et id eius voluptates atque nihil voluptatem enim in tempore
                  minima sit ad mollitia commodi minus.
                </p>
                <div className="d-flex align-items-center">
                  <div>
                    <FaMapMarkerAlt className="fs-4" />
                  </div>
                  <div className="ms-3">
                    <h6>Location</h6>
                    <p>A108 Adam Street, New York, NY 535022</p>
                  </div>
                </div>
                <hr />
                <div className="d-flex align-items-center">
                  <div>
                    <IoIosMail className="fs-4" />
                  </div>
                  <div className="ms-3">
                    <h6>Email:</h6>
                    <p>info@example.com</p>
                  </div>
                </div>
                <hr />
                <div className="d-flex align-items-center">
                  <div>
                    <FaMobileRetro className="fs-4" />
                  </div>
                  <div className="ms-3">
                    <h6>Call: </h6>
                    <p>+1 123456789</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-12 col-lg-8 mt-5 mt-lg-0">
            <form className="h-100">
              <div className="row gy-3">
                <div className="col col-12 col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="col col-12 col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div className="col col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div className="col col-12">
                  <textarea
                    className="form-control h-100"
                    placeholder="Message"
                    rows="5"
                  ></textarea>
                </div>
                <div className="col col-12 text-center">
                  <button type="submit" className="btn">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ContactSection>
  );
};
export default ContactPage;
