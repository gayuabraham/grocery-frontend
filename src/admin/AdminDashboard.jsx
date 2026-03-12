import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {

return (

<div>

<h1>Admin Dashboard</h1>

<Link to="/admin/products">Manage Products</Link>

<br/>

<Link to="/admin/add-product">Add Product</Link>

</div>

);

};

export default AdminDashboard;