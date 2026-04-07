import React,{useRef} from 'react'

const Question1 = () => {
const myRef=useRef(null)
  return (
    <div>
        <input type="text" ref={myRef}  />
        <button onClick={()=>myRef.current.focus()}>focus </button>
    </div>
  )
}

export default Question1