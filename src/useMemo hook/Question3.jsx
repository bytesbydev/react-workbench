import React, { useMemo, useState } from 'react'

const names = ["anshika","dev","aloo","alia","aaraav","vicku","rohit"]

const Question3 = () => {
  const [text, setText] = useState("")

  const result = useMemo(() => {
    console.log("filter")
    return names.filter((n) => n.toLowerCase().startsWith("a"))
  }, [])

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
      fontFamily: "Segoe UI"
    }}>

      <div style={{
        background: "white",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
        width: "280px",
        textAlign: "center"
      }}>

        <h2 style={{ marginBottom: "10px" }}>🔤 Names Filter</h2>

        <div>
          {result.map((num, index) => (
            <p key={index} style={{
              margin: "5px 0",
              padding: "5px",
              borderRadius: "5px",
              background: "#f0f5ff"
            }}>
              {num}
            </p>
          ))}
        </div>

        <br />

        <p>
          Text: <b>{text || "None"}</b>
        </p>

        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            outline: "none"
          }}
        />

      </div>
    </div>
  )
}

export default Question3