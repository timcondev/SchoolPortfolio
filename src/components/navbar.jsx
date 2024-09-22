/*
Navbar Component
Tim Conway
301495941
September 21st, 2024
 */

import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div>
      <div className="NavBarTitle">
        <h1>Tim&apos;s Portfolio</h1>
      </div>
      <div className="NavBar">
        <img src="logo.png" height={50} width={50} />
        <div>
          <nav>
            <Link to="/">Home</Link>
            {"  "}
            <Link to="/about">About</Link>
            {"  "}
            <Link to="/services">Services</Link>
            {"  "}
            <Link to="/project">Project</Link>
            {"  "}
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
