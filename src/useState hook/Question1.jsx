import React, { useState } from 'react'

const Question1 = () => {
    const[count,setCount]=useState(0)
      return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <span style={{fontSize:"44px"}}> Count: {count}</span> <br />
        <div style={{width:"50%",gap:"30px",display:'flex',justifyContent:'center'}}>
        <button style={{padding:"20px",fontSize:"25px",borderRadius:"20px",backgroundColor:"red",cursor:'pointer'}} onClick={()=>setCount(count+1)}>Count + 1</button>
        <button style={{padding:"20px",fontSize:"25px",borderRadius:"20px",backgroundColor:"red",cursor:'pointer'}} onClick={()=>setCount(count-1)}>Count - 1</button>
        </div>
    </div>
  )
}

export default Question1