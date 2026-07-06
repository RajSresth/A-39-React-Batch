import React from "react";

const Child = ({ children }) => {
  console.log("2. Child Comp");

  return (
    <div>
      <h2>Child Component</h2>
      {children}
    </div>
  );
};

export default Child;
