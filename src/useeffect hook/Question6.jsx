import React, { useEffect, useState } from "react";

const Question6 = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <h1>Timer:</h1>
     <h2>{String(time).padStart(2, "0")} sec</h2>
     <button onClick={() => setTime(0)}>
  Reset
</button>
    </div>
  );
};

export default Question6;