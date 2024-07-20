import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import Men from '../../User/pages/Men/Men'

export const Product_Context = createContext()

function ProductContext({children}) {
    const[User,setperson] = useState([])
    const[adress,setaddress] = useState([])
    const[data,setData] = useState([])
    const [price,setprice] = useState([])
    const[userCart,setUserCart] = useState([])
    const[male,setmale] = useState([])
    const[female,setfemale] = useState([])
    let userid = localStorage.getItem("id")

    useEffect(()=>{
        axios.get(`http://localhost:5000/Users/${userid}`)
        .then(res=>setUserCart(res.data.cart))

    },[])
    useEffect(()=>{
        async function fetch_product(){
            let fetch = await axios.get("http://localhost:5000/products")
            let res = await fetch.data
            setData(res)
            setmale(data.filter(elem=>{
                return elem.category==="men"
            }))
            setfemale(data.filter(elem=>{
                return elem.category==="women"
            }))   
        }
        fetch_product()


    },[data])

    useEffect(()=>{
        async function fetchUser(){
            let fetch = await axios.get("http://localhost:5000/Users")
            let value = fetch.data
            setperson(value)
        }
        fetchUser()

    },[User])
    
    useEffect(()=>{
        axios.get(`http://localhost:5000/Users/${userid}`)
        .then(res=>setprice(res.data.cart.reduce((acc,elem)=>{
            return acc+(elem.price*elem.quantity)

        },0)))
    },[])
    const delete_Product = (id)=>{
        axios.delete(`http://localhost:5000/products/${id}`)
        .then(()=>setData(data=>data))
    }
    
    const remove_user = (id)=>{
        axios.delete(`http://localhost:5000/Users/${id}`)
        .then(()=>setperson(User=>User))
       
    }

    
    
    
    

  return (

    <Product_Context.Provider value={{male,female,delete_Product,data,price,userid,adress,setaddress,User,remove_user,userCart}}>
        {children}

    </Product_Context.Provider>
  )
}

export default ProductContext