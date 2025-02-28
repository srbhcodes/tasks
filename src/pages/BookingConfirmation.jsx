import { useNavigate } from "react-router-dom";

export default function BookingConfirmation() {
  const navigate = useNavigate();

  const booking = {
    id: "BOOK123",
    dateTime: "2025-03-01 10:00 AM",
    service: "AC Repair by Expert",
    payment: "$50 (Paid)",
  };

  return (
    <div className="confirmation-page">
      <h1>Booking Confirmed</h1>
      <p>Booking ID: {booking.id}</p>
      <p>Date & Time: {booking.dateTime}</p>
      <p>Service: {booking.service}</p>
      <p>Payment: {booking.payment}</p>
      <button onClick={() => navigate("/")} className="back-button">
        Back to Home
      </button>
    </div>
  );
}
