import React, { useRef } from 'react'

const Question2 = () => {
    const myref=useRef(0)

  return (
    <div>
        <button onClick={()=>{myref.current=myref.current+1
            console.log(myref.current)
        }}>change</button>
    </div>
  )
}

export default Question2