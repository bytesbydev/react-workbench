import React, { useEffect, useMemo, useRef, useState } from 'react'

const Question9 = () => {
const[text,setText]=useState("")
const textRef=useRef("")
useEffect(()=>{
  textRef.current.focus()
},[])
    const result=useMemo(()=>{
      return {
 words:text.split(" ").length,
sentences:text.split(".").length ,
 characters:text.length
      }
    },[text])
  return (
    <div>
        <textarea type="text" ref={textRef} onChange={(e)=>setText(e.target.value)} /> <br />
        Words: {result.words}<br />
        Characters:{result.characters} <br />
        Sentences:{result.sentences} <br />
    </div>
  )
}

export default Question9