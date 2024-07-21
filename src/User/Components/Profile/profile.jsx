import React from 'react'
import { CircleX } from 'lucide-react';

function Profile({name,email,handlelog,onclose}) {
  return (
    <div className='fixed inset-0 bg-gray-600 bg-opacity-50 backdrop-blur-sm flex justify-center items-center'>
      <div className='relative w-full max-w-lg mx-auto bg-white rounded-lg shadow-lg'>
        <button className='absolute top-3 right-3'onClick={onclose} >
          <CircleX size={30} />
        </button>
        <div className='px-8 py-6'>
          <h1 className='text-2xl font-bold mb-4 text-center'>{name}</h1>
          <div className='flex flex-col gap-4'>
            <div>
              <label className='text-xl font-medium mb-4 text-center'>Email: <span className='text-base'>{email}</span></label>
            </div>

            <div>
              <label className='text-xl font-medium mb-4 text-center'>View Orders</label>
            </div>

            <div>
            <label className='text-xl font-medium mb-4 text-center'>Account</label>
            </div>
            
            <div>
            <label className='text-xl font-medium mb-4 text-center'>Settings</label>
            </div>

            {/* <div>
              
            </div>

            <div>
              
            </div> */}

            <button className='mt-4 w-full flex items-center justify-center gap-2 px-5 py-3 font-medium bg-black rounded-md text-white'onClick={handlelog}>Logout</button>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Profile