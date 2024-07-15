import AboutPage from "./Pages/AboutPage";
import Navbar from "./components/Navbar";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import ServicePage from "./Pages/ServicesPage";
import TestimonialsPage from "./Pages/TestimonialsPage";
import BlogPage from "./Pages/BlogPage";
import ContactPage from "./Pages/ContactPage";

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
      <Routes>
        <Route
          path="/"
          element={<HomePage colors={themeColors}></HomePage>}
        ></Route>
        <Route
          path="/about"
          element={<AboutPage colors={themeColors}></AboutPage>}
        ></Route>
        <Route path="/services" element={<ServicePage></ServicePage>}></Route>
        <Route
          path="/testimonials"
          element={<TestimonialsPage></TestimonialsPage>}
        ></Route>
        <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
        <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
      </Routes>
    </>
  );
}

export default App;
