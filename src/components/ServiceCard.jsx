export default function ServiceCard({ service, onBookNow }) {
  return (
    <div className="service-card">
      <h3>{service.name}</h3>
      <p>Provider: {service.provider}</p>
      <p>Rating: {service.rating} / 5</p>
      <p>Price: {service.price}</p>
      <button className="book-now" onClick={onBookNow}>
        Book Now
      </button>
    </div>
  );
}
