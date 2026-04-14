import React, { useEffect, useMemo, useRef, useState } from 'react'

const products = ["laptop","mobile","book","games","bag","watch","lollypop"]

const Question4 = () => {
  const [text, setText] = useState("")
  const enterRef = useRef(null)

  const result = useMemo(() => {
    console.log("searching")
    return products.filter(item =>
      item.toLowerCase().includes(text.toLowerCase())
    )
  }, [text])

  useEffect(() => {
    enterRef.current.focus()
  }, [])

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #f6d365, #fda085)",
      fontFamily: "Segoe UI"
    }}>

      <div style={{
        background: "white",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
        width: "300px"
      }}>

        <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
          🛒 Product Search
        </h2>

        <input
          type="text"
          placeholder="Search product..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          ref={enterRef}
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            outline: "none"
          }}
        />

        <p style={{ marginTop: "10px", fontSize: "14px" }}>
          Entered: <b>{text || "None"}</b>
        </p>

        <div style={{ marginTop: "10px" }}>
          {result.length > 0 ? (
            result.map((item, index) => (
              <p key={index} style={{
                margin: "5px 0",
                padding: "5px",
                borderRadius: "5px",
                background: "#fff3e0"
              }}>
                {item}
              </p>
            ))
          ) : (
            <p style={{ color: "#999" }}>No items found</p>
          )}
        </div>

      </div>
    </div>
  )
}

export default Question4