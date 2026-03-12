import { Routes, Route } from "react-router-dom";

import HeaderPage from "../Component/Header/HeaderPage";
import Footer from "../Component/Footer/Footer";

import HomePage from "../Component/Home/HomePage";
import Features from "../Component/Categories/Features";
import Listing from "../Component/List/Listing";
import Shop from "../Component/ShoppingCart/Shop";
import BigSale from "../Component/BigSale/BigSale";
import Support from "../Component/Support/Support";
import Order from "../Component/Order/Order";

import ProductDetails from "../Component/ProductDetails/ProductDetails";

import Cart from "../Cart/Cart";
import WishList from "../Component/WishList/WishList";

import CategoryPage from "../Component/CategoryPage/CategoryPage";

import AdminDashboard from "../admin/AdminDashboard";
import ProductList from "../admin/ProductList";
import AddProduct from "../admin/AddProduct";

import LoginPage from "../Component/Auth/LoginPage";
import RegisterPage from "../Component/Auth/RegisterPage";
import AdminRoute from "../Component/Auth/AdminRoute";
import History from "../Component/History/History";

const Routing = () => {
  return (
    <>
      <HeaderPage />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
              <Features />
              <Listing />
              <Shop />
              <BigSale />
              <Order />
              <Support />
            </>
          }
        />

        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/history" element={<History/>} />

        <Route
          path="/admin"
          element={
            <AdminRoute>
            
              <AdminDashboard/>
            </AdminRoute>
          }
        />

        <Route
          path="/admin/products"
          element={
            <AdminRoute>
              <ProductList />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/add-product"
          element={
            <AdminRoute>
              <AddProduct />
            </AdminRoute>
          }
        />
      </Routes>

      <Footer />
    </>
  );
};

export default Routing;