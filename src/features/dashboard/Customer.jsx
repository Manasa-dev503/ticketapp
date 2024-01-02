import React from 'react'
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom'
import ListTickets from './ListTickets'

function Customer() {
    var x = useParams()
    console.log(x)
    var navigate = useNavigate()
    function Raiseticket(){
        navigate(`/Customer/${x.username}/${x.id}/RaiseTicket`)


    }
    function ListTickets(){
        navigate(`/Customer/${x.username}/${x.id}/RaiseTicket/ListTickets`)
    }
  return (
    <div className='m-5'>
        <h1>Customer Dashboard</h1>
       <button className='btn btn-success' onClick={()=>{ListTickets()}}>List of Tickets</button>
       <button className='btn btn-success' style={{marginLeft:'30px'}} onClick={()=>{Raiseticket()}} >Raise Ticket</button>
       <Outlet></Outlet>
    </div>
  )
}

export default Customer