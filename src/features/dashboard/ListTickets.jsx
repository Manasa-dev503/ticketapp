import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ListTickets() {
    var x = useParams()
    console.log(x)
    var [tickets,settickets] = React.useState()
    useEffect(function(){
        axios({
            method:'GET',
            url:'http://localhost:3900/ticketlist',
        })
        .then(function(res){
            //console.log(res.data)
            settickets(res.data)
            
        })

    },[])
    
    //console.log(tickets)
  return (
    <div>
        <center><h1 className='text-danger'>TicketsList</h1></center>
        <table className='table table-hover table-sm table-bordered' style={{fontSize:'24px'}}>
            <tr>
                <th>Issues</th>
                <th>Status</th>
            </tr>
            {
                tickets && tickets.map(function(ticket){
                    if(ticket.customerId === x.id){
                        return (
                            <tr>
                                <td>{ticket.issue}</td>
                                <td>{ticket.status}</td>
                            </tr>
                        
                        )
                        
                    }
                })
            }

        </table>
        
    </div>
      

  )
}

export default ListTickets