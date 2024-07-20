import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import logo from '../../../assets/Login_img/logo.png'
import axios from 'axios'



const initialValues =  {
    name:'',
    email:"",
    password:"",
    confirmpassword:"",
    cart:[],
    order:[]
}

    
    
    
    






    

    
    


// const validate = (values)=>{
//     let errors = {}
//             const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//             if(!values.name){
//                 errors.name = "Please enter your name"
//             }
//             if(!values.email){ 
//                 errors.email = "Please enter your email "
//             }else if(!emailRegex.test(values.email)){
//                 errors.email = "please enter your email"
//             }
//             if(!values.password){
//                 errors.password =  "Please enter your password."
//             }else if(values.password.length<8){
//                 errors.password = "Password must be at least 8 characters."
//             }
//             if(!values.confirmpassword){
//                 errors.confirmpassword = "confirm your password."
//             }
//             if(values.password!=values.confirmpassword){
//                 errors.passequal= "password does not match"
//             }
//             return errors

// }

const validationSchema = Yup.object({
    name:Yup.string().required("Enter your name"),
    email:Yup.string().email("invalid email").required("enter your email"),
    password:Yup.string().min(8,"Password must be at least 8 characters").required("please enter your password"),
    confirmpassword:Yup.string().oneOf([Yup.ref("password"),null],"password do not match").required('Please confirm your password')


}
)


function Signup() {
    const navigate  = useNavigate()
    const[user,setUser] = useState([])

    const onSubmit = (values)=>{
    
    axios.get("http://localhost:5000/Users")
    .then(res=>{ setUser(res.data);
        let existing_user = res.data.find(elem=>{
            return elem.email===values.email
        })
        if(existing_user){
            alert("already registered")
            navigate("/login")

        }
        else{
            axios.post("http://localhost:5000/Users",values)
        .then(respon=>{
        alert("succes")
        console.log("succcess")
    }).catch(err=>{
        alert("errorr occured")
    })

        }

        })
       
    }


    

    
    
    const formik = useFormik({
        initialValues,
        onSubmit,
        // validate
       validationSchema
    })
    // console.log(formik.touched)


  return (
<div className='border-1 flex min-h-full flex-col justify-center px-6 py-1 lg:px-8' >
    <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        {/* <img className="mx-auto h-10 w-auto" src={logo}></img> */}
        <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>Sign up your account</h2>
    </div>
        
    
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm" >
        <form className='space-y-6' onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor='name' className='block text-sm font-medium leading-6 text-gray-900'>Name</label>
                <div className='mt-2'>
                    <input type='text' id='name' name='name' onChange={formik.handleChange}value={formik.values.name} onBlur={formik.handleBlur}class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 focus:outline-none"></input>
                    {formik.touched.name && formik.errors.name ?<p className='text-xs md:text-base text-red-600'>{formik.errors.name}</p>:null}
                </div>
            </div>

            
                <div>
                    <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>Email</label>
                    <div className='mt-2'>
                    <input type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email}onBlur={formik.handleBlur}class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 focus:outline-none"></input>
                    {formik.touched.email && formik.errors.email ?<p className='text-xs md:text-base text-red-600'>{formik.errors.email}</p>:null}
                     </div>               
                </div>
    

            <div>
            
                <label htmlFor='password'className='block text-sm font-medium leading-6 text-gray-900'>Password</label>
                    <div class="mt-2">
                    <input type='password' id="password" name="password" onChange={formik.handleChange} value={formik.values.password}onBlur={formik.handleBlur}class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 focus:outline-none"></input>
                    {formik.touched.password && formik.errors.password ?<p className='text-xs md:text-base text-red-600'>{formik.errors.password}</p>:null}
                    </div>
            
                
            </div>


            <div>
                    <label htmlFor='confirmpassword'className='block text-sm font-medium leading-6 text-gray-900'>Confirm password</label>
                    <div className='mt-2'>
                        <input type='password' id='confirmpassword' name='confirmpassword'onChange={formik.handleChange} value={formik.values.confirmpassword}onBlur={formik.handleBlur}class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 focus:outline-none"></input>
                        {formik.touched.confirmpassword && formik.errors.confirmpassword ?<p className='text-xs md:text-base text-red-600'>{formik.errors.confirmpassword}</p>:null}
                        {formik.errors.passequal ?<p>{formik.errors.passequal}</p>:null}
                    </div>
        
            </div>

            <div>
                <button type='submit' class="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300">Sign up</button>
                <p className='mb-5 mt-10 text-center text-sm text-gray-500'>Already have an account? </p>
                <Link to="/login"><button class="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300">Login</button></Link>
            </div>
    </form>
    </div>

</div>  
  )
}

export default Signup