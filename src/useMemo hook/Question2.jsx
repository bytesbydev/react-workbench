import React, { useMemo, useState } from 'react';

const Question2 = () => {
  const [numbers, setNumbers] = useState([34, 32, 55, 34]);
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);

  const result = useMemo(() => {
    console.log("calculating...");
    return numbers.reduce((sum, num) => sum + num, 0);
  }, [numbers]);

  const addNumber = () => {
    if (input === "") return;
    setNumbers(prev => [...prev, Number(input)]);
    setInput("");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>📊 Sum Calculator</h2>

        <p>Total Sum: <b>{result}</b></p>

        <div style={styles.inputGroup}>
          <input
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter number"
            style={styles.input}
          />
          <button style={styles.addBtn} onClick={addNumber}>
            Add
          </button>
        </div>

        <p>Numbers: {numbers.join(", ")}</p>

        <hr />

        <p>Count: <b>{count}</b></p>

        <button
          onClick={() => setCount(count + 1)}
          style={styles.counterBtn}
        >
          Click Me 🚀
        </button>
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
    background: "linear-gradient(135deg, #ff9a9e, #fad0c4)"
  },
  card: {
    background: "#fff",
    padding: "25px",
    borderRadius: "12px",
    width: "300px",
    textAlign: "center",
    boxShadow: "0 8px 25px rgba(0,0,0,0.2)"
  },
  inputGroup: {
    display: "flex",
    gap: "8px",
    margin: "10px 0"
  },
  input: {
    flex: 1,
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  },
  addBtn: {
    padding: "8px",
    background: "#2ecc71",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },
  counterBtn: {
    marginTop: "10px",
    padding: "8px 15px",
    border: "none",
    borderRadius: "8px",
    background: "#ff758c",
    color: "white",
    cursor: "pointer"
  }
};

export default Question2;