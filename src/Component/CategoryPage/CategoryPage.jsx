import React, { useContext, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "../SideBar/SideBar";
import { StoreContext } from "../../Context/StoreContext";
import { FaEye, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import "./CategoryPage.css";

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const { addToCart, addToWishlist } = useContext(StoreContext);

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/products/")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    let filtered = products.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );

    filtered = filtered.filter(
      (p) => Number(p.price) >= priceRange[0] && Number(p.price) <= priceRange[1]
    );

    setFilteredProducts(filtered);
  }, [products, category, priceRange]);

  const handleCategorySelect = (subCategory) => {
    const filtered = products.filter(
      (p) =>
        p.category.toLowerCase() === category.toLowerCase() &&
        p.name.toLowerCase().includes(subCategory.toLowerCase()) &&
        Number(p.price) >= priceRange[0] &&
        Number(p.price) <= priceRange[1]
    );

    setFilteredProducts(filtered);
  };

  const handlePriceChange = (range) => {
    setPriceRange(range);
  };

  return (
    <div className="category-page">
      <h2 className="category-title">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </h2>

      <div className="shop-section">
        <Sidebar
          selectedCategory={category}
          onCategoryChange={(newCategory) => navigate(`/category/${newCategory}`)}
          onCategorySelect={handleCategorySelect}
          onPriceChange={handlePriceChange}
        />

        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div className="product-card" key={product.id}>
                <div className="image-box">
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image1}
                      className="img1"
                      alt={product.name}
                    />
                    <img
                      src={product.image2}
                      className="img2"
                      alt={product.name}
                    />
                  </Link>

                  <div className="icon-overlay">
                    <Link to={`/product/${product.id}`}>
                      <FaEye />
                    </Link>
                    <FaRegHeart onClick={() => addToWishlist(product)} />
                  </div>
                </div>

                <h4>{product.name}</h4>
                <p className="desc">{product.description}</p>
                <p className="price">₹{product.price}</p>

                <div className="cart-btn" onClick={() => addToCart(product)}>
                  <FaShoppingCart />
                </div>
              </div>
            ))
          ) : (
            <p className="no-products">No products found in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;