import React, { useState } from 'react'

const Question7 = () => {
    const[logged,setLogged]=useState(false)
    console.log(logged)
  return (
    <div>
        The user is {logged ? "Logged in":"Logged out "} <br /> <br />
        <button style={{padding:"5px",backgroundColor:"red",borderRadius:"10px",color:'white'}} onClick={()=>setLogged(prev=>!prev)}>Change</button> 
    </div>
  )
}

export default Question7