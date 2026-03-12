import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-left">
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          <a href="#">Shipping Policy</a>
          <a href="#">Refund Policy</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Delivery Info</a>
          <a href="#">Terms and Conditions</a>
        </div>

        {/* CENTER */}
        <div className="footer-center">
          <h2>Tasty <span>🥗</span> Daily</h2>

          <p>
            We’re Tasty Daily Shop, an innovative team of food engineers.
            Our unique model minimizes fresh food handling by up to 85%,
            sourcing locally and dispatching within hours.
          </p>

          <div className="social">
            <FaFacebookF />
            <FaInstagram />
            <FaWhatsapp />
            <FaYoutube />
          </div>

          <p className="copy">
            © 2023 Tasty Daily Grocery WordPress Theme
          </p>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <h3>Subscribe for Get Latest News</h3>

          <p>
            Sign up to get 10% off your first order and stay updated.
          </p>

          <div className="subscribe">
            <input type="email" placeholder="Your Email" />
            <button>Subscribe</button>
          </div>

          <div className="payments">
            <div>VISA</div>
            <div>Master</div>
            <div>PayPal</div>
            <div>AMEX</div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;