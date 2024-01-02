import axios from 'axios'
import React, { useEffect } from 'react'

function Manager() {
    var [issue,setissue] = React.useState()
    var [employee,setemployee] = React.useState()
    var [employeeid,setemployeeid] = React.useState(null)
    useEffect(function(){
        axios({
            method:'GET',
            url:'http://localhost:3900/managerdashboard'
        })
        .then(function(res){
            //console.log(res.data)
            setissue(res.data)
        })
        axios({
            method:'GET',
            url:'http://localhost:3900/employee'
        })
        .then(function(res){
            console.log(res)
            setemployee(res.data)

        })

    },[])

    function assignTickettoEmployee(ticket,i){
        var updatedticket = {...ticket,employeeId:employeeid}
        //console.log(updatedticket)
        axios({
            method:'PUT',
            url:`http://localhost:3900/updateticket/${ticket._id}`,
            data:{employeeId:employeeid}
        })
        .then(function(res){
            alert('Ticket assigned successfully')
           //console.log(res)
        })
        
        
    }

   
  return (
    <div>
        <h1>Manager Dashboard</h1>
        <h3>List Of All Tickets</h3>
        <table cellPadding={5}>
            <thead>
                <th>Issue</th>
                <th>Select Employee</th>
                <th>Action</th>
            </thead>
            <tbody>
                {
                    issue && issue.map(function(ticket,i){
                        return (
                            <tr>
                                <td>{ticket.issue}</td>
                                <td>
                                    <select onChange={(e)=>{setemployeeid(e.target.value)}}>
                                        <option value="" selected disabled>select employee</option>
                                        {
                                            employee && employee.map(function(emp){
                                                return <option value={emp._id}>{emp.username}</option>
                                            })

                                        }
                                    </select>
                                </td>
                                <td>
                                   {
                                   ticket.employeeId?<button className='btn btn-success'>Assigned</button>:<button className='btn btn-warning' onClick={()=>{assignTickettoEmployee(ticket,i)}}>Assign</button>
                                   }
                                </td>
                            </tr>
                        )
                    })
                }
                
            </tbody>
            

        </table>

    </div>
  )
}

export default Manager
