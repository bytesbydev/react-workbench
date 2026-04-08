import React, { useMemo, useState } from 'react'
const names=["anshika","dev","aloo","alia","aaraav","vicku","rohit"]
const Question8 = () => {
  const[text,setText]=useState("")
  const result=useMemo(()=>{
    console.log("filter")
    const ans=names.filter((n)=>n.startsWith("a")) 
  return ans
  },[])
  return (
    <div>
      {result.map((num,index)=><p key={index}>{num}</p>)} <br />
      text: {text} <br />
<input type="text"onChange={(e)=>setText(e.target.value)} />
    </div>
  )
}

export default Question8

