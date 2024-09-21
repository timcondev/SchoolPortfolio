/*
Main Pages Router
Tim Conway
301495941
September 21st, 2024
 */

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/about";
import Contact from "./components/contact";
import Services from "./components/services";
import Project from "./components/project";
import Layout from "./Layout";

const MainRouter = () => {
  return (
    <div>
      <BrowserRouter>
        {/* Include Layout */}
        <Layout />
        {/* All Page Routes */}
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
          <Route exact path="/project" element={<Project />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainRouter;
