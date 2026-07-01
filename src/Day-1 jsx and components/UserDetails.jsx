import { Fragment } from "react";

const UserDetails = (props) => {
  // props = { name: "Shresth Rajput", age: 27, data1: "Abra ka Dabra"}

  const { name, age, data1 } = props;

  return (
    <Fragment key="">
      <h2>User Details</h2>
      <h3>Username: {name}</h3>
      <h3>Age: {age}</h3>
      <h3>Data1: {data1}</h3>
    </Fragment>
  );
};

export default UserDetails;

/**
 * ! Empty Fragment
 * i) don't use id and className attribute
 * ii) we can not use key prop in empty fragment.
 *
 * ! React.Fragment:
 * i) don't use id and className attribute
 * ii) we can use key prop in React.Fragment.
 */
