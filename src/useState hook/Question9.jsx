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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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

  const deleteProduct = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Product Manager</h2>

        {/* Form */}
        <input
          style={styles.input}
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          style={styles.input}
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          type="number"
        />

        <input
          style={styles.input}
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
        />

        <button style={styles.addBtn} onClick={addProduct}>
          Add Product
        </button>

        {/* Search */}
        <input
          style={styles.search}
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* List */}
        <ul style={styles.list}>
          {filteredProducts.map(product => (
            <li key={product.id} style={styles.listItem}>
              <div>
                <strong>{product.name}</strong>
                <br />
                ₹{product.price} • {product.category}
              </div>

              <button
                style={styles.deleteBtn}
                onClick={() => deleteProduct(product.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)"
  },
  card: {
    background: "#fff",
    padding: "25px",
    borderRadius: "15px",
    width: "350px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
  },
  heading: {
    textAlign: "center",
    marginBottom: "15px"
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none"
  },
  addBtn: {
    width: "100%",
    padding: "10px",
    background: "#2ecc71",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginBottom: "15px"
  },
  search: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc"
  },
  list: {
    listStyle: "none",
    padding: 0
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#f4f4f4",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "10px"
  },
  deleteBtn: {
    background: "#e74c3c",
    color: "#fff",
    border: "none",
    padding: "6px 10px",
    borderRadius: "6px",
    cursor: "pointer"
  }
};

export default Question9;