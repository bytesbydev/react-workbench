import React, { useRef, useState } from 'react'

const Question4 = () => {

  const renderRef=useRef(0)
  const[count,setCount]=useState(0)
const change=()=>{
  setCount(count+1)
    renderRef.current=renderRef.current+1
}
  return (
    <div>{renderRef.current}  renders <br />
      {count} count <br />
      <button onClick={change}>re render</button>
    </div>
  )
}

export default Question4