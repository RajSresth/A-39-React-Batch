import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmer__container">
      {Array(30)
        .fill("")
        .map((_, index) => (
          <div key={index} className="box"></div>
        ))}
    </div>
  );
};

export default Shimmer;
