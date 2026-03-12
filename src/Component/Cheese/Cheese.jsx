import React, { useContext } from 'react';
import './Cheese.css';
import { FaEye, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import Sidebar from '../Sidebar/SideBar';
import products from "../../Data/products";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const Cheese = () => {
  const { addToCart, addToWishlist } = useContext(StoreContext);
  const cheeseProducts = products.filter(p => p.category === "cheese");

  return (
    <div className='cheese'>
      <h2>Cheese</h2>
      <div className="top-section">
        <div className="category">
          <img src="./goat-cheese.jpg" alt="Cheese"/>
          <span>Cheese</span>
        </div>
      </div>
      <div className="shop-section">
        <Sidebar/>
        <div className='product-grid'>
          {cheeseProducts.map(product => (
            <div className="product-card" key={product.id}>
              <div className="image-box">
                <Link to={`/product/${product.id}`}>
                  <img src={product.image1} className="img1" alt={product.name}/>
                  <img src={product.image2} className="img2" alt={product.name}/>
                </Link>
                <div className="icon-overlay">
                  <FaEye/>
                  <FaRegHeart onClick={() => addToWishlist(product)}/>
                </div>
              </div>
              <h4>{product.name}</h4>
              <p className="desc">{product.description}</p>
              <p className="price">₹{product.price}</p>
              <div className="cart-btn" onClick={() => addToCart(product)}>
                <FaShoppingCart/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cheese;