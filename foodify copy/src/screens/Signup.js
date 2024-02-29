import React, { useState } from "react";
import Navbar from "../componets/Navbar";
import {Link,useNavigate} from 'react-router-dom'
function Signup() {
    const [credentials,setCredentials] =useState({name:"",geolocation:"",email:"",password:""})
    let navigate = useNavigate()
    const handleSubmit = async(e)=>
    {
        e.preventDefault();
        const response = await fetch('http://localhost:3005/api/createUser',{
            method:'POST',
            headers:
            {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({name:credentials.name,location:credentials.geolocation,email:credentials.email,password:credentials.password})
        })
        const json= await response.json()
        console.log(json)
        if(!json.success)
        {
            alert("Enter valid credentials")
        }
        else
        {
            alert("Signup successfully")
            navigate("/login")
        }
    }
    const onChange = (e)=>
    {
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
  return (
    <>
      <Navbar />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label" >
              Name
            </label>
            <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="location" className="form-label" >
              Location
            </label>
            <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} onChange={onChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label" >
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name='email' value={credentials.email} onChange={onChange}/>
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name='password' value={credentials.password} onChange={onChange}/>
          </div>
          <button type="submit" className="text-white btn btn-success">
            Submit
          </button>
          <Link to='/login' className="btn btn-danger mx-3">Already a user</Link>
        </form>
      </div>
    </>
  );
}

export default Signup;
