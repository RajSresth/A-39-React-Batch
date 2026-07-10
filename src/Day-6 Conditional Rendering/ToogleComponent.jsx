import {useState} from 'react'

const ToogleComponent = () => {
    const [show, setShow] = useState(false);


    console.log("Toggle Component", show)
  return (
    <div>
        { show && <h1>Welcome Welcome Welcome</h1>}
        { !show && <h1>Exit Exit Exit</h1>}
        <button onClick={() => setShow(!show)}>Toggle</button>
    </div>
  )
}

export default ToogleComponent