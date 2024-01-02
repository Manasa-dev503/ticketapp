import React from 'react'
import { Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';


function Login() {
    var navigate = useNavigate()
  return (
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
                        <span style={{fontWeight:'bold'}}>User Name : </span><input type="text" name="username" onChange={values.handleChange}/>
                        <br />
                        <span style={{fontWeight:'bold'}}>Password : </span><input type="text" name="password" onChange={values.handleChange}/>
                        <br /><br />
                        <button className='btn btn-secondary'>Login</button><br />
                        <span style={{color:'black',fontWeight:'bold'}}>New User?</span>&nbsp;<Link to="/registerForm" style={{color:'green'}}>Register Here</Link>
                    

                    </form>
                )
            }
        }

        </Formik>
    </div>

   
  )
}

export default Login