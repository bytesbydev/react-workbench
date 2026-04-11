import React, { useState, useCallback } from 'react';

const Question7 = () => {
  const [list, setList] = useState(["A", "B"]);

  const remove = useCallback((index) => {
    setList(prev => prev.filter((_, i) => i !== index));
  }, []);

  return (
    <>
      {list.map((item, i) => (
        <button key={i} onClick={() => remove(i)}>{item}</button>
      ))}
    </>
  );
};

export default Question7;