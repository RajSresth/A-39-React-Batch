import {useState, useRef} from 'react'

const CounterRef = () => {

  if(a>10)
  {
      const [count,setCount] = useState(0);
     const countRef = useRef(0);  
  }


    console.log("CounterRef Component");
  return (
    <div>
        <h2>Count(state): {count}</h2>
        <button onClick={() => setCount(count + 1)}>Add</button>
        <br /><br />

        <h2>Count(Ref): {countRef.current}</h2>
        <button onClick={() => {
            countRef.current = countRef.current + 1;
            console.log("countRef:",countRef.current);
        }}>Add</button>

    </div>
  )
}

export default CounterRef