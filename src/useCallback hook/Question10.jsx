import React, { useState, useMemo } from 'react';

const Question10 = () => {
  const [num, setNum] = useState(0);

  // Memoized calculation
  const square = useMemo(() => num * num, [num]);

  return (
    <>
      <style>{`
        .container {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #141e30, #243b55);
          font-family: 'Poppins', sans-serif;
        }

        .card {
          background: rgba(255, 255, 255, 0.95);
          padding: 35px 40px;
          border-radius: 18px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.3);
          text-align: center;
          width: 300px;
          backdrop-filter: blur(10px);
          transition: transform 0.3s ease;
        }

        .card:hover {
          transform: translateY(-6px);
        }

        h3 {
          margin: 12px 0;
          color: #222;
          font-weight: 500;
        }

        .value {
          color: #ff7e5f;
          font-weight: bold;
          font-size: 18px;
        }

        input {
          width: 100%;
          padding: 10px;
          margin-top: 10px;
          border-radius: 10px;
          border: 1px solid #ccc;
          outline: none;
          font-size: 14px;
          text-align: center;
        }

        input:focus {
          border-color: #ff7e5f;
          box-shadow: 0 0 8px rgba(255,126,95,0.5);
        }

        .btn-group {
          display: flex;
          gap: 10px;
          margin-top: 18px;
          justify-content: center;
        }

        button {
          flex: 1;
          padding: 10px;
          border: none;
          border-radius: 10px;
          background: linear-gradient(135deg, #ff7e5f, #feb47b);
          color: white;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        button:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 15px rgba(0,0,0,0.25);
        }

        .reset {
          background: linear-gradient(135deg, #6a11cb, #2575fc);
        }
      `}</style>

      <div className="container">
        <div className="card">
          <h3>Number: <span className="value">{num}</span></h3>
          <h3>Square: <span className="value">{square}</span></h3>

          {/* Input for manual value */}
          <input
            type="number"
            value={num}
            onChange={(e) => setNum(Number(e.target.value))}
          />

          <div className="btn-group">
            <button onClick={() => setNum(prev => prev + 1)}>
              +1
            </button>

            <button className="reset" onClick={() => setNum(0)}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question10;