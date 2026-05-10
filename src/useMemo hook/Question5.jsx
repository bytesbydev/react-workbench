import React, { useEffect, useMemo, useRef, useState } from "react";

const Question5 = () => {
  const numbers = [31, 43, 23, 54, 36, 40, 2, 33, 43, 42, 32, 2, 62];

  const [num, setNum] = useState(numbers);
  const numRef = useRef(null);

  const add = () => {
    const val = numRef.current.value;

    // Prevent empty input
    if (val.trim() === "") return;

    setNum((prev) => [...prev, Number(val)]);

    // Clear input
    numRef.current.value = "";
  };

  // Memoized max calculation
  const result = useMemo(() => {
    console.log("Calculating max...");
    return Math.max(...num);
  }, [num]);

  // Update page title
  useEffect(() => {
    document.title = `Max is ${result}`;
  }, [result]);

  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        .container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #ff9a9e, #fad0c4);
          font-family: 'Segoe UI', sans-serif;
        }

        .card {
          background: white;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          width: 320px;
          text-align: center;
        }

        h2 {
          margin-bottom: 20px;
          color: #333;
        }

        input {
          width: 100%;
          padding: 10px;
          border-radius: 8px;
          border: 1px solid #ccc;
          outline: none;
          margin-bottom: 12px;
          transition: 0.3s;
          font-size: 15px;
        }

        input:focus {
          border-color: #ff758c;
          box-shadow: 0 0 8px rgba(255,117,140,0.5);
        }

        button {
          width: 100%;
          padding: 10px;
          border: none;
          border-radius: 8px;
          background: linear-gradient(135deg, #ff758c, #ff7eb3);
          color: white;
          cursor: pointer;
          transition: 0.3s;
          font-size: 15px;
          font-weight: bold;
        }

        button:hover {
          transform: scale(1.03);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        .result {
          margin-top: 18px;
          font-size: 20px;
          font-weight: bold;
          color: #444;
        }

        .highlight {
          color: #ff4d6d;
        }

        .list {
          margin-top: 15px;
          font-size: 14px;
          color: #666;
        }
      `}</style>

      <div className="container">
        <div className="card">
          <h2>📊 Max Finder using useMemo</h2>

          <input
            type="number"
            ref={numRef}
            placeholder="Enter number..."
          />

          <button onClick={add}>Add Number</button>

          <div className="result">
            Max: <span className="highlight">{result}</span>
          </div>

          <div className="list">
            Numbers: {num.join(", ")}
          </div>
        </div>
      </div>
    </>
  );
};

export default Question5;