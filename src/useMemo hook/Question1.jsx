import React, { useEffect, useState, useRef, useMemo } from 'react';

const Question1 = () => {
  const [room, setRoom] = useState([]);
  const nameRef = useRef(null);
  const marksRef = useRef(null);

  const addStudents = () => {
    let n = nameRef.current.value.trim();
    let m = Number(marksRef.current.value);

    if (!n || marksRef.current.value === "") return;

    setRoom(prev => [...prev, { name: n, marks: m }]);

    nameRef.current.value = "";
    marksRef.current.value = "";
    nameRef.current.focus();
  };

  const deleteStudent = (index) => {
    setRoom(prev => prev.filter((_, i) => i !== index));
  };

  const clearAll = () => {
    setRoom([]);
  };

  const result = useMemo(() => {
    if (room.length === 0) return { average: 0, highest: 0, lowest: 0 };

    let marksArray = room.map(item => item.marks);
    let sum = marksArray.reduce((a, b) => a + b, 0);

    return {
      average: (sum / room.length).toFixed(1),
      highest: Math.max(...marksArray),
      lowest: Math.min(...marksArray)
    };
  }, [room]);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  useEffect(() => {
    document.title = `Average: ${result.average}`;
  }, [result.average]);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>🎓 Student Manager</h2>

        <input ref={nameRef} placeholder="Enter Name" style={styles.input} />
        <input ref={marksRef} type="number" placeholder="Enter Marks" style={styles.input} />

        <button style={styles.addBtn} onClick={addStudents}>
          Add Student
        </button>

        {room.length > 0 && (
          <button style={styles.clearBtn} onClick={clearAll}>
            Clear All
          </button>
        )}

        <ul style={styles.list}>
          {room.map((item, index) => (
            <li key={index} style={styles.listItem}>
              <div>
                <strong>{item.name}</strong> ({item.marks}){" "}
                <span style={{
                  ...styles.badge,
                  background: item.marks > 50 ? "#2ecc71" : "#e74c3c"
                }}>
                  {item.marks > 50 ? "Pass" : "Fail"}
                </span>

                {item.marks === result.highest && (
                  <span style={styles.topper}>🏆</span>
                )}
              </div>

              <button
                style={styles.deleteBtn}
                onClick={() => deleteStudent(index)}
              >
                ✖
              </button>
            </li>
          ))}
        </ul>

        <div style={styles.stats}>
          <p>📈 Max: <b>{result.highest}</b></p>
          <p>📉 Min: <b>{result.lowest}</b></p>
          <p>📊 Avg: <b>{result.average}</b></p>
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
    background: "linear-gradient(135deg, #89f7fe, #66a6ff)"
  },
  card: {
    background: "#fff",
    padding: "25px",
    borderRadius: "15px",
    width: "340px",
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
    border: "1px solid #ccc"
  },
  addBtn: {
    width: "100%",
    padding: "10px",
    background: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginBottom: "8px"
  },
  clearBtn: {
    width: "100%",
    padding: "8px",
    background: "#e74c3c",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
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
    background: "#f4f6ff",
    padding: "8px",
    borderRadius: "8px",
    marginBottom: "6px"
  },
  badge: {
    color: "#fff",
    padding: "2px 6px",
    borderRadius: "5px",
    fontSize: "12px",
    marginLeft: "8px"
  },
  topper: {
    marginLeft: "6px"
  },
  deleteBtn: {
    background: "transparent",
    border: "none",
    color: "#e74c3c",
    cursor: "pointer",
    fontSize: "16px"
  },
  stats: {
    marginTop: "10px",
    fontSize: "14px"
  }
};

export default Question1;