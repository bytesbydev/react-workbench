import { useState } from 'react'

const Question5 = () => {

  const [details, setDetails] = useState([])
  const[name,setName]=useState("")
  const[age,setAge]=useState(0)
  const[city,setCity]=useState("")
 
  const handleClick=()=>{
    setDetails(prev=>[...prev,{name:name,age:age,city:city}])
  }
  return (
    <div>
<label htmlFor="name">Enter the name: </label> <br />
  <input  style={{padding:"2px",borderRadius:"10px"}}  type="text" name='name'  onChange={(e)=>setName(e.target.value)} /> <br />
  <label htmlFor="name">Enter the age: </label> <br />
  <input style={{padding:"2px",borderRadius:"10px"}} type="number" name='age' id="" onChange={(e)=>setAge(e.target.value)} /> <br />
  <label htmlFor="name">Enter the city: </label> <br />
  <input style={{padding:"2px",borderRadius:"10px"}} type="text" name='city'  onChange={(e)=>setCity(e.target.value)}/> <br /> <br />
  <button style={{padding:"5px",backgroundColor:"red",borderRadius:"10px",color:'white'}} onClick={handleClick}>submit</button> <br /> <br />
  Data is: <br />
  <p>{details.map((item,index)=>(
    <li key={index}>Name: {item.name}  Age:{item.age}  City:{item.city}</li>
  ))}</p>

    </div>
  )
}

export default Question5