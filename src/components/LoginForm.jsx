import { useState } from "react";

export default function LoginForm({
  onLoginSuccess,
  onForgotPassword,
  onSignUp,
}) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate fields
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Mock login logic (replace with API call later)
    if (
      formData.email === "test@example.com" &&
      formData.password === "password123"
    ) {
      setLoginError("");
      onLoginSuccess(); // Trigger navigation to HomePage
    } else {
      setLoginError("Invalid email or password");
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          aria-label="Email address"
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          aria-label="Password"
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>

      {loginError && <div className="login-error">{loginError}</div>}

      <button type="submit" className="login-button">
        Login
      </button>

      <div className="login-links">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onForgotPassword();
          }}
          aria-label="Forgot Password"
        >
          Forgot Password?
        </a>
        <span> | </span>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onSignUp();
          }}
          aria-label="Sign Up"
        >
          Sign Up
        </a>
      </div>
    </form>
  );
}
