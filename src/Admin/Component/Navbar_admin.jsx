import React, { useContext, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { hamburger } from '../../assets/assets/icons'
import { Cart_Context } from '../../User/Context/CartContext'

function Navbar_admin() {
  const {isloggedin,setlogin} = useContext(Cart_Context)
  
  const[toggle, setToggle] = useState(false)
  const handleToggle = ()=>{
    setToggle(!toggle)
  }
  return (
    <header className="border  px-12 py-8  absolute w-full  h-8 ">
      <nav className=' border flex  justify-between items-center -mt-1  max-container '>
        <img src="data:image/png;base64,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"
        alt='logo' width={130} height={29}>
        </img>
        <ul className='border flex justify-between items-center gap-16 max-lg:hidden'>
          <li><Link to="admin" >Home</Link></li>
          <li><Link to="adm-products">Products</Link></li>
          <li><Link to="adm-users">UserList</Link></li>
        </ul>
        <ul className='max-lg:hidden'>
          {isloggedin?
          <li className='text-center '><Link to={"/login"}>Logout</Link></li>:<li className='text-center '><Link to={"/login"}>Login</Link></li>}
        </ul>
        <div className='hidden max-lg:block'>
          <button onClick={handleToggle}><img src={hamburger} width={25} height={25}>
          </img></button>
        </div>
      </nav>
      {toggle&&(
        <div className=' bg-white absolute top-16 left-0 w-full shadow-md'>
          <ul className='flex flex-col items-center'>
            <li className='py-2'><Link to={"adm-home"} onClick={handleToggle}><p className='font-light text-lg text-slate-gray'>Home</p></Link></li> 
             <li className='py-2'><Link to={"adm-product"} onClick={handleToggle}><p className='font-light text-lg text-slate-gray'>Product</p></Link></li> 
             <li className='py-2'><Link to={"adm-users"} onClick={handleToggle}><p className='font-light text-lg text-slate-gray'>UserList</p></Link></li>
             <li className='py-2'><Link to={"/login"}onClick={handleToggle}><p className='font-light text-lg text-slate-gray'>Login</p></Link></li> 
          </ul>

        </div>

      )}
      
      <Outlet/>
    </header>
  )
}

export default Navbar_admin