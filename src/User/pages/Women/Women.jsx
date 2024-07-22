import React, { useContext } from 'react'
import { Cart_Context } from '../../Context/CartContext'
import Footer from '../../Components/footer/Footer'

function Women({children}) {
  let {addtocart,data}= useContext(Cart_Context)
  let women = data.filter((elem)=>{
    return elem.category === "women"
  })
  return (
    <div className="flex flex-wrap justify-center">
    {women.map((elem) => (
      <div key={elem.id} className="hover:scale-110 transition-transform duration-150 max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
        <img className="w-full h-64 object-cover" src={elem.img} alt={elem.title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{elem.title}</div>
          <p className="text-gray-900 text-lg font-semibold">MRP : Rs {elem.price}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button className="bg-black hover:bg-slate-600 text-white font-bold py-2 px-4 rounded" onClick={()=>addtocart(elem)}>
            Add to Cart
          </button>
        </div>
      </div>
    ))}
     <Footer/>
  </div>
 
  )
}

export default Women