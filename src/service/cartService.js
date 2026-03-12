import API from "./api";

export const fetchCart = async () => {
  return API.get("/cart/");
};

export const addToCartApi = async (productId, quantity = 1) => {
  return API.post("/cart/add/", {
    product: productId,
    quantity,
  });
};

export const updateCartQtyApi = async (cartItemId, quantity) => {
  return API.patch(`/cart/${cartItemId}/`, {
    quantity,
  });
};

export const removeCartItemApi = async (cartItemId) => {
  return API.delete(`/cart/remove/${cartItemId}/`);
};