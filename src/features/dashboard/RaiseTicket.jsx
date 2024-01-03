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
        <div className='row'>
            <div className='col-md-11 col-lg-11'>
                <Formik
                initialValues={{issue:"",productname:"",customerId:JSON.parse(window.localStorage.getItem('user'))._id,status:"not solved"}}
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
                                <input type='text' name='issue' onChange={values.handleChange} required className='form-control' placeholder='ISSUE'/><br />
                                <input type='text' name='productname' onChange={values.handleChange} required className='form-control' placeholder='PRODUCT NAME'/><br />
                                <button className='btn btn-danger'>Raise Ticket</button>

                            </form>
                        )
                    }
                }

        </Formik>
        </div>
        </div>
        <div className='col-md-1 col-lg-1'>

        </div>
       
    </div>
  )
}

export default RaiseTicket