
import React, { useEffect, useRef } from 'react'

const Question10 = () => {

const focusRef=useRef(null)
useEffect(()=>{
  focusRef.current.focus()
},[])
  return (
    <div>
      <h2>User Registration Form</h2>
      <label htmlFor="name">Name</label> <br />
     <input
  type="text"
  ref={focusRef}
  placeholder="Enter your name"
/>
      <label htmlFor="email">Email</label> <br />
     <input
  type="email"
  placeholder="Enter your email"
/>

      <label htmlFor="email">Password</label> <br />
      <input
  type="password"
  placeholder="Enter your password"
/>
    </div>
  )
}

export default Question10