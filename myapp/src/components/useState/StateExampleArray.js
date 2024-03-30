import React, { useState } from 'react'

function StateExampleArray() {
  const [fruits,setFruits]=useState(["Apple","Mango"])
  const addFruits = ()=>{
    setFruits([...fruits,"banana"])
  }
  return (
    <div>
      <h1>update state in array</h1>
      <ul>{
        fruits.map((fruit,index)=>(
          <li key={index}>{fruit}</li>
        ))
      }</ul>
      <button onClick={addFruits}>Add fruits</button>
    </div>
  )
}

export default StateExampleArray
