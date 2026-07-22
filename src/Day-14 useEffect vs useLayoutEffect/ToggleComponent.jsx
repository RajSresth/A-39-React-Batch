import React, {useState} from 'react'
import ComponentA from './ComponentA';

const ToggleComponent = () => {
    const [show, setShow] = useState(false);
  return (
    <div>
        <h1>ToggleComponent</h1>
        <button onClick={() => setShow(!show)}>Toggle</button>
        <br />
        <br />
        {show && <ComponentA/>}
    </div>
  )
}

export default ToggleComponent