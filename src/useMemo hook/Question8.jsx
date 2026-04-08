
import React, { useMemo } from 'react'

const students=[
    {
        name:"Anshika",
        grade:78
    },
    {
        name:"Anubha",
        grade:38
    },
    {
        name:"Dev",
        grade:98
    },
    {
        name:"Aniket",
        grade:38
    },
    {
        name:"Daniel",
        grade:68
    },
    {
        name:"Anjali",
        grade:98
    },
    {
        name:"Rahul",
        grade:38
    },
    {
        name:"Kajal",
        grade:58
    },
    {
        name:"Ankit",
        grade:38
    }
]
const Question8 = () => {
    const result=useMemo(()=>{
       
return students.filter(item=>item.grade > 50).sort((a,b)=>b.grade - a.grade)

    },[])


    return(
    <div>
        All students: <br />
        {students.map((item,index)=><li key={index}>{item.name} - {item.grade}</li>)} <br />
        Passed students: <br />
     {result.map((item,index)=>(
        <li key={index}>{item.name}  {item.grade}</li>
    ) )}
    </div>
  )
}

export default Question8
