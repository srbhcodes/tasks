import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm.jsx";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    // Mocked login success logic (replace with actual API/auth logic)
    const isAuthenticated = true; // Replace with real authentication check
    if (isAuthenticated) {
      navigate("/"); // Redirect to HomePage after successful login
    }
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password"); // Redirect to a forgot password page
  };

  const handleSignUp = () => {
    navigate("/register"); // Redirect to registration page
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
    </div>
  );
}
