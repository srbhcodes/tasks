import { useParams, useNavigate } from "react-router-dom";

export default function ServiceDetails() {
  const { service } = useParams();
  const navigate = useNavigate();

  const serviceData =
    {
      "ac-repair-by-expert": {
        name: "AC Repair by Expert",
        description:
          "Professional AC repair with fast service and expert technicians.",
        provider: "CoolTech",
        location: "123 Main St, City",
        rating: 4.7,
        price: "$50",
        timeSlots: ["10:00 AM", "2:00 PM", "4:00 PM"],
      },
      "relaxing-massage": {
        name: "Relaxing Massage",
        description: "A soothing massage for relaxation and stress relief.",
        provider: "Spa Bliss",
        location: "456 Spa Rd, City",
        rating: 4.9,
        price: "$80",
        timeSlots: ["11:00 AM", "3:00 PM", "5:00 PM"],
      },
      // Add more services as needed
    }[service.toLowerCase().replace(/-/g, " ")] || {};

  const handleBookNow = () => {
    const isAuthenticated = false; // Replace with actual auth check
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      navigate(`/book/${service}`);
    }
  };

  return (
    <div className="service-details">
      <h1>{serviceData.name}</h1>
      <p>{serviceData.description}</p>
      <p>Provider: {serviceData.provider}</p>
      <p>Location: {serviceData.location}</p>
      <p>Rating: {serviceData.rating} / 5</p>
      <p>Price: {serviceData.price}</p>
      <h3>Available Time Slots</h3>
      <ul>
        {serviceData.timeSlots.map((slot, index) => (
          <li key={index}>{slot}</li>
        ))}
      </ul>
      <button className="book-now" onClick={handleBookNow}>
        Book Now
      </button>
    </div>
  );
}
