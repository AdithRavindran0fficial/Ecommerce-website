import React from 'react'
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup'



const validationSchema = 




function Payment() {


  const initialValues = {
    accNumber:"",
    price:"",
    securityCode:""
  }
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  })
  return (
    <div className="max-w-md mx-auto mt-10 p-4 border border-gray-300 rounded-md shadow-lg">
      <form onSubmit={formik.handleChange}>
        <h2 className='text-2xl font-bold mb-6 text-center'>Payment</h2>
        
        <div>
          <label className='mb-2 mt-2 block' htmlFor="accNumber">ACC NUMBER:</label>
          <input
            placeholder='ACC NUMBER'
            type="text"
            id="accNumber"
            name="accNumber"
            value={formik.values.accNumber}
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