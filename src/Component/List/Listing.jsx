import React, { useRef } from 'react';
import './Listing.css';
import { Link } from 'react-router-dom';

const Listing = () => {
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="listing-section">
      <h2 className="listing-title">Shop By Category</h2>

      <div className="listing-wrapper">
        <button className="arrow left" onClick={scrollLeft}>❮</button>

        <div className="list-item" ref={scrollRef}>
          <Link to="/category/veges" className="item">
            <img src="./vege.png" alt="" />
            <span>Vegetables</span>
          </Link>

          <Link to="/category/fruits" className="item">
            <img src="./fruit.png" alt="" />
            <span>Fresh Fruits</span>
          </Link>

          <Link to="/category/fish" className="item">
            <img src="./sea.png" alt="" />
            <span>Seafood</span>
          </Link>

          <Link to="/category/meat" className="item">
            <img src="./meat.png" alt="Meat" />
            <span>Meat</span>
          </Link>

          <Link to="/category/drinks" className="item">
            <img src="./drink.png" alt="" />
            <span>Drinks</span>
          </Link>

          <Link to="/category/baking" className="item">
            <img src="./bake.png" alt="" />
            <span>Baking</span>
          </Link>

          <Link to="/category/eggs" className="item">
            <img src="./egg.png" alt="" />
            <span>Eggs</span>
          </Link>

          <Link to="/category/cheese" className="item">
            <img src="./milk.png" alt="" />
            <span>Cheese</span>
          </Link>

          <Link to="/category/milk" className="item">
            <img src="./last.png" alt="" />
            <span>Milk</span>
          </Link>
        </div>

        <button className="arrow right" onClick={scrollRight}>❯</button>
      </div>
    </div>
  );
};

export default Listing;