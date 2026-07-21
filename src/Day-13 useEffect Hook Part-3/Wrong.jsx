import React, { useState, useEffect } from "react";

const Wrong = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log("useEffect");
  });

  console.log("Wrong Component");
  return (
    <div>
      <h1>Wrong Component</h1>
      <button onClick={() => setShow(!show)}>Toggle</button>
      <br />
      <br />
      {show ? <h4>Welcome user</h4> : <h4>Please Login</h4>}
    </div>
  );
};

export default Wrong;
