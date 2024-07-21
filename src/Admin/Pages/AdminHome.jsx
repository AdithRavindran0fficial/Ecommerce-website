import React, { useContext } from 'react'
import { Product_Context } from '../Context/ProductContext';

function AdminHome() {
  const{User,data} = useContext(Product_Context)
  return (
    <div>
      
    <div className='flex flex-col items-center justify-center mt-8 max-w-7xl mx-auto p-6 '>
      
      <h1 className='font-bold text-2xl underline mb-6'>Admin Dashboard</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 w-full'>
        <div className='bg-white shadow-md rounded-lg p-6 text-center'>
          <h2 className='text-xl font-bold mb-4'>Total Users</h2>
          <p className='text-5xl font-bold text-blue-500'>{User.length}</p>
        </div>
        <div className='bg-white shadow-md rounded-lg p-6 text-center'>
          <h2 className='text-xl font-bold mb-4'>Total Products</h2>
          <p className='text-5xl font-bold text-green-500'>{data.length}</p>
        </div>
      </div>
    </div>
    <img src='https://www.newbalance.com/dw/image/v2/AAGI_PRD/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dw9adf24fb/images/page-designer/2024/July/16310_Comp_A_O1_Desktop.jpg?sw=1616&sfrm=jpg'></img>
    </div>
  );
}

export default AdminHome