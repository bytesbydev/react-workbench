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
        <input type="text" onChange={(e)=>settext(e.target.value)} value={text} /> <br />
        results: 
        {result.map((value,index)=>(
            <p key={index}>{value}</p>
        ))}
    </div>
  )
}

export default Question4