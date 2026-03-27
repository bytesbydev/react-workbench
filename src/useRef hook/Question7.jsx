import React, { useEffect, useMemo, useRef, useState } from "react";

const products = [
  "Laptop",
  "Mobile",
  "Book",
  "Games",
  "Bag",
  "Watch",
  "Lollypop",
];

const Question7 = () => {
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const filteredProducts = useMemo(
    () =>
      products.filter((item) =>
        item.toLowerCase().includes(text.toLowerCase())
      ),
    [text]
  );

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>🛒 Product Search</h1>

        <input
          ref={inputRef}
          type="text"
          placeholder="Search here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={styles.input}
        />

<p>Products Found: {filteredProducts.length}</p>

        <p style={styles.text}>
          Searching for:
          <span style={styles.highlight}>
            {text || " Nothing"}
          </span>
        </p>
<button
  onClick={() => setText("")}
  style={{
    marginTop: "10px",
    padding: "8px 12px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  }}
>
  Clear
</button>
        <div style={styles.results}>
          {filteredProducts.length ? (
            filteredProducts.map((item) => (
              <div key={item} style={styles.item}>
                {item}
              </div>
            ))
          ) : (
            <h3 style={styles.noData}>No Product Found</h3>
          )}
        </div>
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
    background: "linear-gradient(135deg,#ffecd2,#fcb69f)",
    fontFamily: "Arial, sans-serif",
  },

  card: {
    width: "350px",
    background: "#fff",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  },

  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },

  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "16px",
  },

  text: {
    marginTop: "15px",
  },

  highlight: {
    color: "#ff5722",
    fontWeight: "bold",
    marginLeft: "5px",
  },

  results: {
    marginTop: "20px",
  },

  item: {
    padding: "10px",
    marginBottom: "10px",
    background: "#fff3e0",
    borderRadius: "8px",
  },

  noData: {
    textAlign: "center",
    color: "gray",
  },
};

export default Question7;