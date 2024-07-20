import React, { useContext, useState } from 'react'
import Modal from './Modal'
import { Product_Context } from '../../Context/ProductContext'
import UpdateModal from './UpdateModal'

function Products() {
  const [term,setTerm] = useState("")
  const [showmodal,setmodal] = useState(false)
  const [updateModal,setUpdate] = useState(false)
  const [Product,setProductid] = useState(null)
  const handleProduct=(elem)=>{
    setProductid(elem)
    setUpdate(true)

  }
  const {delete_Product,data} = useContext(Product_Context)
  // console.log(data)
  return (
    <>
    
    <div className=' mt-20 flex flex-col items-center'>
    <div className="w-full sm:w-auto mt-8 mb-8">
        <input
          type="text"
          value={term}
          onChange={(e)=>setTerm(e.target.value.toLowerCase())}
          className="w-full sm:w-56 border rounded-lg shadow-sm focus:outline-none focus:border-black px-4 py-2"
          placeholder="Search for shoes"
        />
      </div>
      <button className="bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 rounded mb-5" onClick={()=>setmodal(true)}>Add a product</button>
      {showmodal&& <Modal onClose={()=>setmodal(false)}/>}
      <div className="flex flex-wrap justify-center gap-4 ">
        {data.filter((item)=>{
          if(term===""){
            return item
          }
          else if(item.title.toLowerCase().includes(term)){
            return item
          }
          return null;
        }).map((elem) => (
          <div key={elem.id} className="hover:scale-110 transition-transform duration-150  w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
            <div className="rounded overflow-hidden shadow-lg bg-white h-full flex flex-col">
              <img className="w-full h-64 object-cover" src={elem.img} alt={elem.title} />
              <div className="px-6 py-4 flex flex-col flex-grow">
                <div className="font-bold text-xl mb-2">{elem.title}</div>
                <p className="text-gray-900 text-lg font-semibold">MRP : Rs {elem.price}</p>
                <div className="mt-auto flex">
                  <button
                    className="bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 m-1 rounded"
                    onClick={()=>delete_Product(elem.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 m-1 rounded"
                    onClick={()=>handleProduct(elem)}
                  >
                    Update
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        ))}
        {updateModal && <UpdateModal setclose = {()=>setUpdate(false)} Product = {Product}/>}
      </div>
    </div>
    </>
  );
}

export default Products