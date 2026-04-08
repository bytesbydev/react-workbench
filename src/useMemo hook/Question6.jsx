import React, { useMemo, useState } from 'react'

const items=[
        {
        name:"Laptop",
        price:99989
    },
        {
        name:"Mobile",
        price:10999
    },
        {
        name:"Bike cover",
        price:999
    },
        {
        name:"Shampoo",
        price:389
    },
        {
        name:"bag",
        price:2000
    },
        {
        name:"headphone",
        price:1000
    },
        {
        name:"Watches",
        price:499
    }
]

const Question6 = () => {
    
    const[cart,setCart]=useState([])
        const add=(item)=>{
    setCart(prev=>[...prev,item])
}
const remove=(index)=>{
    setCart(cart.filter((_,item)=>item!=index))
}

const total=useMemo(()=>{
    let sum=0
cart.forEach((item)=>sum+=item.price)
return sum
},[cart])

  return (
    <div>
        Total items: 
{items.map((item,index)=>
    <span style={{display:'flex',gap:"10px"}
    } key={index}>
        <button onClick={()=>add(item)}>Add</button>
    <p>{item.name} - {item.price}</p>
    </span>
)} <br />
        Cart items: 
{cart.map((item,index)=>
    <span  key={index} style={{display:'flex',gap:"10px"}
    }>
        <button onClick={()=>remove(index)}>Remove</button>
    <p>{item.name} - ${item.price}</p>
    </span>
)}
Total: {total}
    </div>
  )
}

export default Question6