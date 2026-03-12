import React, { useState } from "react";
import "./Sidebar.css";

const categoriesData = [
  { name: "Baking", value: "baking", sub: [] },
  { name: "Cheese", value: "cheese", sub: [] },
  { name: "Drinks", value: "drinks", sub: [] },
  { name: "Eggs", value: "eggs", sub: [] },
  { name: "Fresh Fruit", value: "fruits", sub: [] },
  {
    name: "Meat",
    value: "meat",
    sub: ["Chicken & Poultry", "Meat Gift Baskets", "Red Meat & Steaks"],
  },
  { name: "Milk", value: "milk", sub: [] },
  { name: "Seafood", value: "fish", sub: [] },
  { name: "Vegetables", value: "veges", sub: [] },
];

const SideBar = ({
  selectedCategory,
  onCategoryChange,
  onCategorySelect,
  onPriceChange,
}) => {
  const [expanded, setExpanded] = useState(null);
  const [price, setPrice] = useState([70, 350]);

  const toggleCategory = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const handleMainCategory = (catValue, index) => {
    setExpanded(expanded === index ? null : index);

    if (onCategoryChange) {
      onCategoryChange(catValue);
    }
  };

  const handlePriceChange = (e, index) => {
    const newPrice = [...price];
    newPrice[index] = Number(e.target.value);

    if (index === 0 && newPrice[0] > newPrice[1]) {
      newPrice[0] = newPrice[1];
    }

    if (index === 1 && newPrice[1] < newPrice[0]) {
      newPrice[1] = newPrice[0];
    }

    setPrice(newPrice);

    if (onPriceChange) {
      onPriceChange(newPrice);
    }
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-card">
        <h3 className="sidebar-title">Shop Filters</h3>

        <div className="filter-block">
          <h4 className="filter-heading">Categories</h4>

          <ul className="category-list">
            {categoriesData.map((cat, idx) => (
              <li key={idx} className="category-list-item">
                <div
                  className={`category-item ${
                    selectedCategory === cat.value ? "active-category" : ""
                  }`}
                >
                  <button
                    className="category-name"
                    onClick={() => handleMainCategory(cat.value, idx)}
                  >
                    {cat.name}
                  </button>

                  {cat.sub.length > 0 && (
                    <button
                      className="expand-btn"
                      onClick={() => toggleCategory(idx)}
                    >
                      {expanded === idx ? "−" : "+"}
                    </button>
                  )}
                </div>

                {expanded === idx && cat.sub.length > 0 && (
                  <ul className="subcategory-list">
                    {cat.sub.map((sub, sidx) => (
                      <li key={sidx}>
                        <button
                          className="subcategory-btn"
                          onClick={() =>
                            onCategorySelect && onCategorySelect(sub)
                          }
                        >
                          {sub}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="filter-block">
          <h4 className="filter-heading">Price Range</h4>

          <div className="price-box">
            <div className="price-values">
              <span>₹{price[0]}</span>
              <span>₹{price[1]}</span>
            </div>

            <input
              type="range"
              min="0"
              max="1000"
              value={price[0]}
              onChange={(e) => handlePriceChange(e, 0)}
            />

            <input
              type="range"
              min="0"
              max="1000"
              value={price[1]}
              onChange={(e) => handlePriceChange(e, 1)}
            />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;