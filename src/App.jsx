import { createContext } from "react";
import AboutPage from "./Pages/AboutPage";
import Navbar from "./components/Navbar";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import ServicePage from "./Pages/ServicesPage";
import TestimonialsPage from "./Pages/TestimonialsPage";
import BlogPage from "./Pages/BlogPage";
import ContactPage from "./Pages/ContactPage";
import NewPage from "./Pages/NewPage";
import styled from "styled-components";

const colors = createContext();

function App() {
  const themeColors = {
    firstColor: "#1A5319",
    firstColorHover: "#2e912c",
    secondColor: "#508D4E",
    thirdColor: "#80AF81",
    fourthColor: "#D6EFD8",
    fifthColor: "#222222",
  };
  const Pages = styled.div`
    margin-top: 56px;
  `;
  return (
    <>
      <colors.Provider value={themeColors}>
        <Navbar></Navbar>

        <Pages>
          <Routes>
            <Route
              path="/"
              element={<HomePage colors={themeColors}></HomePage>}
            ></Route>
            <Route path="/about" element={<AboutPage></AboutPage>}></Route>
            <Route
              path="/services"
              element={<ServicePage></ServicePage>}
            ></Route>
            <Route
              path="/testimonials"
              element={<TestimonialsPage></TestimonialsPage>}
            ></Route>
            <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
            <Route
              path="/contact"
              element={<ContactPage></ContactPage>}
            ></Route>
            <Route path="/newPage" element={<NewPage></NewPage>}></Route>
          </Routes>
        </Pages>
      </colors.Provider>
    </>
  );
}

export default App;
export { colors };
