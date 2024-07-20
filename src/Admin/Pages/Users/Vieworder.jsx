import React from 'react';
import { XCircle } from 'lucide-react';

function Vieworder({ selectuserorder, setView }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
      <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl">Order Details</h2>
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={() => setView(false)}
          >
            <XCircle size={24} />
          </button>
        </div>
        {selectuserorder.orders && selectuserorder.orders.map((order, index) => (
          <div key={index} className="mb-6">
            <p><strong>Name:</strong> {order.name}</p>
            <p><strong>Email:</strong> {order.email}</p>
            <p><strong>Phone:</strong> {order.phone}</p>
            <p><strong>Address:</strong> {order.address}</p>
            <p><strong>Pincode:</strong> {order.pincode}</p>
            <p><strong>City:</strong> {order.city}</p>
            <p><strong>State:</strong> {order.state}</p>
            <p><strong>Country:</strong> {order.country}</p>
            <h3 className="text-xl mt-4 mb-2">Order Items</h3>
            <p className='font-bold'>Number of items: {order.item.length}</p>
            {order.item.map((item) => (
              <div key={item.id} className="mb-2 border border-gray-400 p-3">
                <p><strong>Product:</strong> {item.title}</p>
                <p><strong>Quantity:</strong> {item.quantity}</p>
                <p><strong>Price:</strong> ₹{item.price}</p>
                <p><strong>Total:</strong> ₹{item.price * item.quantity}</p>
              </div>
            ))}
          </div>
        ))}
        <button
          className="mt-4 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700"
          onClick={() => setView(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Vieworder;

