import {useState} from "react"


const Counter = () => {
    const [count, setCount] = useState(0); // arr = [state, updatedFunction]

    // ! Never call a hook inside any conditions or loops
    // if(count>2)
    // {
    //     const [name,setName] = useState("Raj");
    // }
    const [email, setEmail] = useState("rajshresth@gmail.com")

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