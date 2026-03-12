import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

import {
  FaRegHeart,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { FaShopify } from "react-icons/fa6";
import { SiIfood } from "react-icons/si";
import { GiFruitBowl, GiFishing, GiCakeSlice } from "react-icons/gi";
import { RiDrinks2Fill } from "react-icons/ri";

import { getProducts } from "../../service/productService";
import "./header.css";

const HeaderPage = () => {
  const { cart, wishlist } = useContext(StoreContext);

  const [products, setProducts] = useState([]);

  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  const isStaff = localStorage.getItem("is_staff") === "true";

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh");
    localStorage.removeItem("username");
    localStorage.removeItem("is_staff");
    localStorage.removeItem("is_superuser");
    window.location.href = "/";
  };

  const veges = products.filter((p) => p.category === "veges").slice(0, 4);
  const fruits = products.filter((p) => p.category === "fruits").slice(0, 4);
  const fish = products.filter((p) => p.category === "fish").slice(0, 4);
  const baking = products.filter((p) => p.category === "baking").slice(0, 4);
  const drinks = products.filter((p) => p.category === "drinks").slice(0, 4);

  return (
    <>
      <div className="top-bar">
        <div className="top-left">
          Delivery on Next Day from 10:00 AM to 08:00 PM
        </div>

        <div className="top-center">
          <span>Home</span>
          <span>Shop</span>
          <span>Blog</span>
          <span>Pages</span>
        </div>

        <div className="top-right">
          <span>+1 900 777525</span>
          <FaFacebookF />
          <FaInstagram />
          <FaWhatsapp />
          <FaYoutube />
        </div>
      </div>

      <div className="main-header">
        <div className="menu-left">
          <Link to="/" className="menu-item">
            <FaShopify />
            <span>Shop</span>
          </Link>

          <div className="menu-item">
            <SiIfood />
            <span>Vegetables</span>
            <div className="dropdown-grid">
              {veges.map((p) => (
                <Link
                  to={`/product/${p.id}`}
                  key={p.id}
                  className="dropdown-card"
                >
                  <img src={p.image1} alt={p.name} />
                  <div>
                    <p>{p.name}</p>
                    <span>₹{p.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="menu-item">
            <GiFruitBowl />
            <span>Fruits</span>
            <div className="dropdown-grid">
              {fruits.map((p) => (
                <Link
                  to={`/product/${p.id}`}
                  key={p.id}
                  className="dropdown-card"
                >
                  <img src={p.image1} alt={p.name} />
                  <div>
                    <p>{p.name}</p>
                    <span>₹{p.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="menu-item">
            <GiFishing />
            <span>Seafood</span>
            <div className="dropdown-grid">
              {fish.map((p) => (
                <Link
                  to={`/product/${p.id}`}
                  key={p.id}
                  className="dropdown-card"
                >
                  <img src={p.image1} alt={p.name} />
                  <div>
                    <p>{p.name}</p>
                    <span>₹{p.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="logo">
          <img src="/tastydaily.png" alt="Tasty Daily" />
        </div>

        <div className="menu-right">
          <div className="menu-item">
            <GiCakeSlice />
            <span>Baking</span>
            <div className="dropdown-grid">
              {baking.map((p) => (
                <Link
                  to={`/product/${p.id}`}
                  key={p.id}
                  className="dropdown-card"
                >
                  <img src={p.image1} alt={p.name} />
                  <div>
                    <p>{p.name}</p>
                    <span>₹{p.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="menu-item">
            <RiDrinks2Fill />
            <span>Drinks</span>
            <div className="dropdown-grid">
              {drinks.map((p) => (
                <Link
                  to={`/product/${p.id}`}
                  key={p.id}
                  className="dropdown-card"
                >
                  <img src={p.image1} alt={p.name} />
                  <div>
                    <p>{p.name}</p>
                    <span>₹{p.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="header-icons">
            <FaSearch />
            <Link to="/history" className="auth-link">
              History
             </Link>

            {!token ? (
              <>
                <Link to="/login" className="auth-link">Login</Link>
                <Link to="/register" className="auth-link">Sign Up</Link>
              </>
            ) : (
              <>
                <div className="user-box">
                  <IoPersonOutline />
                  <span>{username}</span>
                </div>

                {isStaff && (
                  <Link to="/admin" className="auth-link admin-link">
                    Admin
                  </Link>
                )}

                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </>
            )}

            <Link to="/wishlist" className="icon-box">
              <FaRegHeart />
              <span className="count">{wishlist?.length || 0}</span>
            </Link>
           
            <Link to="/cart" className="icon-box">
              <FaShoppingCart />
              <span className="count">{cart?.length || 0}</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderPage;