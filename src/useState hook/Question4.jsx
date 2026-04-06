import React, { useState } from 'react'

const Question4 = () => {
    const[all,setAll]=useState([])
    const[task,setTask]=useState("")
    const handleLog=()=>setAll(prev=>[...prev,task])
  return (
    <div style={{fontSize:"18px"}}>
        <label style={{fontSize:"18px",marginLeft:"7px"}} htmlFor="task">Enter the task: </label> <br />
      <input style={{width:"300px",padding:"10px",borderRadius:"30px",fontSize:"14px"}} type="text" onChange={(e)=>setTask(e.target.value)}/> <br /> <br />
      <button style={{padding:"10px",fontSize:"15px",borderRadius:"10px",backgroundColor:"black",color:"white",cursor:'pointer'}} onClick={handleLog}>Add the task</button>  <br /> <br />
      All tasks are: <br />
        {all.map((item,index)=>(
            <div>
            <span style={{fontSize:"18px"}} key={index}>{index+1}. {item}</span> <br />
            </div>
        ))}
    </div>
  )
}

export default Question4