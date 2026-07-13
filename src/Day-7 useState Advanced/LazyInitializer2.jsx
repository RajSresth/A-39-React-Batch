import { useState } from "react";

const LazyInitializer2 = () => {
  const [user, setUser] = useState(
    () =>
      JSON.parse(localStorage.getItem("user")) || {
        fullname: "dinga",
        age: 21,
        city: "Begusarai",
      },
  );

  console.log("user:", user);

  return (
    <div>
      <h2>LazyInitializer2</h2>
      {
        // ["fullname", "age", "city", "pincode"]
        Object.keys(user).map((key) => (
          <h3 key={key}>
            {key}: {user[key]}
          </h3>
        ))
        // Object.entries(user).map(([k,v]) => <h3 key={k}>{k}: {v}</h3>)
      }
    </div>
  );
};

export default LazyInitializer2;
