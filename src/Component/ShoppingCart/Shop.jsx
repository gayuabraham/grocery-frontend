import React, { useContext } from "react";
import { FaEye, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import "./Shop.css";

const products = [
  { 
    id: "1", 
    name: "Mint", 
    description: "The mint plant is a herbaceous perennial widely known", 
    price: 150, 
    image1: "./mint.jpg",
    image2: "./mint2.jpg"
  },
  { 
    id: "2", 
    name: "Mushroom", 
    description: "Mushrooms are nutritious and low in calories", 
    price: 200, 
    image1: "./mushroom-1.jpg",
    image2: "./mushroom-2.jpg"
  },
  { 
    id: "3", 
    name: "Basil", 
    description: "To keep basil fresh, cut the stem and place it in water", 
    price: 180, 
    image1: "./basil1.jpg",
    image2: "./basil2.jpg"
  },
  { 
    id: "4", 
    name: "Kiwi", 
    description: "Kiwi is a small oval fruit with brown fuzzy exterior and vibrant green inside", 
    price: 500, 
    image1: "./kiwi-1.jpg",
    image2: "./kiwi-2.jpg"
  },
];

const Shop = () => {
  const { addToWishlist } = useContext(StoreContext);

  return (
    <div className="cart">
      {/* Left column: Products */}
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="image-box">
              <Link to={`/product/${product.id}`}>
                <img src={product.image1} className="img1" alt={product.name} />
                <img src={product.image2} className="img2" alt={product.name} />
              </Link>
              <div className="icon-overlay">
                <FaEye />
                <FaRegHeart onClick={() => addToWishlist(product)} />
              </div>
            </div>
            <h4>{product.name}</h4>
            <p className="desc">{product.description}</p>
            <p className="price">₹{product.price}</p>
          </div>
        ))}
      </div>

      {/* Right column: Banner + Categories */}
      <div className="fam">
        <div style={{position: "relative"}}>
          <img src="./fam.jpg" alt="Banner" />
          <div className="overlay-text">
            <span>Today Discount</span>
            <span>View Items</span>
          </div>
        </div>

        <div className="text">
  <Link to="/category/milk">Milk</Link>
  <Link to="/category/meat">Meat</Link>
  <Link to="/category/cheese">Cheese</Link>
  <Link to="/category/eggs">Eggs</Link>
  <Link to="/category/veges">Vegetables</Link>
  <Link to="/category/fruits">Fruits</Link>
  <Link to="/category/fish">Sea Foods</Link>
  <Link to="/category/drinks">Drink</Link>
  <Link to="/category/baking">Baking</Link>
</div>
      </div>
    </div>
  );
};

export default Shop;