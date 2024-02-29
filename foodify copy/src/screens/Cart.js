import React,{useEffect} from 'react'
import { useCart,useDispatchCart } from '../componets/ContextReducer'
import { Delete } from '@mui/icons-material'
//import trash from '../trash.svg'
function Cart() {
    let data = useCart()
    let dispatch = useDispatchCart()
    if(data.length===0)
    {
        return (
            <div className='m-5 w-100 text-center fs-3'>
                The cart is empty!!
            </div>
        )
    }
    const handleCheckOut = async () => {
        let userEmail = localStorage.getItem("userEmail");
        console.log('User Email:', userEmail)
        // console.log(data,localStorage.getItem("userEmail"),new Date())
        let response = await fetch("http://localhost:3005/api/orderData", {
          // credentials: 'include',
          // Origin:"http://localhost:3000/login",
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            order_data: data,
            email: userEmail,
            order_date: new Date().toDateString()
          })
        });
        console.log("JSON RESPONSE:::::", response.status)
        if (response.status === 200) {
          dispatch({ type: "DROP" })
        }
      }


    let totalPrice=data.reduce((total,food)=>total+food.price,0)
  return (
    <div>
      <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md rounded'>
        <table className='table table-hover'>
            <thead className='text-success fs-4'>
                <tr className='text-success'>
                    <th scope='col' className='text-success'>#</th>
                    <th scope='col'className='text-success'>Name</th>
                    <th scope='col'className='text-success'>Quantity</th>
                    <th scope='col'className='text-success'>Option</th>
                    <th scope='col'className='text-success'>Amount</th>
                    <th scope='col'className='text-success'></th>
                </tr>
            </thead>
            <tbody >
                {data.map((food,index)=>(
                    <tr>
                    <th className='text-white' scope='row'>{index+1}</th>
                    <td className='text-white'>{food.name}</td>
                    <td className='text-white'>{food.qty}</td>
                    <td className='text-white'>{food.size}</td>
                    <td className='text-white'>{food.price}</td>
                    <td ><button type="button" className="btn p-0"><Delete onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button> </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div><h1 className='fs-2'>Total Price:{totalPrice}</h1></div>
        <div>
            <button className='btn bg-success my-5' onClick={handleCheckOut}>Check Out</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
