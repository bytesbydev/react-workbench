import React, { useEffect, useState } from 'react'

const Question9 = () => {
    const[num,setNum]=useState(1)
    const[double,setDouble]=useState(2)
    useEffect(()=>{
        setDouble(prev=>prev*2)
    },[num])
  return (
    <div>
        <h2>{double}</h2> <br />
        <button onClick={()=>setNum(num+1)}>Increase</button>
    </div>
  )
}

export default Question9