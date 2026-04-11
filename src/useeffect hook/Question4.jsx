import React, { useState,useEffect } from 'react'
const names=["rerr","erwr","sdfsa","safas","kdfjdk","nsdfjsh"]
const Question4 = () => {
    const [text, settext] = useState("")
    const [result,setResult]=useState(names)
    useEffect(()=>{
const timer=setTimeout(()=>{
    setResult(names.filter(name=>name.toLowerCase().includes(text.toLowerCase())))
},500)

 return()=>clearTimeout(timer)
    },[text])
  return (
    <div>
        <label htmlFor="text">Enter the text to be searched: </label> <br />
        <input type="text" onChange={(e)=>settext(e.target.value)} value={text} /> <br />
         <h3>Results: </h3>
        {result.map((value,index)=>(
            <p key={index}>{value}</p>
        ))}
    </div>
  )
}

export default Question4