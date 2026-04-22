import { useState } from 'react';

const Question5 = () => {
  const [details, setDetails] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  const handleClick = () => {
    if (!name || !age || !city) return;

    setDetails(prev => [
      ...prev,
      { name, age: Number(age), city }
    ]);

    // clear inputs
    setName("");
    setAge("");
    setCity("");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>User Details Form</h2>

        <input
          style={styles.input}
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          style={styles.input}
          type="number"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <input
          style={styles.input}
          placeholder="Enter City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button style={styles.button} onClick={handleClick}>
          Submit
        </button>

        <ul style={styles.list}>
          {details.map((item, index) => (
            <li key={index} style={styles.listItem}>
              <strong>{item.name}</strong> ({item.age}) - {item.city}
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
    background: "linear-gradient(135deg, #89f7fe, #66a6ff)"
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    width: "320px",
    textAlign: "center"
  },
  heading: {
    marginBottom: "20px",
    color: "#333"
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "14px"
  },
  button: {
    width: "100%",
    padding: "10px",
    borderRadius: "10px",
    border: "none",
    background: "#3498db",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    marginBottom: "15px"
  },
  list: {
    textAlign: "left",
    padding: 0,
    listStyle: "none"
  },
  listItem: {
    background: "#f1f1f1",
    padding: "8px",
    borderRadius: "8px",
    marginBottom: "8px"
  }
};

export default Question5;