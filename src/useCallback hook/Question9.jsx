import React, { useState, useCallback } from 'react';

const Question9 = () => {
  const [search, setSearch] = useState("");

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  return (
    <>
      <style>{`
        .container {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #667eea, #764ba2);
          font-family: 'Poppins', sans-serif;
        }

        .search-box {
          background: rgba(255, 255, 255, 0.95);
          padding: 30px;
          border-radius: 16px;
          box-shadow: 0 12px 35px rgba(0,0,0,0.25);
          text-align: center;
          width: 320px;
          backdrop-filter: blur(10px);
          transition: transform 0.3s ease;
        }

        .search-box:hover {
          transform: translateY(-5px);
        }

        h2 {
          margin-bottom: 20px;
          color: #222;
          font-weight: 600;
        }

        input {
          width: 100%;
          padding: 12px;
          border-radius: 10px;
          border: 1px solid #ddd;
          outline: none;
          font-size: 15px;
          transition: all 0.3s ease;
        }

        input:focus {
          border-color: #667eea;
          box-shadow: 0 0 10px rgba(102,126,234,0.5);
        }

        .result {
          margin-top: 15px;
          font-size: 15px;
          color: #444;
        }

        .highlight {
          color: #667eea;
          font-weight: bold;
        }
      `}</style>

      <div className="container">
        <div className="search-box">
          <h2>🔍 Search</h2>

          <input
            placeholder="Type something..."
            value={search}
            onChange={handleSearch}
          />

          <div className="result">
            You typed:{" "}
            <span className="highlight">
              {search || "Nothing yet"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question9;