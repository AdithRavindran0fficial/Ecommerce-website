import React, { useContext } from 'react'
import Modal from './Modal'
import { Cart_Context } from '../../../User/Context/CartContext'
import axios from 'axios'

function Products() {
  const {data} = useContext(Cart_Context)
  return (
    <>
    
    <div className=' mt-20 flex flex-col items-center'>
      <button className="bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 rounded mb-5">Add product</button>
      <div className="flex flex-wrap justify-center gap-4 ">
        {data.map((elem) => (
          <div key={elem.id} className="hover:scale-110 transition-transform duration-150  w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
            <div className="rounded overflow-hidden shadow-lg bg-white h-full flex flex-col">
              <img className="w-full h-64 object-cover" src={elem.img} alt={elem.title} />
              <div className="px-6 py-4 flex flex-col flex-grow">
                <div className="font-bold text-xl mb-2">{elem.title}</div>
                <p className="text-gray-900 text-lg font-semibold">MRP : Rs {elem.price}</p>
                <div className="mt-auto flex">
                  <button
                    className="bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 m-1 rounded"
                    onClick={() => addtocart(elem)}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 m-1 rounded"
                    onClick={() => addtocart(elem)}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Products