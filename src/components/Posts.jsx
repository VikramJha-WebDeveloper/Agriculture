import { React, useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors } from "../App";

// import images
import Image1 from "/images/postImg1.jpg";
import Image2 from "/images/postImg2.jpg";
import Image3 from "/images/postImg3.jpg";

const datas = [
  {
    img: Image1,
    title: "Lorem ipsum dolor sit amet consectetur.",
    name: "Julia Parker",
    position: "Politics",
    date: "December 12",
  },
  {
    img: Image2,
    title: "Lorem ipsum dolor sit amet.",
    name: "Mario Dauglas",
    position: "Sports",
    date: "July 17",
  },
  {
    img: Image3,
    title: "Lorem ipsum dolor sit amet consectetur.",
    name: "Lisa Hunter",
    position: "Economics",
    date: "September 05",
  },
  {
    img: Image3,
    title: "Lorem ipsum dolor sit amet consectetur.",
    name: "Lisa Hunter",
    position: "Economics",
    date: "September 05",
  },
  {
    img: Image1,
    title: "Lorem ipsum dolor sit amet consectetur.",
    name: "Julia Parker",
    position: "Politics",
    date: "December 12",
  },
  {
    img: Image2,
    title: "Lorem ipsum dolor sit amet.",
    name: "Mario Dauglas",
    position: "Sports",
    date: "July 17",
  },
];

const Posts = () => {
  const themeColors = useContext(colors);
  const PostsSection = styled.div`
    h2 {
      color: ${themeColors.secondColor};
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

    .card h5,
    .card a.btn {
      transition-duration: 0.3s;
    }
    .card:hover h5,
    .card:hover a.btn {
      color: ${themeColors.secondColor};
    }
    .card .badge {
      background-color: ${themeColors.firstColor};
      bottom: -13.6px;
    }
    .card .img-parent img {
      transition-duration: 0.5s;
    }
    .card:hover img {
      transform: scale(1.1);
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
          {datas.map((d) => (
            <div className="col col-12 col-xl-4 col-md-6 mt-3">
              <div className="card overflow-hidden">
                <div className="w-100 position-relative img-parent">
                  <img src={d.img} className="w-100" />
                  <div className="position-absolute end-0 badge fs-6 text-uppercase">
                    {d.date}
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{d.title}</h5>
                  <div>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#">
                          <i class="fa-solid fa-user"></i>
                          {d.name}
                        </a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">
                          <i class="fa-solid fa-folder"></i>
                          {d.position}
                        </a>
                      </li>
                    </ol>
                  </div>
                  <hr />
                  <NavLink to="/newPage" className="btn">
                    Read More
                    <i class="fa-solid fa-arrow-right ms-2"></i>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PostsSection>
  );
};
export default Posts;
