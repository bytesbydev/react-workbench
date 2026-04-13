import React, { useEffect, useMemo, useRef, useState } from 'react'

const names = ["anshika","vikas","devil","priya","dev","aloo","alia","aaraav","vivek","rohit"]

const Question7 = () => {
  const focusRef = useRef(null)
  const timeRef = useRef()

  const [text, setText] = useState("")

  const result = useMemo(() => {
    const values = names.filter(item => item.toLowerCase().includes(text.toLowerCase()))
    return values
  }, [text])

  const handleClick = (e) => {
    clearTimeout(timeRef.current)
    timeRef.current = setTimeout(() => {
      setText(e.target.value)
    }, 500)
  }

  useEffect(() => {
    focusRef.current.focus()
  }, [])

  useEffect(() => {
    console.log(`${result.length} results found`)
  }, [result])

  return (
    <>
      <style>{`
        .container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #667eea, #764ba2);
          font-family: 'Segoe UI', sans-serif;
        }

        .card {
          background: white;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          width: 320px;
        }

        h2 {
          text-align: center;
          margin-bottom: 15px;
          color: #333;
        }

        label {
          font-size: 14px;
          color: #555;
        }

        input {
          width: 100%;
          margin-top: 5px;
          padding: 10px;
          border-radius: 8px;
          border: 1px solid #ccc;
          outline: none;
          transition: 0.3s;
        }

        input:focus {
          border-color: #667eea;
          box-shadow: 0 0 8px rgba(102,126,234,0.5);
        }

        .results {
          margin-top: 15px;
        }

        ul {
          padding-left: 20px;
          margin-top: 10px;
        }

        li {
          margin: 5px 0;
          padding: 5px;
          border-radius: 5px;
          transition: 0.2s;
        }

        li:hover {
          background: #f0f3ff;
          cursor: pointer;
        }

        .count {
          font-size: 13px;
          color: #777;
          margin-top: 5px;
        }
      `}</style>

      <div className="container">
        <div className="card">
          <h2>🔍 Live Search</h2>

          <label htmlFor="input">Enter something</label>
          <input
            type="text"
            onChange={handleClick}
            ref={focusRef}
            name="input"
            placeholder="Search names..."
          />

          <div className="results">
            <div className="count">{result.length} results found</div>

            <ul>
              {result.length > 0 ? (
                result.map((item, index) => (
                  <li key={index}>{item}</li>
                ))
              ) : (
                <li>No results found</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Question7