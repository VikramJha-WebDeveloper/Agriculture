import React from "react";
import styled from "styled-components";

const Subscribe = ({ colors }) => {
  const SubscribeSection = styled.div`
    background-color: ${colors.fourthColor};
    button {
      background-color: ${colors.firstColor};
      color: white;
    }
    div.input-group {
      border: 2px solid ${colors.firstColor};
    }
    input:focus {
      box-shadow: none;
    }
  `;
  return (
    <SubscribeSection>
      <div className="container py-5">
        <div className="row">
          <div className="col col-12 col-lg-6 d-flex flex-column justify-content-center">
            <h2 className="text-uppercase">Subscribe To Out NewsLetter</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              assumenda veritatis quisquam itaque, alias modi!
            </p>
          </div>
          <div className="col col-12 col-lg-6 d-flex flex-column justify-content-center">
            <form>
              <div className="input-group rounded">
                <input type="text" className="form-control border-0"></input>
                <button type="submit" className="btn rounded-0">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </SubscribeSection>
  );
};

export default Subscribe;
