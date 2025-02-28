// src/pages/Login.jsx
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm.jsx";
import { useAuth } from "../contexts/AuthContext.jsx";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLoginSuccess = () => {
    login();
    navigate("/");
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  const handleSignUp = () => {
    navigate("/register");
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <h1>Welcome Back</h1>
        <p className="tagline">Book your favorite services with ease!</p>
      </header>
      <LoginForm
        onLoginSuccess={handleLoginSuccess}
        onForgotPassword={handleForgotPassword}
        onSignUp={handleSignUp}
      />
      <div className="login-links"></div>
    </div>
  );
}
