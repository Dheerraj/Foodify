import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { Badge } from 'react-bootstrap'
import Modal from '../Modal'
import Cart from '../screens/Cart'
import { useCart } from './ContextReducer'
function Navbar() {
  let data = useCart()
  const [cartView,setCartView]=useState(false)
  const navigate = useNavigate()
  const handleLogout = ()=>
  {
    localStorage.removeItem('AuthToken')
    navigate('/login')
  }
  //const items = useCart()
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-success fixed-top">
  <div class="container-fluid">
    <Link class="navbar-brand fs-1 fst-italic text-white fw-bold" to="/">Foodify</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto mb-2">
        <li class="nav-item">
          <Link class="nav-link active fs-5" aria-current="page" to="/">Home</Link>
        </li>

            {(localStorage.getItem('AuthToken'))?
                <li class="nav-item d-flex">
                <Link class="nav-link active fs-5" aria-current="page" to="/MyOrder">My orders</Link>
                <Link class="nav-link active fs-5" aria-current="page" to="/about">About</Link>
              </li>
            :"" 
  }
        </ul>
        {(!localStorage.getItem('AuthToken'))?
        <div className='d-flex'>
          <Link class="btn bg-white text-success mx-1" to="/login">Login</Link>
          <Link class="btn bg-white text-success mx-1" to="/createUser">Signup</Link>
       
          </div>
          :
          <div> 
            <div class="btn bg-white text-success mx-1" onClick={()=>{setCartView(true)}} >
              <Badge pill bg='danger' className='mx-2'>{data.length}</Badge>
              My Cart
              </div>
              {cartView? <Modal onClose={()=>{setCartView(false)}} ><Cart/></Modal>:null}
            <div class="btn bg-white text-success mx-1" onClick={handleLogout} >Logout</div>
            </div>
          }
    </div>
  </div>
</nav>
  )
}

export default Navbar
