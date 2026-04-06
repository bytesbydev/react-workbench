import { useState } from 'react'

const Question5 = () => {

  const [names, setnames] = useState({name:"",age:0,city:""})

  const handleClick=(e)=>{
    setnames(prev=>({
      ...prev,[e.target.name]:e.target.value
    }))
  }
  return (
    <div>
<label htmlFor="name">Enter the name: </label> <br />
  <input type="text" name='name'  onChange={handleClick} /> <br />
  <label htmlFor="name">Enter the age: </label> <br />
  <input type="number" name='age' id=""onChange={handleClick} /> <br />
  <label htmlFor="name">Enter the city: </label> <br />
  <input type="text" name='city'  onChange={handleClick}/> <br />
  <button>submit</button> <br />
  <p>Data is: </p> <br />
  <p>{names.map((item,index)=>(
    <p key={index}>Name: {item.name}  Age:{item.age}  City:{item.city}</p>
  ))}</p>

    </div>
  )
}

export default Question5