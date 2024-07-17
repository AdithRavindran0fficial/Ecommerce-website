import React from 'react'
import { CircleX } from 'lucide-react';
import { Formik } from 'formik';

function Modal() {
  return (
    <div className='fixed inset-0 bg-gray-600 bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
        <div className=' border mt-10 flex flex-col gap-5'>
            <button className='place-self-end'><CircleX size={30}/></button>
            <div className='bg-indigo-600 rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4'>
                <h1 className='text-3xl font-extrabold'>Enter the product details</h1>
                <form>
                    <input type='text' placeholder='enter the product name'
                    className='w-full px-4 py-1 mx-2 my-2 text-black rounde'>
                    </input>
                    <button className='bg-black rounded-md text-center w-auto h-auto'>Add product</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Modal