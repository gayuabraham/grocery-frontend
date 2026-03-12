import React, { useContext } from "react";
import axios from "axios";
import { StoreContext } from "../Context/StoreContext";
import "./Cart.css";

const Cart = () => {
  const { cart, increaseQty, decreaseQty, removeFromCart } =
    useContext(StoreContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const checkout = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first");
        return;
      }

      await axios.post(
        "http://127.0.0.1:8000/api/orders/create/",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Order placed successfully");

      // reload page to refresh cart
      window.location.reload();

    } catch (error) {
      console.log(error);
      alert("Checkout failed");
    }
  };

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="empty">Cart is empty</p>
      ) : (
        <div className="cart-container">
          {cart.map((item) => (
            <div className="cart-item" key={item.cartId}>
              <img src={item.image1} alt={item.name} />

              <div className="cart-info">
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
              </div>

              <div className="qty-box">
                <button onClick={() => decreaseQty(item)}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => increaseQty(item)}>+</button>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item)}
              >
                Remove
              </button>
            </div>
          ))}

          <div className="cart-total">
            <h3>Total: ₹{total}</h3>

            <button
              className="checkout-btn"
              onClick={checkout}
            >
              Checkout
            </button>

          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;