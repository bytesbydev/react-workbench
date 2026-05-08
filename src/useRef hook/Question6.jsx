import React, { useRef, useState } from "react";

const Question6 = () => {
  const saveRef = useRef(null);

  const [saved, setSaved] = useState(false);

  const change = () => {
    // clear previous timer
    clearTimeout(saveRef.current);

    // create new timer
    saveRef.current = setTimeout(() => {
      setSaved(true);

      // hide saved message
      setTimeout(() => {
        setSaved(false);
      }, 2000);
    }, 1000);
  };

  return (
    <div>
      {saved && <p>Saved</p>}

      <input type="text" onChange={change} />
    </div>
  );
};

export default Question6;