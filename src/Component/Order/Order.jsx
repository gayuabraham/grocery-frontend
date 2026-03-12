import React from "react";
import "./Order.css";

const Order = () => {
  return (
    <section className="order-wrapper">
      <div className="order">

        <img src="./app.png" alt="" className="man" />

        <div className="content">
          <h1>
            Order from our Apps <br />
            and Get Free <br />
            Delivery
          </h1>

          <p>* Free Delivery For Orders Starts From $50</p>

          <div className="buttons">
            <img src="./man.png" alt="" />
            <img src="./google.png" alt="" />
          </div>
        </div>

        <img src="./akka.png" alt="" className="akka" />

      </div>
    </section>
  );
};

export default Order;