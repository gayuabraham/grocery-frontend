import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../Context/StoreContext";
import { getProduct } from "../../service/productService";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart, addToWishlist } = useContext(StoreContext);

  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const [selectedImage, setSelectedImage] = useState("");

  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    getProduct(id)
      .then((res) => {
        setProduct(res.data);
        setSelectedImage(res.data.image1);
      })
      .catch((err) => {
        console.log(err);
        setProduct(null);
      });
  }, [id]);

  const submitReview = () => {
    if (!message.trim() || rating === 0) {
      alert("Please add message and rating!");
      return;
    }

    const newReview = { rating, message };
    setReviews([newReview, ...reviews]);
    setMessage("");
    setRating(0);
  };

  if (!product) return <h2 className="not-found">Product not found</h2>;

  return (
    <div className="product-details-page">
      <div className="product-details-container">
        <div className="product-gallery">
          <div className="thumbnail-list">
            {[product.image1, product.image2].map((img, index) => (
              <button
                key={index}
                className={`thumbnail ${selectedImage === img ? "active-thumb" : ""}`}
                onClick={() => setSelectedImage(img)}
              >
                <img src={img} alt={`thumb-${index}`} />
              </button>
            ))}
          </div>

          <div className="main-image-box">
            <img src={selectedImage} alt={product.name} className="main-image" />
          </div>
        </div>

        <div className="product-info-card">
          <p className="product-category">{product.category}</p>
          <h1>{product.name}</h1>
          <h2>₹{product.price}</h2>
          <p className="product-desc">{product.description}</p>

          <div className="stock-line">
            <span className="stock-badge">In Stock</span>
            <span>Available: {product.stock ?? 10}</span>
          </div>

          <div className="qty-box">
            <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
            <span>{qty}</span>
            <button onClick={() => setQty(qty + 1)}>+</button>
          </div>

          <div className="product-actions">
            <button
              className="btn buy-now"
              onClick={() => addToCart(product, qty)}
            >
              <FaShoppingCart className="icon" />
              Add to Cart
            </button>

            <button
              className="btn wishlist"
              onClick={() => addToWishlist(product)}
            >
              <FaRegHeart className="icon" />
              Wishlist
            </button>
          </div>

          <div className="product-meta">
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Product ID:</strong> {product.id}</p>
          </div>
        </div>
      </div>

      <div className="reviews-section">
        <h3>Customer Reviews</h3>

        <div className="review-form">
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={star <= rating ? "selected" : ""}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
          </div>

          <textarea
            placeholder="Write your review..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button onClick={submitReview}>Submit Review</button>
        </div>

        <div className="reviews-list">
          {reviews.length === 0 && <p className="no-review">No reviews yet.</p>}

          {reviews.map((rev, idx) => (
            <div key={idx} className="review-item">
              <div className="review-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={star <= rev.rating ? "selected" : ""}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p>{rev.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;