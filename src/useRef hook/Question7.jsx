import React, { useEffect, useMemo, useRef, useState } from 'react'

const products = ["laptop","mobile","book","games","bag","watch","lollypop"]

const Question7 = () => {
  const [text, setText] = useState("")
  const enterRef = useRef(null)

  const result = useMemo(() => {
    console.log("searching...")
    return products.filter(item =>
      item.toLowerCase().includes(text.toLowerCase())
    )
  }, [text])

  useEffect(() => {
    enterRef.current.focus()
  }, [])

  return (
    <>
      <style>{`
        .container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #ffecd2, #fcb69f);
          font-family: 'Segoe UI', sans-serif;
        }

        .card {
          background: white;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          width: 320px;
        }

        h2 {
          text-align: center;
          margin-bottom: 15px;
          color: #333;
        }

        input {
          width: 100%;
          padding: 10px;
          border-radius: 8px;
          border: 1px solid #ccc;
          outline: none;
          transition: 0.3s;
        }

        input:focus {
          border-color: #ff7e5f;
          box-shadow: 0 0 8px rgba(255,126,95,0.5);
        }

        .text {
          margin-top: 10px;
          font-size: 14px;
          color: #555;
        }

        .highlight {
          color: #ff5722;
          font-weight: bold;
        }

        .results {
          margin-top: 15px;
        }

        .item {
          padding: 6px;
          margin: 5px 0;
          border-radius: 6px;
          transition: 0.2s;
        }

        .item:hover {
          background: #fff3e0;
        }

        .empty {
          color: #999;
          font-size: 14px;
        }
      `}</style>

      <div className="container">
        <div className="card">
          <h2>🛒 Product Search</h2>

          <input
            type="text"
            placeholder="Search product..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            ref={enterRef}
          />

          <div className="text">
            Entered: <span className="highlight">{text || "None"}</span>
          </div>

          <div className="results">
            {result.length > 0 ? (
              result.map((item, index) => (
                <div key={index} className="item">{item}</div>
              ))
            ) : (
              <div className="empty">No items found</div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Question7