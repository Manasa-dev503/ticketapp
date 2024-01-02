import React from 'react'
import { Formik } from 'formik'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function RaiseTicket() {
    var navigate = useNavigate()
    var x = useParams()
    //console.log(x)
  return (
    <div className='loginform'>
        <h1>Add Ticket</h1>
        <Formik
        initialValues={{issue:"",productname:"",customerId:JSON.parse(window.localStorage.getItem('user'))._id}}
        onSubmit={(values)=>{
            //console.log(values)
            axios({
                method:'POST',
                headers : 'Type-Content, text/json',
                url:'http://localhost:3900/ticket',
                data:values
            })
            .then(function(values){
                //console.log(values)
                axios({
                    method:'GET',
                    headers: 'Type-Content, text/json',
                    url:'http://localhost:3900/ticketlist',
                    data:values
                })
                .then(function(values){
                    //console.log(values)
                    alert(JSON.stringify(values.data))
                    navigate(`/Customer/${x.username}/${x.id}/RaiseTicket/ListTickets`)
                   
                })
            })

        }}
        >
        {
            (values)=>{
                return (
                    <form onSubmit={values.handleSubmit}>
                        <span style={{fontWeight:'bold'}}>Issue : </span><input type='text' name='issue' onChange={values.handleChange}/><br />
                        <span style={{fontWeight:'bold'}}>Product Name: </span><input type='text' name='productname' onChange={values.handleChange}/><br /><br />
                        <button className='btn btn-secondary'>Raise Ticket</button>

                    </form>
                )
            }
        }

        </Formik>
       
    </div>
  )
}

export default RaiseTicket