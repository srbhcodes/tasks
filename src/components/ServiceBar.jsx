export default function ServiceBar({ name, onBookNow }) {
  return (
    <div className="service-bar">
      <span>{name}</span>
      <button className="book-now" onClick={onBookNow}>
        Book Now
      </button>
    </div>
  );
}
