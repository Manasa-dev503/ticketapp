import React from 'react'
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Register() {
    return (
            <div>
                <Formik
                    initialValues={{ fullname: "", username: '', password: "",role:'customer'}}
                    onSubmit={(values) => {
                        console.log(values)
                        axios({
                            method:'POST',
                            headers : 'Type-Content, text/json',
                            url:'http://localhost:3900/register',
                            data:values

                        }).then(function(values){
                            console.log(values)
                        })
                     }}
                        


                    
                >
                    {
                        (values) => {
                            return (
                              
                                    <div className='loginform'>
                                        <h1>Register Form</h1>
                                        <form onSubmit={values.handleSubmit}>
                                            <span style={{fontWeight:'bold'}}>Full Name : </span><input type="text" name="fullname" onChange={values.handleChange} />
                                            <br />
                                            <span style={{fontWeight:'bold'}}>User Name : </span><input type="text" name="username" onChange={values.handleChange} />
                                            <br />
                                            <span style={{fontWeight:'bold'}}>Password : </span><input type="text" name="password" onChange={values.handleChange} />
                                            <br /><br />
                                            <button type='submit' className='btn btn-secondary'>Register</button><br />
                                        </form>
                                    </div>
                                
                            )
                        }
                    }
                </Formik>

            </div>

    )
}

export default Register