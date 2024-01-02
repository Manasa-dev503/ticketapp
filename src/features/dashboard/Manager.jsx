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
        //var updatedticket = {...ticket,employeeId:employeeid}
        //console.log(updatedticket)
        axios({
            method:'PUT',
            url:`http://localhost:3900/updateticket/${ticket._id}`,
            data:{employeeId:employeeid}
        })
        .then(function(res){
            alert('Ticket assigned successfully')
            window.location.reload()
           //console.log(res)
        })
        
        
    }

   
  return (
    <div>
        <center><h1 style={{color:'red'}}>Manager Dashboard</h1></center>
        <h3>List Of All Tickets</h3>
        <div className='row'>
            <div className='col-md-1 col-lg-1'></div>
            <div className='col-md-10 col-lg-10'>
                <table className='table table-hover' style={{fontSize:'22px'}}>
                    <tr style={{textAlign:'center',textTransform:'uppercase'}}> 
                        <th style={{color:'orangered'}}>Issue</th>
                        <th style={{color:'orangered'}}>Select Employee</th>
                        <th style={{color:'orangered'}}>Action</th>
                    </tr>
                        {
                            issue && issue.map(function(ticket,i){
                                return (
                                    <tr style={{fontWeight:'bold'}}>
                                        <td className='text-warning'>{ticket.issue}</td>
                                        <td>
                                            <select onChange={(e)=>{setemployeeid(e.target.value)}} className='form-control text-dark' style={{fontWeight:'bold'}}>
                                                <option value="" selected disabled className='text-dark' style={{fontWeight:'bold'}}>select employee</option>
                                                {
                                                    employee && employee.map(function(emp){
                                                        return <option value={emp._id} style={{fontWeight:'bold'}} className='text-dark'>{emp.username}</option>
                                                    })

                                                }
                                            </select>
                                        </td>
                                        <td align='center'>
                                        {
                                        ticket.employeeId?<button className='btn btn-success' style={{fontWeight:'bold'}} disabled>Assigned</button>:<button className='btn btn-warning' style={{fontWeight:'bold'}} onClick={()=>{assignTickettoEmployee(ticket,i)}}>Assign</button>
                                        }
                                        </td>
                                    </tr>
                                )
                            })
                        }
        </table>
        </div>
        <div className='col-md-1 col-lg-1'>

        </div>
        </div>

    </div>
   
  )
}

export default Manager
