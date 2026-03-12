import React, { useRef, useEffect, useState, useContext } from "react";
import { FaEye, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { getProducts } from "../../service/productService";
import { StoreContext } from "../../Context/StoreContext";
import "./BigSale.css";

const BigSale = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const { addToCart, addToWishlist } = useContext(StoreContext);

  const [allProducts, setAllProducts] = useState([]);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  useEffect(() => {
    getProducts()
      .then((res) => {
        setAllProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const bigSaleProducts = allProducts.filter((p) => Number(p.price) >= 101);

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="big-sale-section">
      <div className="big-sale-container">
        <div className="left-section">
          <div className="sale-header">
            <div className="sale-title-box">
              <span className="sale-tag">Limited Time Offers</span>
              <h2>Big Sale Specials</h2>
              <p>
                Discover premium grocery picks at special prices before the
                countdown ends.
              </p>
            </div>

            <div className="sale-controls">
              <div className="timer">
                <div>
                  <span>{timeLeft.days}</span>
                  <small>Days</small>
                </div>
                <div>
                  <span>{timeLeft.hours}</span>
                  <small>Hrs</small>
                </div>
                <div>
                  <span>{timeLeft.minutes}</span>
                  <small>Min</small>
                </div>
                <div>
                  <span>{timeLeft.seconds}</span>
                  <small>Sec</small>
                </div>
              </div>

              <div className="arrow-group">
                <button onClick={scrollLeft}>‹</button>
                <button onClick={scrollRight}>›</button>
              </div>
            </div>
          </div>

          <div className="scroll-wrapper" ref={scrollRef}>
            {bigSaleProducts.map((product) => (
              <div className="card" key={product.id}>
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

                    <button
                      type="button"
                      onClick={() => addToWishlist(product)}
                    >
                      <FaRegHeart />
                    </button>
                  </div>
                </div>

                <div className="card-content">
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
              </div>
            ))}

            {bigSaleProducts.length === 0 && (
              <p className="no-products">No sale products available.</p>
            )}
          </div>
        </div>

        <div className="right-section">
          <div className="promo-content">
            <span className="promo-tag">Fresh Farm Picks</span>
            <h2>
              Tasty Cheeses <br /> From Farm Vendors
            </h2>
            <p>
              Carefully selected artisan products with rich flavor and premium
              freshness.
            </p>
            <button
              className="shop-btn"
              onClick={() => navigate("/category/cheese")}
            >
              Shop Now
            </button>
          </div>

          <div className="promo-image">
            <img src="./bigcheesh.jpg" alt="cheese" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigSale;