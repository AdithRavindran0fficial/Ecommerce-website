import React, { useState } from 'react'
import { CircleX } from 'lucide-react';

function UserModal({selectedUser,setModal}) {
  // const[total,setTotal] = useState([])
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
      <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
        <h2 className="text-2xl mb-4">User Details</h2>
        <p><strong>ID:</strong>{selectedUser.id}</p>
        <p><strong>Name:</strong>{selectedUser.name}</p>
        <p><strong>Email:</strong>{selectedUser.email}</p>
        <h3 className="text-xl mt-4 mb-2">Cart Items</h3>
        <p className='font-bold'>Number of cart:{selectedUser.cart.length}</p>
        {selectedUser.cart&&(
          <>
           
            
            {selectedUser.cart.map((item) => (
              <div key={item.id} className="mb-2 border border-gray-400 p-3">
                <p><strong>Product:</strong> {item.title}</p>
                <p><strong>Quantity:</strong> {item.quantity}</p>
                <p><strong>Price:</strong> ₹{item.price}</p>
                <p><strong>Total:</strong>₹{(item.price * item.quantity)}</p>
              </div>
            ))}
          </>
        )}
        <button className="mt-4 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700"
        onClick={()=>setModal(false)}
        >
         <CircleX/>
        </button>
      </div>
    </div>

  )
}

export default UserModal