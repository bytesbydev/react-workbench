import React, { useEffect, useRef, useState } from "react";

const Question4 = () => {
  const renderRef = useRef(0);
  const [renderCount, setRenderCount] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    renderRef.current += 1;
    setRenderCount(renderRef.current);
  }, [count]);

  const change = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      {renderCount} renders <br />
      <h2>Render Counter</h2>
      {count} count <br />
      <button onClick={change}>re render</button>
    </div>
  );
};

export default Question4;
