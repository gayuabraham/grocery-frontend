import React, { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../service/productService";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = () => {
    getProducts()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  };

  const remove = (id) => {
    if (!window.confirm("Delete this product?")) return;

    deleteProduct(id)
      .then(() => {
        setProducts(products.filter((p) => p.id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Admin Product List</h2>

      {products.length === 0 && <p>No products found</p>}

      {products.map((p) => (
        <div
          key={p.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            border: "1px solid #ddd",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <img src={p.image1} width="80" alt={p.name} />

          <div style={{ flex: 1 }}>
            <h4>{p.name}</h4>
            <p>₹{p.price}</p>
            <p>{p.category}</p>
          </div>

          <Link to={`/admin/edit-product/${p.id}`}>
            <button>Edit</button>
          </Link>

          <button onClick={() => remove(p.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;