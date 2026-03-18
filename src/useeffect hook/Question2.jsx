import React, { useEffect, useState } from 'react'

const Question2 = () => {
    const[time,setTime]=useState(10)
    useEffect(()=>{
   if(time===0){
    return
   }
   const timer=setInterval(() => {
    setTime(prev=>prev-1)
   },1000);
   return()=>clearInterval(timer)
})

  return (
    <div>
      <h2>
{time === 0 ? "Time's Up!" : `Time is ${time}`}
</h2>
<button onClick={() => setTime(10)}>
  Reset
</button>
    </div>
  )
}

export default Question2