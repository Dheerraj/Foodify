import React from 'react'
import Navbar from '../componets/Navbar'
import { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
function Login() {

    const [credentials,setCredentials]= useState({email:"",password:""})
    let navigate = useNavigate()
  const handleSubmit = async(e)=>
  {
    e.preventDefault();
    const response = await fetch('http://localhost:3005/api/loginUser',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({email:credentials.email,password:credentials.password})
    });
    const json = await response.json()
    console.log(json)
    if(!json.success)
    {
      alert('Enter valid credentials')
    }
    else
    {
      //alert('Successfully logged in')
      localStorage.setItem("userEmail",credentials.email)
      localStorage.setItem("AuthToken",json.AuthToken)
      console.log(localStorage.getItem("AuthToken"))
      navigate("/")
    }
  }
  const onChange = (e)=>
  {
      setCredentials({...credentials,[e.target.name]:e.target.value})
  }
  return (
    <>
     
      <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '50vh' }}>
  <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
    <h1 className="mb-4">Login</h1>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={credentials.email} onChange={onChange} />
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={credentials.password} onChange={onChange} />
    </div>
    <button type="submit" className="btn btn-success btn-sm">Submit</button>
    <Link to='/createUser' className="btn btn-danger btn-sm mx-2">Don't have an account?</Link>
  </form>
</div>



    </>
  )
}

export default Login
