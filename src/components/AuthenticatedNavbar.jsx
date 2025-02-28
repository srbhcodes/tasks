import { Link, useNavigate } from "react-router-dom";

export default function AuthenticatedNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Mock logout logic (replace with real auth logic)
    navigate("/login"); // Redirect to login on logout
  };

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
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/notifications">Notifications</Link>
        </li>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
}
