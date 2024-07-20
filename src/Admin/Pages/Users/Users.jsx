import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import UserModal from './UserModal'
import { Product_Context } from '../../Context/ProductContext'
import Vieworder from './Vieworder'


function Users() {
    const{User,remove_user} = useContext(Product_Context)
    
    const[isModal,setmodal] = useState(false)
    const[selectedUser,setUser] = useState(null)
    const[selectuserorder,setselectuserorder] = useState(null)
    const[viewModal,setView] = useState(false)
   
    const handleCart =(user)=>{
        setmodal(true)
        setUser(user)

    }
    const handleOrder = (user)=>{
        setView(true)
        setselectuserorder(user)

    }
    
  return (
    <div className='flex flex-col justify-center items-center mt-8 max-container p-16' >
        <h1 className='font-bold text-lg underline'>Users</h1>
        <table className=' border-4 table-fixed mt-6 p-12 bg-black text-white'>
            <thead className='border-black font-bold'>
            <tr className='p-12'>
            <th className='border-4 p-3'>id</th>
            <th className='border-4 p-3'>Name</th>
            <th className='border-4 p-3'>Email</th>
            <th className='border-4 p-3'>Orders</th>
            <th className='border-4 p-3'>Cart</th>
            <th className='border-4 p-3'>Remove users</th>
            </tr>
            </thead>
            {User.map((user)=>(
                <tbody key={user.id}> 
                    <tr className='border p-6' key={user.id}>
                    <td className='border p-6'>{user.id}</td>
                    <td className='border p-6'>{user.name}</td>
                    <td className='border p-6'>{user.email}</td>
                    <td className='border p-6'><button className="bg-gray-600 hover:bg-slate-300  text-white font-bold py-2 px-4 rounded"onClick={()=>handleOrder(user)}>View Order</button></td>
                    <td className='border p-6'><button className="bg-gray-600 hover:bg-slate-300 text-white font-bold py-2 px-4 rounded" onClick={()=>handleCart(user)}>View Cart</button></td>
                    <td className='border p-6'><button className="bg-gray-600 hover:bg-slate-300 text-white font-bold py-2 px-4 rounded" onClick={()=>remove_user(user.id)}>Remove</button></td>

                </tr>
            </tbody>
            

            ))
            

}
        </table>
        {viewModal&&<Vieworder selectuserorder={selectuserorder} setView={setView}/>}
        {isModal&&<UserModal selectedUser={selectedUser} setmodal={setmodal}/>}
    </div>
  )
}

export default Users