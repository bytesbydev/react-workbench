import React, { useEffect, useState } from 'react'

const Question6 = () => {
    const[time,setTime]=useState(0)
    useEffect(()=>{
        const id =setInterval(()=>{setTime(prev=>prev+1)},1000)
        return ()=>clearInterval(id)
    },[])
  return (
    <div>
        <h2>{time}</h2>
    </div>
  )
}

export default Question6