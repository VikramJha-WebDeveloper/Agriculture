import React from "react";
import PageHeadings from "../components/PageHeadings";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

const ServicePage = () => {
  const page = "Service";
  const description =
    "Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.";

  return (
    <>
      <PageHeadings page={page} description={description}></PageHeadings>
      <Services></Services>
      <WhyChooseUs></WhyChooseUs>
      <Testimonials></Testimonials>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </>
  );
};
export default ServicePage;
