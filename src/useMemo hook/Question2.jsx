import React, { useMemo, useState } from 'react'

const numbers = [34,32,55,34,23,54,35,34,34,76,34]

const Question2 = () => {
  const [count, setCount] = useState(0)

  const result = useMemo(() => {
    console.log("calculating")
    let ans = 0
    numbers.forEach(num => {
      ans += num
    })
    return ans
  }, [numbers])

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
      fontFamily: "Segoe UI"
    }}>

      <div style={{
        background: "white",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
        textAlign: "center",
        width: "280px"
      }}>

        <h2 style={{ marginBottom: "10px" }}>📊 Sum Calculator</h2>

        <p style={{ fontSize: "18px" }}>
          Total Sum: <b>{result}</b>
        </p>

        <p style={{ marginTop: "10px" }}>
          Count: <b>{count}</b>
        </p>

        <button
          onClick={() => setCount(count + 1)}
          style={{
            marginTop: "10px",
            padding: "8px 15px",
            border: "none",
            borderRadius: "8px",
            background: "#ff758c",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Click Me 🚀
        </button>

      </div>
    </div>
  )
}

export default Question2