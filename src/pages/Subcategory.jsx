import { useParams, useNavigate } from "react-router-dom";
import ServiceCard from "../components/ServiceCard.jsx";

export default function Subcategory() {
  const { subcategory } = useParams();
  const navigate = useNavigate();

  const services =
    {
      "ac-repair": [
        {
          name: "AC Repair by Expert",
          provider: "CoolTech",
          rating: 4.7,
          price: "$50",
        },
        {
          name: "AC Maintenance",
          provider: "ChillZone",
          rating: 4.5,
          price: "$30",
        },
      ],
      massage: [
        {
          name: "Relaxing Massage",
          provider: "Spa Bliss",
          rating: 4.9,
          price: "$80",
        },
        {
          name: "Deep Tissue Massage",
          provider: "Wellness Hub",
          rating: 4.6,
          price: "$60",
        },
      ],
      // Add more subcategories as needed
    }[subcategory.toLowerCase().replace(/-/g, " ")] || [];

  const [filters, setFilters] = useState({
    rating: false,
    price: false,
    popularity: false,
  });

  const handleFilterChange = (filter) => {
    setFilters({ ...filters, [filter]: !filters[filter] });
    // Add filtering logic here (e.g., sort services)
  };

  const handleBookNow = (service) => {
    const isAuthenticated = false; // Replace with actual auth check
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      navigate(`/book/${service.name.toLowerCase().replace(/ /g, "-")}`);
    }
  };

  return (
    <div className="subcategory-page">
      <h1>
        {subcategory.replace(/-/g, " ").replace(/([a-z])([A-Z])/g, "$1 $2")}
      </h1>
      <div className="filters">
        <button onClick={() => handleFilterChange("rating")}>
          Filter by Rating
        </button>
        <button onClick={() => handleFilterChange("price")}>
          Filter by Price
        </button>
        <button onClick={() => handleFilterChange("popularity")}>
          Filter by Popularity
        </button>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            service={service}
            onBookNow={() => handleBookNow(service)}
          />
        ))}
      </div>
    </div>
  );
}
