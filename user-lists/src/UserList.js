import React from 'react'
import UserItem from './UserItem'
import AverageAge from './AverageAge'
import usersData from './users.json'

const UserList = () => {

   const nameList = usersData.filter(item=>item.role==='user')
                         .map(item=>item.name)
 
   const filteredData = usersData.filter(item=>item.role==='admin')
   const sum = filteredData.reduce((s,item)=>s+item.age,0)
 
   const average = sum / filteredData.length

   let indexKey =0

   return(<div>
      {
         nameList.map(item=>{
            indexKey++
            return <UserItem key={indexKey} name={item}/>         
         })
         
      }
         <AverageAge average={average}/>
   </div>)
}

export default UserList
