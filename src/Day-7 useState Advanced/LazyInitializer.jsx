import { useState } from "react";

const heavyCalculation = () => {
  console.log("Heavy Calculation Fn");

  let count = 0;

  for (let i = 0; i < 1000000; i++) {
    count = count + i;
  }

  return count;
};

let x = 1;

const LazyInitializer = () => {
  const [data, setData] = useState(() => heavyCalculation() || "Default Value");

  const handleClick = () => {
    setData(`New Data-${x++}`);
  };

  console.log("Component Render");

  return (
    <div>
      <h1>Lazy Initializer</h1>
      <h2>data: {data}</h2>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default LazyInitializer;
