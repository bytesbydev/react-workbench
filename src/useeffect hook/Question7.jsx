import React, { useEffect, useState } from 'react'

const Question7 = () => {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        document.title=`Count is ${count}`
    },[count])
  return (
    <div><button style={{padding:"10px",borderRadius:"5px",backgroundColor:"orange"}} onClick={()=>setCount(count+1)}>Click me </button>
    <br /> <br />
     Clicked the button {count} times <br />
     See at the title </div>
  )
}

export default Question7