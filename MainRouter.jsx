import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/about";
import Contact from "./components/contact";
import Education from "./components/education";
import Project from "./components/project";
import Layout from "./Layout";

const MainRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/edcuation" element={<Education />}></Route>
          <Route exact path="/project" element={<Project />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainRouter;
