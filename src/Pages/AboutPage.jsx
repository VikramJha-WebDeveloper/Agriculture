import React from "react";
import PageHeadings from "../components/PageHeadings";
import About from "../components/About";
import Team from "../components/Team";
import Services from "../components/Services";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

const AboutPage = () => {
  const page = "About";
  const description =
    "Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.";

  return (
    <>
      <PageHeadings page={page} description={description}></PageHeadings>;
      <About></About>
      <Team></Team>
      <Services></Services>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </>
  );
};
export default AboutPage;
