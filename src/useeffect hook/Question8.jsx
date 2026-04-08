import React, { useEffect, useState } from 'react'

const Question8 = () => {
    const[color,setColor]=useState("red")
    useEffect(()=>{
        document.body.style.background=color
    },[color])
  return (
    <div>
        <button onClick={()=>setColor("lightblue")}>Blue</button> <br />
        <button onClick={()=>setColor("lightgreen")}>Green</button>
    </div>
  )
}

export default Question8