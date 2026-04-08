import React,{useEffect, useMemo, useRef, useState}from 'react'

const Question5 = () => {
  
  const numbers=[31,43,23,54,36,40,2,33,43,42,32,2,62,]

  const[num,setNum]=useState(numbers)
  const numRef=useRef(null)
  const add=()=>{
    const val=value()
   setNum(prev=>[...prev,Number(val)])
    console.log(val)
  }
  const value=()=>{
    const num=numRef.current.value
    return num
  }
  const result=useMemo(()=>{
    console.log("running")
return Math.max(...num)
  },[num])
  
  console.log(numbers)

  useEffect(()=>{
    document.titel=`Max is ${result}`
  },[result])
  return (
 
    <div>
      <input type="number" onChange={value} ref={numRef} />
      <button onClick={add}>add a number</button> <br />
      
      Result: {result}</div>
  )
}

export default Question5