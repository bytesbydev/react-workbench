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
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #cfd9df, #e2ebf0)",
      fontFamily: "Segoe UI"
    }}>

      <div style={{
        background: "white",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
        width: "320px"
      }}>

        <h2 style={{ textAlign: "center" }}>📝 Text Analyzer</h2>

        <textarea
          ref={textRef}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your text..."
          style={{
            width: "100%",
            height: "100px",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
            resize: "none"
          }}
        />

        <div style={{ marginTop: "10px", fontSize: "14px" }}>
          <p>Words: <b>{result.words}</b></p>
          <p>Characters: <b>{result.characters}</b></p>
          <p>Sentences: <b>{result.sentences}</b></p>
        </div>

      </div>
    </div>
  )
}

export default Question9