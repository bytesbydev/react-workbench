import React, { useRef, useState } from 'react'

const Question5 = () => {

  const textRef=useRef("")
const[current,setCurrent]=useState("")
const change=(e)=>{
  textRef.current=current
  setCurrent(e.target.value)
}
  return (
    <div>
     current:   {current} <br />
     previous:  {textRef.current} <br />
      <input type="text" onChange={change} ref={textRef}  />
    </div>
  )
}

export default Question5