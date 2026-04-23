import { useState } from 'react';

const Question5 = () => {
  const [details, setDetails] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!name || !age || !city) {
      setError("All fields are required!");
      return;
    }

    const newData = { name, age: Number(age), city };

    if (editIndex !== null) {
      const updated = [...details];
      updated[editIndex] = newData;
      setDetails(updated);
      setEditIndex(null);
    } else {
      setDetails(prev => [...prev, newData]);
    }

    setName("");
    setAge("");
    setCity("");
    setError("");
  };

  const handleDelete = (index) => {
    setDetails(prev => prev.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    const item = details[index];
    setName(item.name);
    setAge(item.age);
    setCity(item.city);
    setEditIndex(index);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>User Details</h2>

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

        {error && <p style={styles.error}>{error}</p>}

        <button style={styles.button} onClick={handleSubmit}>
          {editIndex !== null ? "Update" : "Submit"}
        </button>

        <ul style={styles.list}>
          {details.map((item, index) => (
            <li key={index} style={styles.listItem}>
              <div>
                <strong>{item.name}</strong> ({item.age}) - {item.city}
              </div>

              <div>
                <button
                  style={styles.editBtn}
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>

                <button
                  style={styles.deleteBtn}
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
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
    width: "340px",
    textAlign: "center"
  },
  heading: {
    marginBottom: "20px",
    color: "#333"
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "10px",
    border: "1px solid #ccc"
  },
  button: {
    width: "100%",
    padding: "10px",
    borderRadius: "10px",
    border: "none",
    background: "#3498db",
    color: "#fff",
    cursor: "pointer",
    marginBottom: "15px"
  },
  error: {
    color: "red",
    fontSize: "14px",
    marginBottom: "10px"
  },
  list: {
    listStyle: "none",
    padding: 0
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#f1f1f1",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "8px"
  },
  editBtn: {
    marginRight: "5px",
    background: "#f39c12",
    color: "#fff",
    border: "none",
    padding: "5px 8px",
    borderRadius: "6px",
    cursor: "pointer"
  },
  deleteBtn: {
    background: "#e74c3c",
    color: "#fff",
    border: "none",
    padding: "5px 8px",
    borderRadius: "6px",
    cursor: "pointer"
  }
};

export default Question5;