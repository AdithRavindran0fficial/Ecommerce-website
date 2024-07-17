import React, { Children, createContext, useEffect, useState } from 'react'
import Cart from '../pages/Cart/Cart'
import ShoeCard from '../Components/Navbar/ShoeCard'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export const Cart_Context = createContext()

function CartContext({children}) {
  const [isloggedin,setlogin] = useState(false)
  const [cart, setcart] = useState([])
  const id = localStorage.getItem('id')
  
  //***********************setting data by fetching it from db this is passing to collection page**********////////////
  let[data,setdata] = useState([])
    useEffect(()=>{
        
        async function fetchdata(){
            try{
            let res = await axios.get("http://localhost:5000/products")
            let value = res.data 
            setdata(value)
            
            }
            catch(errors){
                alert("error occured")

            }
        }
        fetchdata()
        
    },[])
/************************************************** */

/******************adding product to cart when clicking****************** */
    
      const addtocart = (elem) => {
        if(!localStorage.getItem("id")){
          alert("please login")
          
        }
        else{
        let isPresent = false
        cart.forEach((item)=>{
          if(item.id==elem.id){
            isPresent=true
          }
        })
          if(isPresent){
             alert("already added")
          }
/*************if the product is not in cart it will put this item into users cart by  the id*/          
          else{
          axios.patch(`http://localhost:5000/Users/${id}`,
              {"cart":[...cart, elem]}
            ).then(res => console.log(res))
            .catch(err => console.log("Error "+ err))
            /***here we then add this item to cart state that has to map by spreading it */
            setcart([...cart, elem])
            alert("successfully added to cart")
         }
        }
        }
/*********************************** */       

/*******function for remove from cart ************* */
      const removecart = (item)=>{
        const newcart=(cart.filter(elem=>{
          return elem.id!=item.id
        }))
        axios.patch(`http://localhost:5000/Users/${id}`,{"cart":newcart})
        setcart(newcart)
      }

/****function for adding product quantity */
      const increment=(cart_id,num)=>{
        let increase = cart.map(item=>{
          return cart_id===item.id ? {...item,quantity:parseInt(item.quantity)+num}: item

        })
        axios.patch(`http://localhost:5000/Users/${id}`,{"cart":increase})
        setcart(increase)
        // setcart(cart=>{
        //   cart.map(item=>{
        //     return cart_id===item.id ? {...item,quantity:item.quantity+1}: item
        //   })
        // })
      }
/********function for decrease the product quantity if quantity goes below 1 is will remove form car */      

      const decrement = (cart_id, num) => {
        let decrease =  cart.map(item => 
              item.id === cart_id ? { ...item, quantity: item.quantity - num } : item
            )
            .filter(item => item.quantity > 0)
            axios.patch(`http://localhost:5000/Users/${id}`,{"cart":decrease})
            setcart(decrease)
        
      

        // setcart(cart=>{
        //   cart.map(item=>{
        //     return cart_id===item.id ? {...item,quantity:item.quantity-1}: item
        //   })
        // })


      }

      
      
      

        
      
      let size = cart.length
      

   

  

  return (
      <Cart_Context.Provider value={{data,size, cart, addtocart,removecart,increment,decrement,id,setcart}}>
        {children}
       </Cart_Context.Provider>
   )
}

export default CartContext