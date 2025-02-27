export default function ServiceCard({ name, img }) {
  return (
    <div className="service-card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <button className="book-now">Book Now</button>
    </div>
  );
}
