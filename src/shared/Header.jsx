import axios from 'axios'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  var navigate = useNavigate()
  var x = JSON.parse(window.localStorage.getItem('user'))
  console.log(x)
  function Logout(){
    window.localStorage.removeItem('user')
    navigate("/")
  }
  return (
    <div>
    <div>
<nav class="navbar navbar-expand-lg navbar-light bg-secondary">
<div class="container-fluid">
<a class="navbar-brand" style={{fontWeight:'bolder',color:'white'}}>Customer Ticket Raise {window.localStorage.getItem('user')?(("Hello! ")+x.username):null}</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
<ul class="navbar-nav">
  <li class="nav-item">
    <Link to="/login" id='log-btn' class="nav-link active" aria-current="page" style={{position:'absolute', left:'1030px',top:'3px',color:'white'}} onClick={()=>{Logout()}}>{window.localStorage.getItem('user')?'Logout':'Login'}</Link>&nbsp;&nbsp;&nbsp;
  </li>
</ul>
</div>
</div>
</nav>

</div>
</div>
  )
}

export default Header