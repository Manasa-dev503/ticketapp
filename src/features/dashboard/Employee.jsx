import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Employee() {
  var [employee,setemployee] = React.useState()
  var x  = useParams()
  //console.log(x)
  useEffect(function(){
    axios({
    method:'GET',
    url:'http://localhost:3900/employeedashboard'
  })
  .then(function(res){
    //console.log(res.data)
    setemployee(res.data)
  })
  },[])

  function ResolvedProblem(emp){
    //console.log(emp)
    axios({
      method:'PUT',
      url:`http://localhost:3900/resolvedticket/${emp._id}`,
      data:{status:"solved"}
    })
    .then(function(data){
      alert('Issue can be solved')
      window.location.reload()
    })
  }
  

  return (
    <div>
        <center><h1 style={{color:'red'}}>Employee Dashboard(List of Tickets Assigned by Manager)</h1></center>
        <div className='row'>
          <div className='col-md-1 col-lg-1'></div>
          <div className='col-md-10 col-lg-10'>
            <table className='table table-bordered table-hover' style={{fontSize:'22px'}}>
              <tr style={{textAlign:'center',textTransform:'uppercase'}}>
                <th style={{color:'orangered'}}>Issues Assigned</th>
                <th style={{color:'orangered'}}>Status</th>
              </tr>
              {
                employee && employee.map(function(emp){
                  if(emp.employeeId === x.id){
                  // console.log(emp._id)
                    return (
                      <tr>
                        <td className='text-warning' style={{fontWeight:'bold'}}>{emp.issue}</td>
                        <td align='center'>
                          {emp.status=="not solved"?<button type='button' className='btn btn-warning' style={{fontWeight:'bold'}}  onClick={()=>{ResolvedProblem(emp)}}>Pending</button>:<button className='btn btn-success' type='button' disabled style={{fontWeight:'bold'}}>Solved</button>}
                        </td>
                      </tr>
                      
                    )

                  }
                

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

export default Employee