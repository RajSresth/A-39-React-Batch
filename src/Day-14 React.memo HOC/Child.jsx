import React from "react";

const Child = ({ obj,fn }) => {
  console.log("Child Render");
  
  return (
    <div className="child__container">
      <h3>Child Component</h3>
      <h4>Fullname: {obj.fullname}</h4>
      <h4>Age: {obj.age}</h4>

      <button style={{ marginTop: "20px",background:"blue" }} onClick={fn}>
        Print
      </button>
    </div>
  );
};

export default React.memo(Child);

/**
props = {
        user : {
          fullname: "Virat Kohli",
          age: 37,
          team: "India"
        }
}
 */
