import React, { useEffect, useState, useRef, useMemo } from 'react'

const Question1 = () => {
  const [room,setRoom]=useState([])
  const nameRef=useRef(null)
  const marksRef=useRef(null)

  const addStudents=()=>{
let n=nameRef.current.value
let m=Number(marksRef.current.value)
if(!n | !m ) return
setRoom(prev=>[...prev,{name:n,marks:m}])
  }
console.log(room)
const result=useMemo(()=>{
  if(room.length==0) return{
    sum:0,
    highest:0,lowest:0,average:0
  }
  let sum =0
  room.forEach(item=>(sum+=item.marks))
  return{
average:(sum/room.length).toFixed(1),
highest: Math.max(...room.map(item=>item.marks)),
lowest: Math.min(...room.map(item=>item.marks))
} 
},[room])
  useEffect(()=>{
    nameRef.current.focus()
  },[])
  useEffect(()=>{
    document.title=`Average is ${result.average}` 
  },[result.average])
  return (
    <div>
      <label htmlFor="name">Enter the name: </label> <br />
      <input type="text" ref={nameRef} name="name" id="" /> <br /> <br />
      <label htmlFor="marks">Enter the marks: </label> <br />
      <input type="number" ref={marksRef}  name="marks" id="" /> <br /> <br />
      <button onClick={addStudents}>Add Student</button> <br /> <br />
      All details: <br />
      {room.map((item,index)=>(
        <li key={index}>Name: {item.name}  Marks: {item.marks}  Grade:{item.marks >50 ? "Pass":"Fail"}</li>
      ))}
 <br />
      Max marks are : {result.highest} <br />
      Min marks are : {result.lowest} <br />
      Average marks are : {result.average} <br />
    </div>
  )
}
export default Question1