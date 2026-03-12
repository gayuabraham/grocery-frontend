import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/products/";

export const getProducts = () => {
  return axios.get(API_URL);
};

export const createProduct = (productData) => {
  const token = localStorage.getItem("token");

  return axios.post(API_URL, productData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getProduct = (id) => {
  return axios.get(`${API_URL}${id}/`);
};

export const updateProduct = (id, productData) => {
  const token = localStorage.getItem("token");

  return axios.put(`${API_URL}${id}/`, productData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteProduct = (id) => {
  const token = localStorage.getItem("token");

  return axios.delete(`${API_URL}${id}/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};