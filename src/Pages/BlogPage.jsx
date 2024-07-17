import { React, useContext } from "react";
import styled from "styled-components";
import PageHeadings from "../components/PageHeadings";
import Posts from "../components/Posts";
import { colors } from "../App";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

const BlogPage = () => {
  const themeColors = useContext(colors);
  const BlogSection = styled.div`
    .pagination .active {
      background-color: ${themeColors.firstColor};
      border-color: ${themeColors.firstColor};
    }
    a {
      color: ${themeColors.firstColor};
    }
  `;
  const page = "Blog";
  const description =
    "Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.";

  return (
    <BlogSection>
      <PageHeadings page={page} description={description}></PageHeadings>
      <Posts></Posts>
      <ul className="pagination d-flex justify-content-center mb-5">
        <li className="page-item">
          <a href="#" className="page-link">
            &laquo;
          </a>
        </li>
        <li className="page-item">
          <a href="#" className="page-link">
            1
          </a>
        </li>
        <li className="page-item">
          <a href="#" className="page-link active">
            2
          </a>
        </li>
        <li className="page-item">
          <a href="#" className="page-link">
            3
          </a>
        </li>
        <li className="page-item">
          <a href="#" className="page-link">
            4
          </a>
        </li>
        <li className="page-item">
          <a href="#" className="page-link">
            &raquo;
          </a>
        </li>
      </ul>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </BlogSection>
  );
};
export default BlogPage;
