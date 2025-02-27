import { useNavigate } from "react-router-dom";
import ServiceBar from "../components/ServiceBar.jsx";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  const keyServices = [
    { name: "AC Service and Repair" },
    { name: "Bathroom & Kitchen Cleaning" },
    { name: "Salon for Men & Women" },
    { name: "Massage Services for Men" },
  ];

  const popularServices = [
    { name: "Spa" },
    { name: "Cleaning" },
    { name: "Native Water Purifier" },
  ];

  const handleBookNow = () => {
    // Check if user is authenticated (mocked for now)
    const isAuthenticated = false; // Replace with actual authentication logic (e.g., check a token in state or context)
    if (!isAuthenticated) {
      navigate("/login"); // Redirect to login if not authenticated
    } else {
      // If authenticated, redirect to a booking page or service details (to be implemented later)
      navigate("/book"); // Placeholder route for booking or service details
    }
  };

  return (
    <div className="home-page">
      {/* Banner */}
      <section className="banner">
        <h1>Find and Book Services with Ease!</h1>
        <p>Your one-stop solution for home, wellness, and beauty services.</p>
        <button className="book-now" onClick={handleBookNow}>
          Book Now
        </button>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="stat-item">
          <h3>10K+</h3>
          <p>Services Booked</p>
        </div>
        <div className="stat-item">
          <h3>4.8/5</h3>
          <p>Average Rating</p>
        </div>
        <div className="stat-item">
          <h3>95%</h3>
          <p>Customer Satisfaction</p>
        </div>
      </section>

      {/* Key Services */}
      <section className="key-services">
        <h2>Explore Our Key Services</h2>
        {keyServices.map((service, index) => (
          <ServiceBar
            key={index}
            name={service.name}
            onBookNow={handleBookNow}
          />
        ))}
      </section>

      {/* Popular Services */}
      <section className="popular-services">
        <h2>Popular Services</h2>
        {popularServices.map((service, index) => (
          <ServiceBar
            key={index}
            name={service.name}
            onBookNow={handleBookNow}
          />
        ))}
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>
              A platform to book services easily. <a href="/terms">Terms</a> |{" "}
              <a href="/privacy">Privacy</a>
            </p>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <p>
              <a href="#">Facebook</a> | <a href="#">Twitter</a> |{" "}
              <a href="#">Instagram</a>
            </p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <p>
              <a href="/services">Services</a> | <a href="/contact">Contact</a>{" "}
              | <a href="/book">Book Now</a>
            </p>
          </div>
        </div>
        <p className="copyright">
          © 2025 Service Booking App. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
