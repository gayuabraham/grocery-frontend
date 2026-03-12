import React, { useEffect, useState } from "react";
import axios from "axios";
import "./History.css";

const History = () => {

  const [orders,setOrders] = useState([]);

  useEffect(()=>{

    const fetchHistory = async ()=>{

      try{

        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://127.0.0.1:8000/api/orders/my-orders/",
          {
            headers:{
              Authorization:`Bearer ${token}`
            }
          }
        );

        setOrders(res.data);

      }catch(err){
        console.log(err);
      }

    };

    fetchHistory();

  },[]);


  return (

    <div className="history-page">

      <h2>Order History</h2>

      {orders.length === 0 && <p>No orders yet</p>}

      {orders.map(order=>(
        
        <div className="history-card" key={order.id}>

          <h3>Order #{order.id}</h3>

          <p>Date: {new Date(order.date).toLocaleDateString()}</p>

          <div className="history-items">

            {order.items.map((item,index)=>(
              
              <div key={index} className="history-item">

                <span>{item.product}</span>

                <span>₹{item.price}</span>

                <span>x {item.qty}</span>

              </div>

            ))}

          </div>

          <h4>Total: ₹{order.total}</h4>

        </div>

      ))}

    </div>

  );

};

export default History;