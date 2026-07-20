import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h2>Parent Component</h2>
      <button onClick={() => setShow(!show)}>Toggle</button>
      <br />
      <br />
      {show && <Child />}
    </div>
  );
};

export default Parent;
