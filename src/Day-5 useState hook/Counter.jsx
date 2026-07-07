import {useState} from "react"


const Counter = () => {
    const [count, setCount] = useState(0); // arr = [state, updatedFunction]

    const handleClick = () => {
        setCount(count + 1);
    }

    console.log("Counter Component")

    return (<div>
        <h2>Count: {count}</h2>
        <button onClick={ handleClick }>Add</button>
    </div>)
}







export default Counter;