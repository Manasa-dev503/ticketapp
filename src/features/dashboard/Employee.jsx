import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Employee() {
  var [employee,setemployee] = React.useState()
  var x  = useParams()
  console.log(x)
  useEffect(function(){
    axios({
    method:'GET',
    url:'http://localhost:3900/employeedashboard'
  })
  .then(function(res){
    console.log(res.data)
    setemployee(res.data)
  })

  },[])
  

  return (
    <div>
        <h1>Employee Dashboard</h1>
        <ul>
          {
            employee && employee.map(function(emp){
              if(emp.employeeId === x.id){
                console.log(emp._id)
                return (
                  <li>{emp.issue}</li>
                )

              }
             

            })
          }
        </ul>
        
    </div>
  )
  }

export default Employee