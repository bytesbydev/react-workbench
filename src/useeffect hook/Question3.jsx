import React, { useEffect, useState } from 'react'

const Question3 = () => {

const [firstname,setFirstname]=useState("")
const [lastname,setLastname]=useState("")

useEffect(()=>{
    if(firstname==="" || lastname==="") return
        console.log(firstname,lastname)
},[firstname,lastname])
  return (
    <div>
        <input type="text" name='firstname' onChange={(e)=>setFirstname(e.target.value)} value={firstname} />
        <input type="text" name='lastname'onChange={(e)=>setLastname(e.target.value)} value={lastname} />
    </div>
  )
}

export default Question3