import React, { useState } from 'react'

const Question6 = () => {
    const[check,setCheck]=useState(false)
  return (
    <div>
        <input type="checkbox" onClick={()=>setCheck(true)}/>
            
        {check ?<p>Hello this is the mesage</p>:""}
       
       
    </div>
  )
}

export default Question6