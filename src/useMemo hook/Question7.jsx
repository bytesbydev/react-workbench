import React, { useEffect, useMemo, useRef, useState } from 'react'

const names=["anshika","vikas","devil","priya", "dev","aloo","alia","aaraav","vivek","rohit"]
const Question7 = () => {
const focusRef=useRef(null)

const[text,setText]=useState("")
const result=useMemo(()=>{
    const values=names.filter(item=>item.includes(text))
    return values
},[text])


const timeRef=useRef()
const handleClick=(e)=>{
clearTimeout(timeRef.current)
timeRef.current=setTimeout(()=>{setText(e.target.value)},500)
}
useEffect(()=>{
    focusRef.current.focus()
},[])
useEffect(()=>{
console.log(`${result.length} results found`)
},[result])

  return (
    
    <div>
        <label htmlFor="input">Enter something</label> <br />
        <input type="text" onChange={handleClick} ref={focusRef}  name='input' /> <br />
Result are: <br />
{result.map((item,index)=><li key={index}>{item}</li>)}
    </div>
  )
}

export default Question7