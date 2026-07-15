import { useRef } from "react";

const InputRef = () => {
  const inputRef = useRef(null); // inputRef = { current:  <input type="text">}

  const handleFocus = () => {
    console.log(inputRef.current);
    inputRef.current.style.background = "red";
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <input type="text" ref={inputRef} />
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
};

export default InputRef;

/* controlled Form - 
      jab kabi me input me typed values ko state variable me store karwata hu to vo form controlled form ban jata h
*/

// Uncontrolled Form
