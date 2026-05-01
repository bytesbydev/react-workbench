import React, { useState, useCallback } from 'react';

const Question7 = () => {
  const [list, setList] = useState(["A", "B"]);
  const [input, setInput] = useState("");

  const remove = useCallback((index) => {
    setList(prev => prev.filter((_, i) => i !== index));
  }, []);

  const addItem = () => {
    if (input.trim() === "") return;
    setList(prev => [...prev, input]);
    setInput("");
  };

  return (
    <>
      <style>{`
        .container {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #ff9a9e, #fad0c4);
          font-family: 'Poppins', sans-serif;
        }

        .card {
          background: white;
          padding: 30px;
          border-radius: 16px;
          box-shadow: 0 12px 30px rgba(0,0,0,0.2);
          width: 300px;
          text-align: center;
        }

        h2 {
          margin-bottom: 15px;
          color: #333;
        }

        .input-box {
          display: flex;
          gap: 8px;
          margin-bottom: 15px;
        }

        input {
          flex: 1;
          padding: 8px;
          border-radius: 8px;
          border: 1px solid #ccc;
          outline: none;
        }

        button {
          padding: 8px 12px;
          border: none;
          border-radius: 8px;
          background: #ff6b6b;
          color: white;
          cursor: pointer;
          transition: 0.3s;
        }

        button:hover {
          background: #ff4b4b;
        }

        .list-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #f7f7f7;
          padding: 10px;
          border-radius: 8px;
          margin-top: 8px;
        }

        .remove-btn {
          background: #333;
        }

        .remove-btn:hover {
          background: #000;
        }
      `}</style>

      <div className="container">
        <div className="card">
          <h2>📝 List Manager</h2>

          <div className="input-box">
            <input
              placeholder="Add item..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={addItem}>Add</button>
          </div>

          {list.map((item, i) => (
            <div key={i} className="list-item">
              <span>{item}</span>
              <button
                className="remove-btn"
                onClick={() => remove(i)}
              >
                ✖
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Question7;