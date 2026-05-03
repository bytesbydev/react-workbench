import React, { useEffect, useMemo, useRef, useState } from 'react'

const Question9 = () => {
  const [text, setText] = useState("")
  const textRef = useRef(null)

  useEffect(() => {
    textRef.current.focus()
  }, [])

  const result = useMemo(() => {
    const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length
    const sentences = text.trim() === "" ? 0 : text.split(/[.!?]+/).filter(s => s.trim() !== "").length
    const characters = text.length

    return { words, sentences, characters }
  }, [text])

  return (
    <>
      <style>{`
        .container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #667eea, #764ba2);
          font-family: 'Poppins', sans-serif;
        }

        .card {
          background: rgba(255, 255, 255, 0.95);
          padding: 30px;
          border-radius: 18px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.25);
          width: 340px;
          backdrop-filter: blur(10px);
          transition: transform 0.3s ease;
        }

        .card:hover {
          transform: translateY(-5px);
        }

        h2 {
          text-align: center;
          margin-bottom: 15px;
          color: #222;
        }

        textarea {
          width: 100%;
          height: 110px;
          padding: 12px;
          border-radius: 10px;
          border: 1px solid #ccc;
          outline: none;
          resize: none;
          font-size: 14px;
          transition: 0.3s;
        }

        textarea:focus {
          border-color: #667eea;
          box-shadow: 0 0 8px rgba(102,126,234,0.5);
        }

        .stats {
          margin-top: 15px;
          font-size: 14px;
        }

        .stats p {
          margin: 6px 0;
          display: flex;
          justify-content: space-between;
          color: #444;
        }

        .value {
          font-weight: bold;
          color: #667eea;
        }

        .clear-btn {
          margin-top: 12px;
          width: 100%;
          padding: 10px;
          border: none;
          border-radius: 10px;
          background: linear-gradient(135deg, #ff7e5f, #feb47b);
          color: white;
          cursor: pointer;
          transition: 0.3s;
        }

        .clear-btn:hover {
          transform: scale(1.03);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
      `}</style>

      <div className="container">
        <div className="card">
          <h2>📝 Text Analyzer</h2>

          <textarea
            ref={textRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type your text..."
          />

          <div className="stats">
            <p>Words <span className="value">{result.words}</span></p>
            <p>Characters <span className="value">{result.characters}</span></p>
            <p>Sentences <span className="value">{result.sentences}</span></p>
          </div>

          <button className="clear-btn" onClick={() => setText("")}>
            Clear Text
          </button>
        </div>
      </div>
    </>
  )
}

export default Question9