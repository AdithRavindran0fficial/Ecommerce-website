import React, { useContext, useEffect, useState } from 'react'
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup'
import { Product_Context } from '../../../Admin/Context/ProductContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const validationSchema = Yup.object({
  accNumber:Yup.string().required("Enter Acc number"),
  securityCode:Yup.string().required("enter your code")
  
})




function Payment() {
  const[user,setuser] = useState([])
  useEffect(()=>{
    axios.get(`http://localhost:5000/Users/${userid}`)
    .then(res=>setuser(res.data))

  },[])
  
  const navigate = useNavigate()
 let {price,userid,adress,userCart} =  useContext(Product_Context)
//  console.log(userCart)

  const initialValues = {
    accNumber:"",
    price:price,
    securityCode:""
  }
  const onSubmit=()=>{
    let newOrder = {
      ...adress,
      item:[...userCart]
    }
    axios.patch(`http://localhost:5000/Users/${userid}`,{
      "orders":[...user.orders,newOrder],
      "cart":[]
    })
    .then(res=>alert("order placed"))
    .catch(er=>alert("order can't placed"))
    navigate("/")

   }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  })
 
  return (
    <div className="max-w-md mx-auto mt-10 p-4 border border-gray-300 rounded-md shadow-lg">
      <form onSubmit={formik.handleSubmit}>
        <h2 className='text-2xl font-bold mb-6 text-center'>Payment</h2>
        
        <div>
          <label className='mb-2 mt-2 block' htmlFor="accNumber">ACC NUMBER:</label>
          <input
            placeholder='ACC NUMBER'
            type="text"
            id="accNumber"
            name="accNumber"
            value={formik.values.accNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full px-3 py-2 mb-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
          {formik.touched.accNumber && formik.errors.accNumber ?<p className='text-xs md:text-base text-red-600'>{formik.errors.accNumber}</p>:null}
        </div>

        <div>
          <label className='mb-2 mt-2 block' htmlFor="price">PRICE:</label>
          <input
            placeholder='Price'
            type="text"
            id="price"
            name="price"
            value={formik.values.price}
            readOnly
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full px-3 py-2 mb-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <div>
          <label className='mb-2 mt-2 block' htmlFor="securityCode">Security Code:</label>
          <input
            placeholder='Security Code'
            type="password"
            id="securityCode"
            name="securityCode"
            value={formik.values.securityCode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full px-3 py-2 mb-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
          {formik.touched.securityCode && formik.errors.securityCode ?<p className='text-xs md:text-base text-red-600'>{formik.errors.securityCode}</p>:null}
        </div>

        <button
          className="w-full bg-black text-white p-2.5 rounded mt-4 hover:bg-slate-900 font-medium"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Payment