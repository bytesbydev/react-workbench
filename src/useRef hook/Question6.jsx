import React, { useRef, useState } from 'react'

const Question6 = () => {
  const saveRef=useRef(null)
  const[saved,setSaved]=useState(false)
  const change=()=>{
clearTimeout(saveRef.current)
saveRef.current=setTimeout(() => {
  setSaved(true)
  setTimeout(()=>setSaved(false),2000)
},1000);
}

  return (
    <div>
      {saved && <p>saved</p>}
<input type="text" onChange={change} />
    </div>
  )
}

export default Question6



