import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart,useCart } from './ContextReducer';



function Card(props) {
  let dispatch= useDispatchCart()
  let data = useCart()
  const priceRef = useRef()
  let options = props.options;
  let priceOptions = Object.keys(options)
  //let foodItem=props.foodItems
  const [qty,setQty]=useState(1)
  const [size,setSize]=useState("")
    const handleAddCart = async()=>
    {
      let food =[]
      for(const item of data)
      {
        if(item.id===props.foodItem._id)
        {
          food=item
          break;
        }
      }
      if(food !==[])
      {
        if(food.size===size)
        {
          await dispatch({type:"UPDATE",id:props.foodItem._id,price:price,qty:qty})
          return
        }
      //}
        else if(food.size!==size)
        {
        await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:price,qty:qty,size:size})
       await console.log(data)
       return 
        }
        return
      }
        await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:price,qty:qty,size:size})
    }
  
    let price = qty * parseInt(options[size])

    useEffect(()=>{
      setSize(priceRef.current.value)
    },[])

  return (
    <div>
  <div>
    <div class="card mt-3 mx-4 " style={{ width: "16rem", maxHeight: "360px" }}>
      <img src={props.foodItem.img} className="card-img-top rounded" alt="..." style={{ objectFit: 'fill', height: '120px' }} />

      <div class="card-body">
        <h5 class="card-title">{props.foodItem.name}</h5>
        <div className="container w-100">
          <select className="m-2 h-100  bg-success rounded"onChange={(e)=>setQty(e.target.value)}>
            {Array.from(Array(9), (e, i) => (
              <option key={i+1} value={i+1}>
                {i+1}
              </option>
            ))}
          </select>
          <select className="m-2 h-100  bg-success rounded" ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
            {priceOptions.map((data) => (
              <option key={data} value={data}>
                {data}
              </option>
            ))}
          </select>
          <div className="d-inline fs-5 h-100">
           {price} /-
          </div>
          <hr />
          {/* Move the button inside the card-body div */}
 <button className={`btn btn-success mt-2 justify-center`} onClick={handleAddCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
export default Card
