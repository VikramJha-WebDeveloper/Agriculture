import React from "react";
import PageHeadings from "../components/PageHeadings";
import Testimonials from "../components/Testimonials";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

const TestimonialsPage = () => {
  const page = "Testimonials";
  const description =
    "Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.";

  return (
    <>
      <PageHeadings page={page} description={description}></PageHeadings>
      <Testimonials></Testimonials>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </>
  );
};
export default TestimonialsPage;
