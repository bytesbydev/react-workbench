import React, { useEffect, useState } from 'react'

const Question8 = () => {
    const[color,setColor]=useState("red")
    useEffect(()=>{
        document.body.style.background=color
    },[color])
  return (
    <div>
        <button style={{padding:"10px",borderRadius:"5px",backgroundColor:"green",color:"white",cursor:"pointer"}} onClick={()=>setColor("lightgreen")}>Green</button> <br /> <br />
        <button style={{padding:"10px",borderRadius:"5px",backgroundColor:"blue",color:"white",cursor:"pointer"}} onClick={()=>setColor("lightblue")}>Blue</button> <br />
    </div>
  )
}

export default Question8