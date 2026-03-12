import React, { useContext } from 'react';
import './Baking.css';
import { FaEye, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import Sidebar from '../Sidebar/SideBar';
import products from "../../Data/products";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const Baking = () => {
  const { addToCart, addToWishlist } = useContext(StoreContext);
  const bakingProducts = products.filter(p => p.category === "baking");

  return (
    <div className='bake'>
      <h2>Baking</h2>
      <div className="top-section">
        <div className="category">
          <img src="./cibatta-bake.jpg" alt="Baking"/>
          <span>Baking</span>
        </div>
      </div>

      <div className="shop-section">
        <Sidebar/>
        <div className='product-grid'>
          {bakingProducts.map(product => (
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

export default Baking;