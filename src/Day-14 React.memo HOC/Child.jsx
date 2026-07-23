import React from 'react'

const Child = ({result}) => {
  

  
  return (
    <div className='child__container'>
      <h3>Child Component</h3>
      <h4>Result: {result}</h4>     
    </div>
  )
}


export default React.memo(Child);

/**
props = {
        user : {
          fullname: "Virat Kohli",
          age: 37,
          team: "India"
        }
}
 */