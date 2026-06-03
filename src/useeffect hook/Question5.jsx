import React, { useEffect, useState } from "react";

const Question5 = () => {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.body.style.backgroundColor = dark ? "#111" : "#fff";
    document.body.style.color = dark ? "#fff" : "#111";

    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div>
      <h2>Theme: {dark ? "Dark" : "Light"}</h2>

      <button
        style={{
          padding: "8px 12px",
          borderRadius: "5px",
          backgroundColor: "orange",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => setDark((prev) => !prev)}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Question5;