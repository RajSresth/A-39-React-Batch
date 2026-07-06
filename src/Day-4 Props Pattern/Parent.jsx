// import Pattern1 from "./Pattern1";

// const Parent = () => {

//     const user = {
//         fullname: "Virat Kohli",
//         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdDLUy50DVrPM3YtupY5OtnnxkqJiO8KMB-OZ4L_Q4p-tr3E3PVsp3aEyX&s=10",
//         team: "India",
//         jersyNo: 18
//     }

//     return <div>
//         {/* <Pattern1  /> */}
//         <Pattern1 {...user} />
//     </div>

// }

// export default Parent;

import Pattern2 from "./Pattern2";

const Parent = () => {
  return (
    <div>
      {/* Below one is a render prop because we are passing a function which returns some piece of jsx*/}

      <Pattern2 render={() => <h1>Spiderman</h1>} />

      {/* Below one is not render prop because we are passing a normal function */}
      {/* <Pattern2   render={(a,b) => a + b}  />  */}
    </div>
  );
};

export default Parent;
