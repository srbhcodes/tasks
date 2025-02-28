import { useState } from "react";
import ServiceCategory from "../components/ServiceCategory.jsx";
import "./Services.css"; // Ensure CSS is imported

export default function Services() {
  const categories = [
    {
      name: "Home Services",
      subcategories: ["AC Repair", "Cleaning & Pest Control"],
    },
    { name: "Health & Wellness", subcategories: ["Massage", "Spa"] },
    {
      name: "Beauty & Grooming",
      subcategories: ["Salon for Men", "Salon for Kids"],
    },
  ];

  const [filters, setFilters] = useState({
    popularity: false,
    rating: false,
    newArrivals: false,
  });

  const handleFilterChange = (filter) => {
    setFilters({ ...filters, [filter]: !filters[filter] });
    // Add filtering logic here (e.g., sort categories or subcategories)
    // For simplicity, we'll log the filter change, but you can implement sorting logic
    console.log(`Filtering by ${filter}:`, filters);
  };

  return (
    <div className="services-page">
      <h1>Services</h1>
      <div className="filters">
        <button onClick={() => handleFilterChange("popularity")}>
          Filter by Popularity
        </button>
        <button onClick={() => handleFilterChange("rating")}>
          Filter by Rating
        </button>
        <button onClick={() => handleFilterChange("newArrivals")}>
          Filter by New Arrivals
        </button>
      </div>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <ServiceCategory key={index} category={category} />
        ))}
      </div>
    </div>
  );
}
