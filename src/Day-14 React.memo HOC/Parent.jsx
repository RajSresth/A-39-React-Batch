import React, { useState, useMemo } from "react";
import "./parent.css";
import Child from "./Child";

const Parent = () => {
  const [searchText, setSearchText] = useState("");
  const [count, setCount] = useState(0);

  const findNthPrime = (n) => {
    console.log("Hevy Calculation fn");

        if (n <= 0) {
            return "Invalid Input";
        }

        let count = 0;
        let num = 1;

        while (count < n) {
            num++;

            let isPrime = true;

            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }

            if (isPrime) {
                count++;
            }
        }

        return num;
    }

  const result = useMemo( () => findNthPrime(+searchText), [searchText])

  return (
    <div className="parent__container">
      <h2>Parent Component</h2>
      <input
        type="text"
        placeholder="Enter number"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div className="counter__container">
        <h3>Count: {count}</h3>
        <button onClick={() => setCount(count + 1)}>Add</button>
      </div>
      <div>
        <Child result={result} />
      </div>
    </div>
  );
};

export default Parent;




