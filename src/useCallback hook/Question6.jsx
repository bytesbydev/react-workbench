import React, { useState, useCallback } from 'react';

const Question6 = () => {
  const [list, setList] = useState([]);

  const addItem = useCallback(() => {
    setList(prev => [...prev, `Item ${prev.length + 1}`]);
  }, []);

  return (
    <>
      <button onClick={addItem}>Add</button>

      {list.map((item, idx) => (
        <p key={idx}>{item}</p>
      ))}
    </>
  );
};

export default Question6;