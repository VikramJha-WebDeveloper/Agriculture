import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import About from "./components/About";
import ServiceCarousel from "./components/ServiceCarousel";
import Testimonials from "./components/Testimonials";
import Posts from "./components/Posts";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

const themeColors = {
  firstColor: "#1A5319",
  firstColorHover: "#2e912c",
  secondColor: "#508D4E",
  thirdColor: "#80AF81",
  fourthColor: "#D6EFD8",
  fifthColor: "#222222",
};

function App() {
  return (
    <>
      <Navbar colors={themeColors}></Navbar>
      <Hero></Hero>
      <Services colors={themeColors}></Services>
      <WhyChooseUs colors={themeColors}></WhyChooseUs>
      <About colors={themeColors}></About>
      <ServiceCarousel colors={themeColors}></ServiceCarousel>
      <Testimonials colors={themeColors}></Testimonials>
      <Posts colors={themeColors}></Posts>
      <Subscribe colors={themeColors}></Subscribe>
      <Footer colors={themeColors}></Footer>
    </>
  );
}

export default App;
