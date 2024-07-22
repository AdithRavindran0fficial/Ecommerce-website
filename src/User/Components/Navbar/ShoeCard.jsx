import React, { useContext, useState } from 'react';
import { Cart_Context } from '../../Context/CartContext';
import { searchContext } from '../../Context/Searchprovider';
import Footer from '../footer/Footer';

function ShoeCard({ data }) {
  const {term} = useContext(searchContext)
  const { addtocart } = useContext(Cart_Context);
  let filtered_data = data.filter((elem)=>{
    if(elem.title===""){
      return elem
    }
    else if(elem.title.toLowerCase().includes(term)){
      return elem
    }
    return null
  })
  return (
    <>
    
    <div className=' -mt-56 flex flex-col items-center'>
      <div className="flex flex-wrap justify-center gap-4 pl-4">
       {filtered_data.map((elem) => (
          <div key={elem.id} className="hover:scale-110 transition-transform duration-150  w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
            <div className="rounded overflow-hidden shadow-lg bg-white h-full flex flex-col">
              <img className="w-full h-64 object-cover" src={elem.img} alt={elem.title} />
              <div className="px-6 py-4 flex flex-col flex-grow">
                <div className="font-bold text-xl mb-2">{elem.title}</div>
                <p className="text-gray-900 text-lg font-semibold">MRP : Rs {elem.price}</p>
                <div className="mt-auto">
                  <button
                    className="bg-black hover:bg-slate-500 text-white font-bold py-2 px-4 rounded"
                    onClick={() => addtocart(elem)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
    </>
  );
}

export default ShoeCard;
