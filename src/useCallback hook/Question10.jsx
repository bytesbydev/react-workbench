import React, { useState, useCallback } from 'react';

const Question10 = () => {
  const [num, setNum] = useState(0);

  const getSquare = useCallback(() => {
    return num * num;
  }, [num]);

  return (
    <>
      <style>{`
        .container {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #1e3c72, #2a5298);
          font-family: 'Segoe UI', sans-serif;
        }

        .card {
          background: white;
          padding: 30px 40px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          text-align: center;
          width: 280px;
          transition: transform 0.3s ease;
        }

        .card:hover {
          transform: translateY(-5px);
        }

        h3 {
          margin: 10px 0;
          color: #333;
        }

        .value {
          color: #2a5298;
          font-weight: bold;
        }

        button {
          margin-top: 15px;
          padding: 10px 20px;
          border: none;
          border-radius: 8px;
          background: linear-gradient(135deg, #ff7e5f, #feb47b);
          color: white;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        button:hover {
          transform: scale(1.05);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
      `}</style>

      <div className="container">
        <div className="card">
          <h3>Number: <span className="value">{num}</span></h3>
          <h3>Square: <span className="value">{getSquare()}</span></h3>

          <button onClick={() => setNum(num + 1)}>
            Increment 🚀
          </button>
        </div>
      </div>
    </>
  );
};

export default Question10;