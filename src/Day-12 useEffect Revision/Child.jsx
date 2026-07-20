import React, { useState, useEffect } from "react";

const Child = () => {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("Mounting useEffect");

    return () => console.log("Cleanup fn-1");
  }, []);

  useEffect(() => {
    if (count === 0) return;

    console.log("Updating useEffect");

    return () => console.log("Cleanup fn-2");
  }, [count]);

  return (
    <div>
      <h2>Child Component</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <br />
      <br />

      <input
        type="text"
        placeholder="Search here..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Child;

// child  (prev = null, new = [0])             useEffect call (we didn't get output)
// child  (prev = [0], new = [1], cleanup: fn)        call
// child  (prev = [1], new = [2], cleanup: fn)     cleanup fn, effect fn
// child  (prev = [2], new = [3], cleanup: fn)     cleanup fn,effect fn
