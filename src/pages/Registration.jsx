// src/pages/Registration.jsx
import { useNavigate } from "react-router-dom";
import RegistrationForm from "../components/RegistrationForm.jsx";
import "./Registration.css"; // Ensure this import is present and correct

export default function Registration() {
  const navigate = useNavigate();

  const handleRegistrationSuccess = () => {
    navigate("/login"); // Redirect to login after successful registration
  };

  return (
    <div className="registration-container">
      <header className="registration-header">
        <h1>Join Us</h1>
        <p className="tagline">Sign up to book your favorite services!</p>
      </header>
      <RegistrationForm onRegistrationSuccess={handleRegistrationSuccess} />
    </div>
  );
}
