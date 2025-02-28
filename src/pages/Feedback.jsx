import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Feedback() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock feedback submission
    alert(
      `Thank you for your feedback! Rating: ${rating}, Comment: ${comment}`
    );
    navigate("/");
  };

  return (
    <div className="feedback-page">
      <h1>Rate Your Service</h1>
      <form onSubmit={handleSubmit}>
        <div className="rating">
          <label>Rating (1-5)</label>
          <select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            aria-label="Rating"
          >
            <option value="0">Select a rating</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </div>
        <div className="comment">
          <label htmlFor="comment">Comments</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your thoughts..."
            aria-label="Comments"
          />
        </div>
        <button type="submit" className="submit-feedback">
          Submit Feedback
        </button>
      </form>
    </div>
  );
}
