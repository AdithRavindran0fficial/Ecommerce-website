import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CartContext from './User/Context/CartContext.jsx'
import ProductContext from './Admin/Context/ProductContext.jsx'
import Searchprovider from './User/Context/Searchprovider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartContext >
    
      
      <ProductContext>
      <Searchprovider>
        
      <App />
      </Searchprovider>
      
      </ProductContext>
      
    </CartContext>
  </React.StrictMode>,
)
