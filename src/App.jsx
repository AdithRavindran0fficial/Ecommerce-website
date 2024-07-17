import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './User/pages/Signup/Signup'
import Login from './User/pages/Login/Login'
import Home from './User/pages/Home'
// import Product from './User/Context/Product'
import Cart from './User/pages/Cart/Cart'
import Navbar from './User/Components/Navbar/Navbar'
import Collections from './User/pages/Collections/Collections'
import Women from './User/pages/Women/Women'
import Men from './User/pages/Men/Men'
import Payment from './User/pages/payments/Payment'
import CartContext from './User/Context/CartContext'
import Navbar_admin from './Admin/Component/Navbar_admin'
import Products from './Admin/Pages/products/Products'
import Users from './Admin/Pages/Users'

function App() {


  return (
    <BrowserRouter>
      <Routes>
      <Route path='admin' element={<Navbar_admin />}>
          <Route path="adm-products" element={<Products />} />
          <Route path='adm-users' element={<Users />} />
      </Route>
        



        {/* <Route path='/' element={<Navbar />}>
          <Route path='/' element={<Home />}></Route> 
          <Route path='/collections' element={<Collections/>}></Route>
          <Route path='/men' element={<Men/>}></Route>
          <Route path='/Women' element={<Women/>}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/payment' element={<Payment />}></Route>
        </Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route> */}
      </Routes>
    </BrowserRouter>

  )
}

export default App
