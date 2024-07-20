import { useFormik } from 'formik'
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import { Product_Context } from '../../../Admin/Context/ProductContext';



const initialValues = {
    name:"",
    email:"",
    phone:"",
    address:"",
    pincode:"",
    city:"",
    state:"",
    country:""

}
const phoneRegex = RegExp(
    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  );

const validationSchema = Yup.object({
    name:Yup.string().required("enter your name"),
    email:Yup.string().email("invalid email").required("enter your email"),
    phone:Yup.string().matches(phoneRegex,"invalid phone number").required("enter your phone number"),
    address:Yup.string().required("enter your address"),
    pincode:Yup.number().required("enter pincode"),
    city:Yup.string().required("enter your city"),
    state:Yup.string().required("enter your state"),
    country:Yup.string().required("enter your country"),


    
})



function Checkout() {
    const {setaddress} = useContext(Product_Context)
    const navigate = useNavigate()
    const onSubmit=(values)=>{
        setaddress(values)
        navigate("/payment")
    
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })
  return (
    <div className='border-1 flex min-h-full flex-col justify-center px-6 py-1 lg:px-8' >
    <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        {/* <img className="mx-auto h-10 w-auto" src={logo}></img> */}
        <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>Shipping/Billing Address</h2>
    </div>
        
    
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm" >
        <form className='space-y-6' onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor='name' className='block text-sm font-medium leading-6 text-gray-900'>Full Name</label>
                <div className='mt-2'>
                    <input type='text' id='name' name='name' onChange={formik.handleChange}value={formik.values.name} onBlur={formik.handleBlur}className="block w-full rounded-md border-0 py-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 focus:outline-none"></input>
                    {formik.touched.name && formik.errors.name ?<p className='text-xs md:text-base text-red-600'>{formik.errors.name}</p>:null}
                </div>
            </div>

            
                <div>
                    <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>Email</label>
                    <div className='mt-2'>
                    <input type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email}onBlur={formik.handleBlur}className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 focus:outline-none"></input>
                    {formik.touched.email && formik.errors.email ?<p className='text-xs md:text-base text-red-600'>{formik.errors.email}</p>:null}
                     </div>               
                </div>
    

            <div>
            
                <label htmlFor='phone'className='block text-sm font-medium leading-6 text-gray-900'>Phone</label>
                    <div className="mt-2">
                    <input type='tel' id="phone" name="phone" onChange={formik.handleChange} value={formik.values.phone}onBlur={formik.handleBlur}className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 focus:outline-none"></input>
                    {formik.touched.phone && formik.errors.phone?<p className='text-xs md:text-base text-red-600'>{formik.errors.phone}</p>:null}
                    </div>
            
                
            </div>


            <div>
                    <label htmlFor='address'className='block text-sm font-medium leading-6 text-gray-900'>Street Address</label>
                    <div className='mt-2'>
                        <input type='text' id='address' name='address'onChange={formik.handleChange} value={formik.values.address}onBlur={formik.handleBlur}className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 focus:outline-none"></input>
                        {formik.touched.address && formik.errors.address ?<p className='text-xs md:text-base text-red-600'>{formik.errors.address}</p>:null}
                    </div>
        
            </div>

            <div>
                    <label htmlFor='pincode'className='block text-sm font-medium leading-6 text-gray-900'>Pincode</label>
                    <div className='mt-2'>
                        <input type='tel' id='pincode' name='pincode'inputMode='numeric' maxLength={'6'} onChange={formik.handleChange} value={formik.values.pincode}onBlur={formik.handleBlur}className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 focus:outline-none"></input>
                        {formik.touched.pincode && formik.errors.pincode ?<p className='text-xs md:text-base text-red-600'>{formik.errors.pincode}</p>:null}
                    </div>
        
            </div>

            <div>
                    <label htmlFor='city'className='block text-sm font-medium leading-6 text-gray-900'>City</label>
                    <div className='mt-2'>
                        <input type='text' id='city' name='city'onChange={formik.handleChange} value={formik.values.city}onBlur={formik.handleBlur}className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 focus:outline-none"></input>
                        {formik.touched.city && formik.errors.city ?<p className='text-xs md:text-base text-red-600'>{formik.errors.city}</p>:null}
                    </div>
        
            </div>

            <div>
                    <label htmlFor='state'className='block text-sm font-medium leading-6 text-gray-900'>State</label>
                    <div className='mt-2'>
                        <input type='text' id='state' name='state'onChange={formik.handleChange} value={formik.values.state}onBlur={formik.handleBlur}className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 focus:outline-none"></input>
                        {formik.touched.state && formik.errors.state ?<p className='text-xs md:text-base text-red-600'>{formik.errors.state}</p>:null}
                    </div>
        
            </div>
            <div>
                    <label htmlFor='country'className='block text-sm font-medium leading-6 text-gray-900'>Country</label>
                    <div className='mt-2'>
                        <input type='text' id='country' name='country'onChange={formik.handleChange} value={formik.values.country}onBlur={formik.handleBlur}className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 focus:outline-none"></input>
                        {formik.touched.country && formik.errors.country ?<p className='text-xs md:text-base text-red-600'>{formik.errors.country}</p>:null}
                    </div>
        
            </div>

            <div>
                <button className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300">Order</button>
            </div>
    </form>
    </div>

</div>  
  )
}

export default Checkout