import React, { useContext } from 'react';
import './Eggs.css';
import { FaEye, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import Sidebar from '../Sidebar/SideBar';
import products from "../../Data/products";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const Eggs = () => {
  const { addToCart, addToWishlist } = useContext(StoreContext);
  const eggProducts = products.filter(p => p.category === "eggs");

  return (
    <div className='eggs'>
      <h2>Eggs</h2>
      <div className="top-section">
        <div className="category">
          <img src="./organicEggs.jpg" alt="Eggs"/>
          <span>Eggs</span>
        </div>
      </div>
      <div className="shop-section">
        <Sidebar/>
        <div className='product-grid'>
          {eggProducts.map(product => (
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

export default Eggs;