import React, { useContext, useEffect, useState } from 'react'
import ShoeCard from '../../Components/Navbar/ShoeCard'
import { Cart_Context } from '../../Context/CartContext'

function Collections() {
  let {data} = useContext(Cart_Context)
  
  
    
   return (
    <div className='flex items-center justify-center mt-56'>
      <ShoeCard data={data}/> 
      
        
        
    </div>
  
  )
}

export default Collections