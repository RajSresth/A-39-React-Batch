import React, { memo } from "react";

const Child = ({ user }) => {
  console.log("Child Render");
  return (
    <div>
      <h2>Child</h2>
      {/* <h4>Search Query: {search}</h4> */}
      <h4>Fullname: {user.fullname}</h4>
      <h4>Age: {user.age}</h4>
    </div>
  );
};

export default memo(Child, (prevProp, nextProp) => {
  return (
    prevProp.fullname === nextProp.fullname && prevProp.age === nextProp.age
  );
});
