import React, { useContext, useEffect, useState } from 'react'
import { Cart_Context } from '../../Context/CartContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Cart({children}) {
  const navigate = useNavigate()
  const { cart,increment,decrement,setcart} = useContext(Cart_Context)
  const id = localStorage.getItem("id")
  const {removecart}  = useContext(Cart_Context)
  useEffect(()=>{
    axios.get(`http://localhost:5000/Users/${id}`)
    .then(res=>{
      setcart(res.data.cart)
    })
  },[])


   const total = cart.reduce((acc,elem)=>acc+(elem.price*elem.quantity),0)

   if(!cart){
    return<div className='flex justify-center'> loading..........</div>
   }
      

   
  

  return (
    <div className="container w-full p-4 ">
      {cart.length > 0 ?(cart.map(elem=>{
        return <div className="border-4"key={elem.id}>
         <div className=" border-gray-400 lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
           <div className="flex items-center mb-4">
             <img className="w-16 h-16 object-cover rounded mr-4" src={elem.img} alt={elem.title} />
             <div className="text-sm">
               <p className="text-gray-900 leading-none font-bold">{elem.title}</p>
               <p className="text-gray-600">MRP : Rs {elem.price * elem.quantity}</p>
             </div>
           </div>
           <div className="flex items-center justify-between">
             <div>
               {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                 Checkout
               </button> */}
             </div>
                <div>
                  <span>Qty</span>
                  <button className='rounded-lg border-4'onClick={()=>increment(elem.id,1)}>+</button>
                  <span className='m-2'>{elem.quantity}</span>
                  <button className='rounded-lg border-4'onClick={()=>decrement(elem.id,1)}>-</button>
                </div>
             <div>
               <button className="text-red-500 hover:text-red-700 font-bold py-2 px-4" onClick={()=>{removecart(elem)}}>
                 Remove
               </button>
             </div>
           </div>
         </div>
         
       </div>
       

      })):( <div className="text-center mt-20">
        <p className="text-gray-500 text-lg">Your cart is empty</p>
      </div>)
}      <div className='text-center mt-6 border-4' >
          <span className='text-center font-bold text-lg'>Total Price</span>
          <span className='px-2'>Rs:{total}</span>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={()=>navigate("/checkout")}>Buy</button>
         </div>

    
    
  </div>
  
  )
}

export default Cart 