import React from "react";
import styled from "styled-components";

// import images
import Image1 from "/images/postImg1.jpg";
import Image2 from "/images/postImg2.jpg";
import Image3 from "/images/postImg3.jpg";

const Posts = ({ colors }) => {
  const PostsSection = styled.div`
    h2 {
      color: ${colors.secondColor};
    }
    i {
      margin-right: 12.5px;
    }
    li {
      margin: 0px 5px;
      a {
        color: gray;
        text-decoration: none;
      }
    }
    .card {
      cursor: pointer;
    }
    .card h5,
    .card a.btn {
      transition-duration: 0.3s;
    }
    .card:hover h5,
    .card:hover a.btn {
      color: ${colors.secondColor};
    }
  `;
  return (
    <PostsSection>
      <div className="container py-5">
        <div className="row mt-5">
          <div className="col col-12">
            <h2 className="text-center fw-normal">Recents Posts</h2>
            <h3 className="text-center">Necessitatibus eius consequatur</h3>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col col-12 col-xl-4 col-md-6 mt-3">
            <div className="card overflow-hidden">
              <img src={Image1} />
              <div className="card-body">
                <h5 className="card-title">
                  Lorem ipsum dolor sit amet consectetur.
                </h5>
                <div>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">
                        <i class="fa-solid fa-user"></i>
                        Julia Parker
                      </a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">
                        <i class="fa-solid fa-folder"></i>
                        Politics
                      </a>
                    </li>
                  </ol>
                </div>
                <hr />
                <a href="#" className="btn">
                  Read More
                  <i class="fa-solid fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col col-12 col-xl-4 col-md-6 mt-3">
            <div className="card overflow-hidden">
              <img src={Image2} />
              <div className="card-body">
                <h5 className="card-title">Lorem ipsum dolor sit amet.</h5>
                <div>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">
                        <i class="fa-solid fa-user"></i>
                        Mario Dauglas
                      </a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">
                        <i class="fa-solid fa-folder"></i>
                        Sports
                      </a>
                    </li>
                  </ol>
                </div>
                <hr />
                <a href="#" className="btn">
                  Read More
                  <i class="fa-solid fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col col-12 col-xl-4 col-md-6 mt-3">
            <div className="card overflow-hidden">
              <img src={Image3} />
              <div className="card-body">
                <h5 className="card-title">
                  Lorem ipsum dolor sit amet consectetur.
                </h5>
                <div>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">
                        <i class="fa-solid fa-user"></i>
                        Lisa Hunter
                      </a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">
                        <i class="fa-solid fa-folder"></i>
                        Economics
                      </a>
                    </li>
                  </ol>
                </div>
                <hr />
                <a href="#" className="btn">
                  Read More
                  <i class="fa-solid fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PostsSection>
  );
};
export default Posts;
