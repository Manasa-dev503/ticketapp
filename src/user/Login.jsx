import React from 'react'
import { Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';


function Login() {
    var navigate = useNavigate()
  return (
    <div className='row'>
        <div className='col-md-11 col-lg-11'>
            <div className='loginform'>
                <h1>Login Form</h1>
                <Formik
                initialValues={{username:"",password:""}}
                onSubmit={(values)=>{
                    //console.log(values)
                    axios({
                        method:'POST',
                        headers : 'Type-Content, text/json',
                        url:'http://localhost:3900/login',
                        data:values
                    }).then(function(values){
                    // console.log(values.data[0])
                        window.localStorage.setItem('user',JSON.stringify(values.data[0]))
                        values.data.map(function(a){
                            if(a.role==="manager"){
                                navigate(`/Manager/${a.username}/${a._id}`)
                                
                            }
                            if(a.role==="customer"){
                                navigate(`/Customer/${a.username}/${a._id}`)
                                
                            }
                            if(a.role==="employee"){
                                navigate(`/Employee/${a.username}/${a._id}`)
                                
                            }
                        
                        })
                    })
                }}
                >
                {
                    (values)=>{
                        return (
                            <form onSubmit={values.handleSubmit}>
                                <input type="text" name="username" onChange={values.handleChange} required className='form-control' placeholder='USER NAME'/>
                                <br />
                                <input type="password" name="password" onChange={values.handleChange} required className='form-control' placeholder='PASSWORD'/>
                                <br />
                                <button className='btn btn-outline-dark text-light'>Login</button><br />
                                <span style={{color:'white',fontWeight:'bolder'}}>New User?</span>&nbsp;<Link to="/registerForm" className='text-warning'>Register Here</Link>
                            

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

export default Login