import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/products/";

export const fetchProducts = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const fetchProduct = async (id) => {
  const res = await axios.get(`${API_URL}${id}/`);
  return res.data;
};