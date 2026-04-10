import React, { useState, useCallback } from 'react';

const Question9 = () => {
  const [search, setSearch] = useState("");

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  return <input placeholder="Search..." value={search} onChange={handleSearch} />;
};

export default Question9;