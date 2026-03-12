import React, { useContext } from 'react';
import './Fruits.css';
import { FaEye, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import Sidebar from '../Sidebar/SideBar';
import products from "../../Data/products";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const Fruits = () => {
  const { addToCart, addToWishlist } = useContext(StoreContext);
  const fruitProducts = products.filter(p => p.category === "fruits");

  return (
    <div className='fruits'>
      <h2>Fresh Fruits</h2>
      <div className="top-section">
        <div className="category">
          <img src="./strawberry.jpg" alt="Fruits"/>
          <span>Fruits</span>
        </div>
      </div>
      <div className="shop-section">
        <Sidebar/>
        <div className='product-grid'>
          {fruitProducts.map(product => (
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

export default Fruits;