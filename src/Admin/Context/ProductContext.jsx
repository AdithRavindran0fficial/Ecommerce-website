import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const Product_Context = createContext()
function ProductContext({children}) {
    const[data,setData] = useState([])
    const [price,setprice] = useState([])
    useEffect(()=>{
        async function fetch_product(){
            let fetch = await axios.get("http://localhost:5000/products")
            let res = await fetch.data
            setData(res)   
        }
        fetch_product()


    },[data])
    let userid = localStorage.getItem("id")
    useEffect(()=>{
        axios.get(`http://localhost:5000/Users/${userid}`)
        .then(res=>setprice(res.data.cart.reduce((acc,elem)=>{
            return acc+(elem.price*elem.quantity)

        },0)))
    },[])
    console.log(price);
    const delete_Product = (id)=>{
        axios.delete(`http://localhost:5000/products/${id}`)
        .then(()=>setData(data=>data.filter(elem=>elem.id!=id)))
    }

    
    
    

  return (

    <Product_Context.Provider value={{delete_Product,data}}>
        {children}

    </Product_Context.Provider>
  )
}

export default ProductContext