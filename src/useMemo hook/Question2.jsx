import React,{useMemo, useState} from 'react'

const numbers=[34,32,55,34,23,54,35,34,34,76,34]
const Question2 = () => {
  const[count,setCount]=useState(0)
  const result=useMemo(() => {
console.log("calculating")
let ans=0
numbers.forEach(num => {
  ans+=num
}
);
return ans
  }
    , [numbers])
  return (
    <div>
      {result}
      <br />
      count:{count}
      <button onClick={()=>setCount(count+1)}>click me</button>
    </div>
  )
}

export default Question2