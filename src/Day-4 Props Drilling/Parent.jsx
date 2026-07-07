import React from "react";
import Child from "./Child";

const Parent = () => {
  const name = "chombu"; // ownership = parent component
  return (
    <div>
      <Child name={name} />
    </div>
  );
};

export default Parent;
