import { useState } from "react";

const AdvancedCounter = () => {
  const [count, setCount] = useState(0);
  const [isLogin, setIsLogin] = useState(false);

  const handleIncrease = () => {
    setCount((count) => count + 1);
    setIsLogin(!isLogin);
    // console.log("count:",count);
    // console.log("isLogin:",isLogin)
  };

  const handleDecrease = () => {
    setCount(count > 0 ? count - 1 : count);
  };

  const handleReset = () => {
    setCount(0);
  };

  console.log("AdvancedCounter Render");

  return (
    <div>
      {isLogin ? <h2>Welcome User</h2> : <h2>Please Login</h2>}
      <h2>Count: {count}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default AdvancedCounter;
