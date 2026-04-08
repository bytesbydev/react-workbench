import React, { useEffect, useState } from 'react'

const Question7 = () => {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        document.title=`Count is ${count}`
    },[count])
  return (
    <div><button onClick={()=>setCount(count+1)}></button>
    <br /> Click {count}</div>
  )
}

export default Question7