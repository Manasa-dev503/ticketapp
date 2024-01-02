import React from 'react'
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Register() {
    return (
        <div className='row'>
            <div className='col-md-11 col-lg-11'>
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
                                            <h2>Register Form</h2>
                                            <form onSubmit={values.handleSubmit}>
                                                <input type="text" name="fullname" onChange={values.handleChange} required className='form-control' placeholder='FULL NAME' />
                                                <br />
                                                <input type="text" name="username" onChange={values.handleChange} required className='form-control' placeholder='USER NAME' />
                                                <br />
                                                <input type="text" name="password" onChange={values.handleChange} required className='form-control' placeholder='PASSWORD' />
                                                <br />
                                                <button type='submit' className='btn btn-outline-dark text-white'>Register</button><br />
                                            </form>
                                        </div>
                                    
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

export default Register