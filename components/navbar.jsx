import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div className="NavBar">
      <div>
        <h1>Tim&apos;s Portfolio</h1>
        {/* <img src="public/logo.png" height={50} width={50} /> */}
      </div>
      <div>
        <nav>
          <Link to="/">Home</Link> |<Link to="/about">About</Link> |
          <Link to="/education">Education</Link>|
          <Link to="/project">Project</Link>|<Link to="/contact">Contact</Link>
        </nav>
      </div>
      <br />
      {/* <hr /> */}
    </div>
  );
}
