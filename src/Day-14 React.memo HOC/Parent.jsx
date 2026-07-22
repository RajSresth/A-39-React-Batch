import React, { useState, useMemo } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");


//    const memoUser= useMemo(() => {
//         return {fullname:"Raj", age:21}
//     }, [])

  console.log("Parent Render");
  return (
    <div
      style={{
        border: "1px solid black",
        width: "400px",
        height: "500px",
        padding: "25px",
        background: "lightgreen",
        borderRadius: "15px",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginBottom: "10px", fontSize: "30px" }}>
        Parent Component
      </h2>

     
      <input
        type="text"
        style={{
          padding: "10px",
          width: "100%",
          fontSize: "16px",
          borderRadius: "10px",
          border: "none",
        }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search here..."
      />


      <h3
        style={{
          fontSize: "20px",
          margin:"20px 0px"
        }}
      >
        Count: {count}
      </h3>

      <button
        style={{ padding: "8px 40px", cursor: "pointer" }}
        onClick={() => setCount(count + 1)}
      >
        Add
      </button>
     

      <div
        style={{
          border: "1px solid black",
          width: "200px",
          height: "100px",
          padding: "25px",
          background: "yellow",
          borderRadius: "15px",
          margin:"30px auto",
        
        }}
      >
        <Child user={{fullname:"Raj", age:21}} />
      </div>
    </div>
  );
};

export default Parent;


/** HOF
 The function which accepts another function or return a function.

* ! Higher Order Component (HOC)
 A component which accepts another component and must return Enhanced component.

 Component => HOC => Enhanced Component
*/
