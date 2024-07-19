import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CartContext from './User/Context/CartContext.jsx'
import ProductContext from './Admin/Context/ProductContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartContext >
      <ProductContext>
      <App />
      </ProductContext>
    </CartContext>
  </React.StrictMode>,
)
