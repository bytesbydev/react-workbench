import React, { useEffect, useMemo, useRef, useState } from 'react'
const products=["laptop","mobile","book","games","bag","watch","lollypop"]
const Question7 = () => {
  const[text,setText]=useState("")



  const result=useMemo(()=>{
    console.log("searching")
   const items= products.filter(item=>item.includes(text))
   return items
   },[text])

  const enterRef=useRef(null)

  useEffect(()=>{
    enterRef.current.focus()
  })
  
  return (
    <div>
      <input type="text" onChange={(e)=>setText(e.target.value)} ref={enterRef} /> <br />
      entered text: {text} <br />
      The items are:{result.map((item,index)=><p key={index}>{item}</p>)}
    </div>
  )
}

export default Question7