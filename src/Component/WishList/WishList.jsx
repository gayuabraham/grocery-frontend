import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import "./Wishlist.css";

const WishList = () => {
  const { wishlist, removeFromWishlist, addToCart } = useContext(StoreContext);

  return (
    <div className="wishlist-page">
      <h2>Your Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="empty">Your wishlist is empty</p>
      ) : (
        <div className="wishlist-container">
          {wishlist.map((item) => (
            <div className="wishlist-item" key={item.id}>
              {/* Image */}
              <img src={item.image1} alt={item.name} className="wishlist-img" />

              {/* Product Info */}
              <div className="wishlist-info">
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
              </div>

              {/* Actions */}
              <div className="wishlist-actions">
                <button
                  className="add-cart-btn"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
                <button
                  className="remove-btn"
                  onClick={() => removeFromWishlist(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishList;