import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Registration from "./pages/Registration.jsx";
import Navbar from "./components/Navbar.jsx";
import AuthenticatedNavbar from "./components/AuthenticatedNavbar.jsx";
import ServiceDetails from "./pages/ServiceDetails.jsx";
import Subcategory from "./pages/Subcategory.jsx";
import Booking from "./pages/Booking.jsx";
import Payment from "./pages/Payment.jsx";
import BookingConfirmation from "./pages/BookingConfirmation.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx"; // Add this import
import { useAuth } from "./contexts/AuthContext.jsx";

export default function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <div className="app">
        {isAuthenticated ? <AuthenticatedNavbar /> : <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/book" element={<Booking />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/profile"
            element={<div>Profile Page (to be implemented)</div>}
          />
          <Route
            path="/notifications"
            element={<div>Notifications Page (to be implemented)</div>}
          />
          <Route path="/services/:service" element={<ServiceDetails />} />
          <Route path="/services/:subcategory" element={<Subcategory />} />
          <Route path="/book/:service" element={<Booking />} />
          <Route path="/payment" element={<Payment />} />
          <Route
            path="/booking-confirmation"
            element={<BookingConfirmation />}
          />
          <Route path="/forgot-password" element={<ForgotPassword />} />{" "}
          {/* This line uses ForgotPassword */}
        </Routes>
      </div>
    </Router>
  );
}
