import React, { useEffect } from 'react'

const Question10 = () => {
    useEffect(()=>{
        console.log("Mounted")
        return ()=>{
            console.log("Unmounted")
        }
    },[])
  return (
    <div>
        <h2>Check console</h2>
    </div>
  )
}

export default Question10