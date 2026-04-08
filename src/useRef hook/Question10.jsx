
import React, { useEffect, useRef } from 'react'

const Question10 = () => {

const focusRef=useRef(null)
useEffect(()=>{
  focusRef.current.focus()
},[])
  return (
    <div>
      <label htmlFor="name">Name</label> <br />
      <input type="text" ref={focusRef} /> <br /> <br />
      <label htmlFor="email">Email</label> <br />
      <input type="email" /> <br /> <br />
      <label htmlFor="email">Password</label> <br />
      <input type="password" /> <br /> <br />
    </div>
  )
}

export default Question10