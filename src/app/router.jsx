/*
Main Pages Router
Tim Conway
301495941
September 21st, 2024
 */

import { Routes, Route } from "react-router-dom";
import Home from "../components/home";
import About from "../components/about";
import Contact from "../components/contact";
import Services from "../components/services";
import Project from "../components/project";

const Router = () => {
  return (
    <div>
      {/* All Page Routes */}
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/services" element={<Services />}></Route>
        <Route exact path="/project" element={<Project />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
};

export default Router;
