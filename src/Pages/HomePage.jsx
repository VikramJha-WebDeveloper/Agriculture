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
      <Services></Services>
      <WhyChooseUs></WhyChooseUs>
      <About></About>
      <ServiceCarousel></ServiceCarousel>
      <Testimonials></Testimonials>
      <Posts></Posts>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </>
  );
};
export default HomePage;
