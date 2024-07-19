import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserModal from './UserModal'


function Users() {
    const[data,setData] = useState([])
    const[isModal,setmodal] = useState(false)
    const[selectedUser,setUser] = useState(null)
    useEffect(()=>{
        async function fetchUser(){
            let fetch = await axios.get("http://localhost:5000/Users")
            let value = fetch.data
            setData(value)
        }
        fetchUser()

    },[])
    const handleCart =(user)=>{
        setmodal(true)
        setUser(user)

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
            {data.map((user)=>(
                <tbody key={user.id}> 
                    <tr className='border p-6' key={user.id}>
                    <td className='border p-6'>{user.id}</td>
                    <td className='border p-6'>{user.name}</td>
                    <td className='border p-6'>{user.email}</td>
                    <td className='border p-6'><button className="bg-gray-600 hover:bg-slate-300  text-white font-bold py-2 px-4 rounded">View Order</button></td>
                    <td className='border p-6'><button className="bg-gray-600 hover:bg-slate-300 text-white font-bold py-2 px-4 rounded" onClick={()=>handleCart(user)}>View Cart</button></td>
                    <td className='border p-6'><button className="bg-gray-600 hover:bg-slate-300 text-white font-bold py-2 px-4 rounded">Remove</button></td>

                </tr>
            </tbody>
            

            ))
            

}
        </table>
        {isModal&&<UserModal selectedUser={selectedUser} setmodal={setmodal}/>}
    </div>
  )
}

export default Users