import React, { useEffect, useState, useContext } from "react";
import { fetchProducts } from "../../API/products";
import { StoreContext } from "../../Context/StoreContext";
import { FaEye, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const { addToCart, addToWishlist } = useContext(StoreContext);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };

    loadProducts();
  }, []);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <div className="image-box">
            <Link to={`/product/${product.id}`}>
              <img src={product.image1} className="img1" alt={product.name} />
              <img src={product.image2} className="img2" alt={product.name} />
            </Link>

            <div className="icon-overlay">
              <Link to={`/product/${product.id}`}>
                <FaEye />
              </Link>

              <button onClick={() => addToWishlist(product)}>
                <FaRegHeart />
              </button>
            </div>
          </div>

          <h4>{product.name}</h4>
          <p className="desc">{product.description}</p>

          <div className="card-bottom">
            <p className="price">₹{product.price}</p>

            <button
              className="cart-btn"
              onClick={() => addToCart(product)}
            >
              <FaShoppingCart />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;