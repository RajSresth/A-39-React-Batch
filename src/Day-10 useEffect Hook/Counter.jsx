import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Counter Mounting");
    return () => console.log("Counter Unmounting");
  }, []);

  useEffect(() => {
    if (count === 0) return;
    console.log("Updating Phase");
  }, [count]);

  console.log("Counter Component");
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
};

export default Counter;
