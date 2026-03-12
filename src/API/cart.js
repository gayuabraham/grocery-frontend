import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/cart/";

export const fetchCartBackend = async (token) => {
  try {
    const res = await axios.get(API_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err) {
    console.log("fetchCartBackend error:", err.response?.data || err.message);
    return [];
  }
};

export const addToCartBackend = async (productId, qty = 1, token) => {
  try {
    const res = await axios.post(
      `${API_URL}add/`,
      { product: productId, qty },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return res.data;
  } catch (err) {
    console.log("addToCartBackend error:", err.response?.data || err.message);
    return null;
  }
};

export const removeFromCartBackend = async (backendId, token) => {
  try {
    await axios.delete(`${API_URL}remove/${backendId}/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (err) {
    console.log("removeFromCartBackend error:", err.response?.data || err.message);
  }
};