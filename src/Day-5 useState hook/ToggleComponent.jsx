import {useState} from 'react'

const ToggleComponent = () => {
    const [show, setShow] = useState(false);    

    // const handleClick = () => setShow(!show);

    console.log("Toggle Component Render");

  return (
    <div>
        { show ? <h1>Welcome User</h1> : <h1>Please Login</h1>}
        <button onClick={ () => setShow(!show)}>Toggle</button>
    </div>
  )
}

export default ToggleComponent