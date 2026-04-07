import React, { useEffect,useState } from 'react'

const cities=["Dehradun "," Shimla "," Delhi "," Tehri "]
const Question1 = () => {
    const[text,setText]=useState("")
    const[result,setResult]=useState(cities)

useEffect(()=>{
setResult(cities.filter(city=>city.toLowerCase().includes(text.toLowerCase())))
},[text])
  return (
    <div>
<input type="text" name='input' value={text} onChange={(e)=>setText(e.target.value)} />
<p>
 {result.map((city,index)=>
 <p key={index}>{city}</p>
)}
</p>
    </div>
  )
}

export default Question1