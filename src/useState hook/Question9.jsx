import React, { useState } from 'react';

const Question9 = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 50000, category: "Electronics" },
    { id: 2, name: "Shoes", price: 2000, category: "Fashion" }
  ]);

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: ""
  });

  const [search, setSearch] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add product
  const addProduct = () => {
    if (!form.name || !form.price || !form.category) return;

    const newProduct = {
      id: Date.now(),
      name: form.name,
      price: Number(form.price),
      category: form.category
    };

    setProducts(prev => [...prev, newProduct]);

    setForm({ name: "", price: "", category: "" });
  };

  // Delete product
  const deleteProduct = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  // Filter products
  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Question 9 - Product Manager</h2>

      <input
        name="name"
        placeholder="Product Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
        type="number"
      />

      <input
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
      />

      <button onClick={addProduct}>Add Product</button>

      <br /><br />

      <input
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            {product.name} - ₹{product.price} ({product.category})
            <button
              onClick={() => deleteProduct(product.id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question9;