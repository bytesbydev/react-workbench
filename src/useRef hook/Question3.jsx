import React, { useRef, useState } from 'react'

const Question3 = () => {
    const[timer,setTimer]=useState(0)
    const intervalRef=useRef(null)


    const start=()=>{
      clearInterval(intervalRef.current)
      intervalRef.current=setInterval(() => {
        setTimer(prev=>prev+1)
      }, 1000);
    }
    const stop=()=>clearInterval(intervalRef.current)
return (
    <div>
      {String(timer).padStart(2,"0")}
<button onClick={start}>start</button>
<button onClick={stop}>stop </button>
    </div>
  )
}

export default Question3