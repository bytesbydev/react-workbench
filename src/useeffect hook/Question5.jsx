import React, { useEffect, useState } from "react";

const Question5 = () => {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.style.backgroundColor = dark ? "#111" : "#fff";
    document.body.style.color = dark ? "#fff" : "#111";

    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div>
      Toggle {dark ? "Light" : "Dark"}

      <br />
      <br />

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