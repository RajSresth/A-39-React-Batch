import React from 'react'
import ComponentA from './ComponentA';

const Child = (props) => {
    console.log("props in child comp:",props);

  return (
    <div>
        <ComponentA {...props} />
    </div>
  )
}

export default Child