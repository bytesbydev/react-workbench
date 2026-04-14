import React, { useEffect, useState, useRef, useMemo } from 'react'

const Question1 = () => {
  const [room, setRoom] = useState([])
  const nameRef = useRef(null)
  const marksRef = useRef(null)

  const addStudents = () => {
    let n = nameRef.current.value
    let m = Number(marksRef.current.value)

    if (!n || !m) return

    setRoom(prev => [...prev, { name: n, marks: m }])

    nameRef.current.value = ""
    marksRef.current.value = ""
    nameRef.current.focus()
  }

  const result = useMemo(() => {
    if (room.length == 0) return {
      average: 0,
      highest: 0,
      lowest: 0
    }

    let sum = 0
    room.forEach(item => (sum += item.marks))

    return {
      average: (sum / room.length).toFixed(1),
      highest: Math.max(...room.map(item => item.marks)),
      lowest: Math.min(...room.map(item => item.marks))
    }
  }, [room])

  useEffect(() => {
    nameRef.current.focus()
  }, [])

  useEffect(() => {
    document.title = `Average is ${result.average}`
  }, [result.average])

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #89f7fe, #66a6ff)",
      fontFamily: "Segoe UI"
    }}>

      <div style={{
        background: "white",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
        width: "320px"
      }}>

        <h2 style={{ textAlign: "center", marginBottom: "15px" }}>
          🎓 Student Manager
        </h2>

        <label>Enter the name:</label> <br />
        <input
          type="text"
          ref={nameRef}
          style={{
            width: "100%",
            padding: "8px",
            marginTop: "5px",
            borderRadius: "6px",
            border: "1px solid #ccc"
          }}
        /> <br /><br />

        <label>Enter the marks:</label> <br />
        <input
          type="number"
          ref={marksRef}
          style={{
            width: "100%",
            padding: "8px",
            marginTop: "5px",
            borderRadius: "6px",
            border: "1px solid #ccc"
          }}
        /> <br /><br />

        <button
          onClick={addStudents}
          style={{
            width: "100%",
            padding: "10px",
            border: "none",
            borderRadius: "8px",
            background: "#4facfe",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Add Student
        </button>

        <br /><br />

        <div>
          <strong>All details:</strong>
          <ul style={{ paddingLeft: "18px" }}>
            {room.map((item, index) => (
              <li key={index} style={{
                margin: "5px 0",
                padding: "5px",
                borderRadius: "5px",
                background: "#f5f7ff"
              }}>
                Name: {item.name} | Marks: {item.marks} | Grade:{" "}
                <span style={{
                  color: item.marks > 50 ? "green" : "red",
                  fontWeight: "bold"
                }}>
                  {item.marks > 50 ? "Pass" : "Fail"}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ marginTop: "10px", fontSize: "14px" }}>
          <p>Max marks: <b>{result.highest}</b></p>
          <p>Min marks: <b>{result.lowest}</b></p>
          <p>Average: <b>{result.average}</b></p>
        </div>

      </div>
    </div>
  )
}

export default Question1