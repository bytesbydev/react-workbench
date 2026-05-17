import React, { useState, useCallback } from "react";

const Question9 = () => {
  const [search, setSearch] = useState("");

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        .container{
          height:100vh;
          display:flex;
          justify-content:center;
          align-items:center;
          background:linear-gradient(135deg,#667eea,#764ba2);
          font-family:Arial, sans-serif;
        }

        .search-box{
          width:320px;
          background:rgba(255,255,255,0.95);
          padding:30px;
          border-radius:16px;
          text-align:center;
          box-shadow:0 12px 30px rgba(0,0,0,0.2);
          transition:0.3s ease;
        }

        .search-box:hover{
          transform:translateY(-5px);
        }

        .title{
          margin-bottom:20px;
          color:#222;
        }

        .input{
          width:100%;
          padding:12px;
          border:1px solid #ccc;
          border-radius:10px;
          outline:none;
          font-size:16px;
          transition:0.3s ease;
        }

        .input:focus{
          border-color:#667eea;
          box-shadow:0 0 10px rgba(102,126,234,0.5);
        }

        .result{
          margin-top:20px;
          font-size:16px;
          color:#444;
        }

        .highlight{
          color:#667eea;
          font-weight:bold;
        }
      `}</style>

      <div className="container">
        <div className="search-box">
          <h2 className="title">🔍 Search Box</h2>

          <input
            type="text"
            placeholder="Type something..."
            value={search}
            onChange={handleSearch}
            className="input"
          />

          <p className="result">
            You typed:{" "}
            <span className="highlight">
              {search || "Nothing yet"}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Question9;