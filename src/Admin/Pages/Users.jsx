import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Users() {
    const[data,setData] = useState([])
    useEffect(()=>{
        async function fetchUser(){
            let fetch = await axios.get("http://localhost:5000/Users")
            let value = fetch.data
            setData(value)
        }
        fetchUser()

    },[])
  return (
    <div className='flex flex-col justify-center items-center mt-8 max-container p-16' >
        <h1 className='font-bold text-lg underline'>Users</h1>
        <table className=' border-4 table-fixed mt-6 p-12 bg-black text-white'>
            <thead className='border-black font-bold'>
            <tr className='p-12'>
            <th className='border-4 p-3'>id</th>
            <th className='border-4 p-3'>Name</th>
            <th className='border-4 p-3'>Email</th>
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
                    <td className='border p-6'>{user.cart.map(elem=><span key={elem.id}>{elem.title},</span>)}</td>
                    
                    <td className='border p-6'><button className="bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">Remove</button></td>

                </tr>
            </tbody>

            ))
            

}
            

        </table>
    </div>
  )
}

export default Users