import { Link } from "react-router-dom";

export default function ServiceCategory({ category }) {
  return (
    <div className="category-card">
      <h2>{category.name}</h2>
      <ul>
        {category.subcategories.map((subcategory, index) => (
          <li key={index}>
            <Link
              to={`/services/${subcategory.toLowerCase().replace(/ & /, "-")}`}
            >
              {subcategory}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
