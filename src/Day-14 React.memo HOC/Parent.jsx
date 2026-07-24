import React, { useState, useMemo, useCallback } from "react";
import "./parent.css";
import Child from "./Child";

const Parent = () => {
  const [searchText, setSearchText] = useState("");
  const [count, setCount] = useState(0);

  const obj = useMemo(() => ({ fullname: "Tinku Singh", age: 21 }), []);

  const fn = useCallback(() => console.log("Clicked"), []);

  // const fn = useMemo(() => () => console.log("clicked"), [])

  console.log("Parent Render");

  return (
    <div className="parent__container">
      <h2>Parent Component</h2>
      <input
        type="text"
        placeholder="Enter number"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div className="counter__container">
        <h3>Count: {count}</h3>
        <button
          style={{ marginTop: "20px" }}
          onClick={() => setCount(count + 1)}
        >
          Add
        </button>
      </div>
      <div>
        <Child obj={obj} fn={fn} />
      </div>
    </div>
  );
};

export default Parent;
