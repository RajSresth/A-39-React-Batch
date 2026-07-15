import { useState, useRef } from "react";

const TimerRef = () => {
  const [count, setCount] = useState(0);

  const timerRef = useRef(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      console.log("Advertisement");
    }, 1000);
  };

  const stopTimer = () => {
    console.log("Timer Stop");
    clearInterval(timerRef.current);
  };

  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
};

export default TimerRef;
