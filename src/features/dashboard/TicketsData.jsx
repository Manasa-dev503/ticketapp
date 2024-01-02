import axios from 'axios'
import React, { useEffect } from 'react'

function TicketsData() {
    var [ticketslist,setticketslist] = React.useState()
    useEffect(function(){
        axios({
            method:'GET',
            url:'http://localhost:3900/employeedashboard'
        })
        .then(function(res){
            //console.log(res.data)
            setticketslist(res.data)
        })

    },[])
  return (
    <div>
        <h1>TicketsData</h1>
        <ul>
            {
                ticketslist && ticketslist.map(function(ticket){
                    return <li>{ticket.issue}</li>
                })
            }
        </ul>

    </div>
  )
}

export default TicketsData