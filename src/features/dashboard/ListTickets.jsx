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
        <h1>TicketsList</h1>
        <ul>
            {
                tickets && tickets.map(function(ticket){
                    if(ticket.customerId === x.id){
                        return <li>{ticket.issue}</li>
                        
                    }
                   
                })
            }

        </ul>
        
    </div>
      

  )
}

export default ListTickets