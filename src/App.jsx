import AboutPage from "./Pages/AboutPage";
import Navbar from "./components/Navbar";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import ServicePage from "./Pages/ServicesPage";
import TestimonialsPage from "./Pages/TestimonialsPage";
import BlogPage from "./Pages/BlogPage";
import ContactPage from "./Pages/ContactPage";
import NewPage from "./Pages/NewPage";
import NewPage2 from "./Pages/NewPage2";
import NewPage3 from "./Pages/NewPage3";
import styled from "styled-components";

const themeColors = {
  firstColor: "#1A5319",
  firstColorHover: "#2e912c",
  secondColor: "#508D4E",
  thirdColor: "#80AF81",
  fourthColor: "#D6EFD8",
  fifthColor: "#222222",
};

function App() {
  const Pages = styled.div`
    margin-top: 56px;
  `;
  return (
    <>
      <Navbar colors={themeColors}></Navbar>
      <Pages>
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
          <Route path="/newPage" element={<NewPage></NewPage>}></Route>
          <Route path="/newPage2" element={<NewPage2></NewPage2>}></Route>
          <Route path="/newPage3" element={<NewPage3></NewPage3>}></Route>
        </Routes>
      </Pages>
    </>
  );
}

export default App;
