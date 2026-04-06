import React from 'react'
import { useState } from 'react'
const Question2 = () => {
    const[text,setText]=useState("")
  return (
    <div>
        <input style={{padding:"10px",borderRadius:"20px",width:"300px"}} placeholder="Enter the text....." type="text" onChange={(e)=>setText(e.target.value)} /> <br /> <br />
       <span style={{fontSize:"24px",color:'red'}}>The text typed: {text}</span> 

        </div>
  )
}

export default Question2