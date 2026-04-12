import React, { useEffect, useState } from 'react'

const Question5 = () => {
    const[dark,setDark]=useState(false)
    useEffect(()=>{
        const saved=localStorage.getItem("theme")
        if(saved==="dark")
            setDark(true);
    },[])
    useEffect(()=>{
document.body.style.background=dark?"#111":"#fff"
document.body.style.color=dark?"#fff":"#111"
localStorage.setItem("theme", dark?"dark":"light")
    },[dark])
  return (
    <div>
        Toogle {dark?"Light":"Dark"} <br /> <br />
        <button style={{padding:"4px",borderRadius:"5px",backgroundColor:"orange"}} onClick={()=>setDark(!dark)}>Toogle the theme</button> <br />

    </div>
  )
}

export default Question5