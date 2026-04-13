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
          background: linear-gradient(135deg, #4facfe, #00f2fe);
          font-family: 'Segoe UI', sans-serif;
        }

        .search-box {
          background: white;
          padding: 25px 30px;
          border-radius: 12px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.2);
          text-align: center;
          width: 300px;
        }

        h2 {
          margin-bottom: 15px;
          color: #333;
        }

        input {
          width: 100%;
          padding: 10px;
          border-radius: 8px;
          border: 1px solid #ccc;
          outline: none;
          font-size: 14px;
          transition: 0.3s;
        }

        input:focus {
          border-color: #4facfe;
          box-shadow: 0 0 8px rgba(79,172,254,0.5);
        }

        .result {
          margin-top: 12px;
          font-size: 14px;
          color: #555;
        }

        .highlight {
          color: #0077ff;
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
            You typed: <span className="highlight">{search || "Nothing yet"}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question9;