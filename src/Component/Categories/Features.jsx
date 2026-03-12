import React from "react";
import { useNavigate } from "react-router-dom";
import "./Features.css";

const Features = () => {
  const navigate = useNavigate();

  const featureData = [
    {
      id: 1,
      image: "./food1.jpg",
      title: "Fresh Sea Food Everyday",
      subtitle: "Catch of the day, cleaned and packed with care.",
      buttonText: "Shop Seafood",
      route: "/category/fish",
      className: "food-card food-1",
    },
    {
      id: 2,
      image: "./food2.jpg",
      title: "Sweet Organic Drink",
      subtitle: "Refreshing, healthy drinks made for every moment.",
      buttonText: "Shop Drinks",
      route: "/category/drinks",
      className: "food-card food-2",
    },
    {
      id: 3,
      image: "./food3.jpg",
      title: "Perfect for Steak Lovers",
      subtitle: "Premium cuts and quality meat for rich flavor.",
      buttonText: "Shop Meat",
      route: "/category/meat",
      className: "food-card food-3",
    },
  ];

  return (
    <section className="features-section">
      <div className="features-header">
        <span className="features-tag">Featured Categories</span>
        <h2>Fresh Picks For Every Taste</h2>
        <p>
          Explore handpicked categories with premium quality groceries,
          drinks, seafood, and meat.
        </p>
      </div>

      <div className="features-container">
        {featureData.map((item) => (
          <div className={item.className} key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="feature-overlay"></div>

            <div className="feature-content">
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
              <button onClick={() => navigate(item.route)}>
                {item.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;