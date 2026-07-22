import React,{useLayoutEffect, useEffect} from "react";

const ComponentA = () => {

    useEffect(() => {
        debugger;
        const container = document.getElementById("container");
        container.style.backgroundColor="yellow";
    },[])

    // useLayoutEffect(() => {
    //     debugger;
    //     const container = document.getElementById("container");
    //     container.style.backgroundColor="yellow";
    // },[])



  return <div id="container" style={{
    height: "400px",
    width: "800px",
    backgroundColor:"cyan",
    border:"2px solid black"
  }}>
  </div>;
};

export default ComponentA;
