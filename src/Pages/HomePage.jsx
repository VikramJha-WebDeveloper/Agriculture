import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import About from "../components/About";
import ServiceCarousel from "../components/ServiceCarousel";
import Testimonials from "../components/Testimonials";
import Posts from "../components/Posts";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

const HomePage = ({ colors }) => {
  return (
    <>
      <Hero></Hero>
      <Services colors={colors}></Services>
      <WhyChooseUs colors={colors}></WhyChooseUs>
      <About colors={colors}></About>
      <ServiceCarousel colors={colors}></ServiceCarousel>
      <Testimonials colors={colors}></Testimonials>
      <Posts colors={colors}></Posts>
      <Subscribe colors={colors}></Subscribe>
      <Footer colors={colors}></Footer>
    </>
  );
};
export default HomePage;
