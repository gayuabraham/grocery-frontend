import React from "react";
import { Outlet } from "react-router-dom";
import "./ShopLayout.css";
import Sidebar from "../Sidebar/SideBar";

const ShopLayout = () => {
  return (
    <div className="shop-wrapper">
  <div className="shop-container">

      <Sidebar/>
      <div className="shop-content">
        <Outlet />
      </div>
    </div>
    </div>
  );
};

export default ShopLayout;