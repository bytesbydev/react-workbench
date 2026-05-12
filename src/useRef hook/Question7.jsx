import React, { useEffect, useMemo, useRef, useState } from "react";

const products = [
  "Laptop",
  "Mobile",
  "Book",
  "Games",
  "Bag",
  "Watch",
  "Lollypop",
];

const Question7 = () => {
  const [text, setText] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const filteredProducts = useMemo(() => {
    console.log("Searching products...");

    return products.filter((item) =>
      item.toLowerCase().includes(text.toLowerCase())
    );
  }, [text]);

  return (
    <div className="container">
      <div className="card">
        <h1>🛒 Product Search</h1>

        <input
          type="text"
          placeholder="Search here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          ref={inputRef}
        />

        <p>
          Searching for :
          <span>{text || " Nothing"}</span>
        </p>

        <div className="results">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item, index) => (
              <div className="item" key={index}>
                {item}
              </div>
            ))
          ) : (
            <h3>No Product Found</h3>
          )}
        </div>
      </div>

      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        .container{
          min-height:100vh;
          display:flex;
          justify-content:center;
          align-items:center;
          background:linear-gradient(135deg,#ffecd2,#fcb69f);
          font-family:Arial, Helvetica, sans-serif;
        }

        .card{
          width:350px;
          background:white;
          padding:25px;
          border-radius:15px;
          box-shadow:0 10px 25px rgba(0,0,0,0.2);
        }

        h1{
          text-align:center;
          margin-bottom:20px;
          color:#333;
        }

        input{
          width:100%;
          padding:12px;
          border:none;
          outline:none;
          border-radius:10px;
          border:1px solid #ccc;
          font-size:16px;
        }

        input:focus{
          border-color:#ff7e5f;
          box-shadow:0 0 8px rgba(255,126,95,0.5);
        }

        p{
          margin-top:15px;
          color:#555;
        }

        span{
          color:#ff5722;
          font-weight:bold;
        }

        .results{
          margin-top:20px;
        }

        .item{
          padding:10px;
          margin-bottom:10px;
          background:#fff3e0;
          border-radius:8px;
          transition:0.3s;
          cursor:pointer;
        }

        .item:hover{
          transform:scale(1.03);
        }

        h3{
          text-align:center;
          color:gray;
        }
      `}</style>
    </div>
  );
};

export default Question7;