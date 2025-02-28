// src/pages/Booking.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext.jsx";
import "./Booking.css";

export default function Booking() {
  const { service } = useParams(); // Get the service parameter (might be undefined)
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [formData, setFormData] = useState({
    contact: "",
    address: "",
    slot: "",
    specialRequests: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error on change
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.contact)
      newErrors.contact = "Contact information is required";
    if (!formData.address) newErrors.address = "Service address is required";
    if (!formData.slot) newErrors.slot = "Please select a time slot";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (!isAuthenticated) {
      navigate("/login");
    } else {
      // Mock booking logic (replace with API call)
      navigate("/payment");
    }
  };

  // Safely handle undefined service parameter
  const serviceName = service
    ? service.toLowerCase().replace(/-/g, " ")
    : "Unknown Service";
  const serviceData = {
    "ac-repair-by-expert": {
      name: "AC Repair by Expert",
      timeSlots: ["10:00 AM", "2:00 PM", "4:00 PM"],
    },
    "relaxing-massage": {
      name: "Relaxing Massage",
      timeSlots: ["11:00 AM", "3:00 PM", "5:00 PM"],
    },
    // Add more services as needed
  }[service?.toLowerCase().replace(/-/g, " ")] || {
    name: serviceName,
    timeSlots: [], // Default empty if service is unknown
  };

  return (
    <div className="booking-page">
      <h1>Book {serviceData.name}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="contact">Contact Information</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Enter your contact details"
            aria-label="Contact Information"
          />
          {errors.contact && <span className="error">{errors.contact}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="address">Service Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
            aria-label="Service Address"
          />
          {errors.address && <span className="error">{errors.address}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="slot">Select Time Slot</label>
          <select
            id="slot"
            name="slot"
            value={formData.slot}
            onChange={handleChange}
            aria-label="Time Slot"
          >
            <option value="">Select a time</option>
            {serviceData.timeSlots?.map((slot, index) => (
              <option key={index} value={slot}>
                {slot}
              </option>
            ))}
          </select>
          {errors.slot && <span className="error">{errors.slot}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="specialRequests">Special Requests</label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            placeholder="Any special requests?"
            aria-label="Special Requests"
          />
        </div>
        <button type="submit" className="book-button">
          Confirm Booking
        </button>
      </form>
    </div>
  );
}
