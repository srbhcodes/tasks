import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Payment() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePayment = (e) => {
    e.preventDefault();
    // Mock payment logic
    navigate("/booking-confirmation");
  };

  return (
    <div className="payment-page">
      <h1>Payment</h1>
      <form onSubmit={handlePayment}>
        <div className="form-group">
          <label>Payment Method</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            aria-label="Payment Method"
          >
            <option value="">Select a method</option>
            <option value="credit-card">Credit/Debit Card</option>
            <option value="upi">UPI</option>
            <option value="wallet">Wallet</option>
          </select>
        </div>
        {paymentMethod === "credit-card" && (
          <div className="form-group">
            <label htmlFor="card-number">Card Number</label>
            <input
              type="text"
              id="card-number"
              placeholder="Enter card number"
              aria-label="Card Number"
            />
          </div>
        )}
        <button type="submit" className="pay-button">
          Pay Now
        </button>
      </form>
    </div>
  );
}
