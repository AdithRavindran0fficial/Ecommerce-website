import React from 'react'
import { Link } from 'react-router-dom'
 
function Home() {
  return (
    <>
    
   
    <div className='mt-6 border-4 flex flex-col'>
        
          <img src='https://www.newbalance.com/dw/image/v2/AAGI_PRD/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dw8ada2774/images/page-designer/2024/July/16591_Comp_A_Desktop.jpg'></img>
          <button className='w-32 border-slate-950 border-4 bg-red-950 relative bottom-56 left-24 h-10 hover:opacity-70'>MEN</button>
          <button className='w-32 border-slate-950 border-4 bg-red-950 relative bottom-52 left-24 h-10 hover:opacity-70'>Women</button>

      

        {/* <Link to="/signup">signup</Link><br></br>
        <Link to="/login">login</Link> */}
    </div>
    </>
  )
}

export default Home