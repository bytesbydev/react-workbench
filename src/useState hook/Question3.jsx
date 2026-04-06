import React, { useState } from 'react'

const Question3 = () => {
    const[isOpen,setIsOpen]=useState(true)
    const handleClick=()=>{
        setIsOpen(prev=>!prev)
    }
  return (
    <div><button style={{padding:"30px",fontSize:"40px",borderRadius:"20px",backgroundColor:isOpen?"green":"red",cursor:'pointer'}} onClick={handleClick}> {isOpen ? "ON":"OFF"}
        </button></div>
  )
}

export default Question3