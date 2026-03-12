import React, { createContext, useState, useEffect } from "react";
import {
  addToCartBackend,
  removeFromCartBackend,
  fetchCartBackend,
} from "../API/cart";

export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const getToken = () => localStorage.getItem("token");

  const loadCart = async () => {
    const token = getToken();

    if (!token) {
      setCart([]);
      return;
    }

    const data = await fetchCartBackend(token);

    if (!data) {
      setCart([]);
      return;
    }

    const formattedCart = data.map((item) => ({
      cartId: item.id,
      id: item.product.id,
      name: item.product.name,
      category: item.product.category,
      price: item.product.price,
      description: item.product.description,
      image1: item.product.image1,
      image2: item.product.image2,
      qty: item.quantity,
    }));

    setCart(formattedCart);
  };

  useEffect(() => {
    loadCart();
  }, []);

  const addToCart = async (product, quantity = 1) => {
    const token = getToken();

    if (!token) {
      alert("Please login first");
      return;
    }

    console.log("ADDING PRODUCT:", product);

    const backendItem = await addToCartBackend(product.id, quantity, token);
    if (!backendItem) return;

    await loadCart();
  };

  const removeFromCart = async (item) => {
    const token = getToken();
    if (!token) return;

    await removeFromCartBackend(item.cartId, token);
    await loadCart();
  };

  const increaseQty = async (item) => {
    await addToCart(item, 1);
  };

  const decreaseQty = async (item) => {
    const token = getToken();
    if (!token) return;

    if (item.qty <= 1) {
      await removeFromCart(item);
      return;
    }

    await removeFromCartBackend(item.cartId, token);
    await addToCartBackend(item.id, item.qty - 1, token);
    await loadCart();
  };

  const addToWishlist = (product) => {
    const exist = wishlist.find((item) => item.id === product.id);
    if (!exist) {
      setWishlist([...wishlist, product]);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <StoreContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        addToWishlist,
        removeFromWishlist,
        loadCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;