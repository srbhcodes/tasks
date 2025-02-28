import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/book">Book Now</Link>
        </li>
      </ul>
    </nav>
  );
}
