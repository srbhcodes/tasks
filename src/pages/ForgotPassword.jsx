// src/pages/ForgotPassword.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      setSuccess("");
      return;
    }

    // Mock password reset request (replace with API call)
    setError("");
    setSuccess(
      "Password reset instructions sent to your email. Check your inbox!"
    );
    setTimeout(() => navigate("/login"), 3000); // Redirect to login after 3 seconds
  };

  return (
    <div className="forgot-password-container">
      <header className="forgot-password-header">
        <h1>Forgot Password</h1>
        <p className="tagline">Enter your email to reset your password.</p>
      </header>
      <form onSubmit={handleSubmit} className="forgot-password-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            aria-label="Email"
          />
          {error && <span className="error">{error}</span>}
          {success && <span className="success">{success}</span>}
        </div>
        <button type="submit" className="reset-button">
          Reset Password
        </button>
      </form>
    </div>
  );
}
