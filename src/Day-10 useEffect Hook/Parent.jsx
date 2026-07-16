import { useState } from "react";
import Counter from "./Counter";

const Parent = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Counter />}
    </div>
  );
};

export default Parent;
