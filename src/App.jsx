import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import About from "./components/About";
import ServiceCarousel from "./components/ServiceCarousel";

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
    </>
  );
}

export default App;
