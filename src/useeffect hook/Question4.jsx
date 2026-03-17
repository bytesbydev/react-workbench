import React, { useEffect, useState } from "react";

const names = ["rerr", "erwr", "sdfsa", "safas", "kdfjdk", "nsdfjsh"];

const Question4 = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState(names);

  useEffect(() => {
    const timer = setTimeout(() => {
      const filtered = names.filter((name) =>
        name.toLowerCase().includes(text.toLowerCase())
      );

      setResult(filtered);
    }, 500);

    return () => clearTimeout(timer);
  }, [text]);

  return (
    <div>
      <label>Enter text to search:</label>
      <br />

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>Total Results: {result.length}</p>

      {result.map((value, index) => (
        <p key={index}>{value}</p>
      ))}
    </div>
  );
};

export default Question4;