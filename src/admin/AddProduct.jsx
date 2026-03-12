import React, { useState } from "react";
import { createProduct } from "../service/productService";

const AddProduct = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    image1: "",
    image2: "",
  });

  const submit = (e) => {
    e.preventDefault();

    createProduct(form)
      .then(() => {
        alert("Product added successfully");
        setForm({
          name: "",
          price: "",
          category: "",
          description: "",
          image1: "",
          image2: "",
        });
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to add product");
      });
  };

  return (
    <form onSubmit={submit}>
      <input
        placeholder="name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="price"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />

      <input
        placeholder="category"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />

      <input
        placeholder="description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <input
        placeholder="image1"
        value={form.image1}
        onChange={(e) => setForm({ ...form, image1: e.target.value })}
      />

      <input
        placeholder="image2"
        value={form.image2}
        onChange={(e) => setForm({ ...form, image2: e.target.value })}
      />

      <button>Add</button>
    </form>
  );
};

export default AddProduct;