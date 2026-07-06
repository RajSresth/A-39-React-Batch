import React from 'react'
import ComponentB from './ComponentB'

const ComponentA = (props) => {
    console.log("props in CompA:",props)
  return (
    <div>
        <ComponentB {...props}/>
    </div>
  )
}

export default ComponentA