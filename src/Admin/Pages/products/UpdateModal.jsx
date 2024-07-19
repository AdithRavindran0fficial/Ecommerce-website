import axios from 'axios'
import { CircleX } from 'lucide-react';
import { useFormik } from 'formik'
import * as Yup from 'yup'



const validationSchema = Yup.object({
  title:Yup.string().required("enter name"),
  description:Yup.string().required("enter product description"),
  price:Yup.string().required("enter new price"),
  category:Yup.string().required("enter the category"),
  quantity:Yup.string().required("enter quantity"),
  img:Yup.string().required("provide img url")

})

function UpdateModal({setclose,Product}) {

  const initialValues={
    title:Product.title,
    description:Product.description,
    price:Product.price,
    category:Product.category,
    quantity:Product.quantity,
    img:Product.img
  }

  const onSubmit=(values)=>{
    axios.put(`http://localhost:5000/products/${Product.id}`,values)
    .then(res=>{console.log(res.data)})
    .catch(err=>console.log("error is:",err))
    setclose()

  }
  

  
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit  
  })
  return (
    <div className='fixed inset-0 bg-gray-600 bg-opacity-50 backdrop-blur-sm flex justify-center items-center'>
      <div className='relative w-full max-w-lg mx-auto bg-white rounded-lg shadow-lg'>
        <button className='absolute top-3 right-3' onClick={setclose}>
          <CircleX size={30} />
        </button>
        <div className='px-8 py-6'>
          <h1 className='text-2xl font-bold mb-4 text-center'>Enter the product details</h1>
          <form onSubmit={formik.handleSubmit} className='flex flex-col gap-4'>
            <div>
              <input type='text' id='title' name='title' value={formik.values.title} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter the product name'
                className='w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
              {formik.touched.title && formik.errors.title && <p className='text-sm text-red-600'>{formik.errors.title}</p>}
            </div>

            <div>
              <input type='text' id='description' name='description' value={formik.values.description} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter the product description'
                className='w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
              {formik.touched.description && formik.errors.description && <p className='text-sm text-red-600'>{formik.errors.description}</p>}
            </div>

            <div>
              <input type='text' id='price' name='price' value={formik.values.price} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter the product price'
                className='w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
              {formik.touched.price && formik.errors.price && <p className='text-sm text-red-600'>{formik.errors.price}</p>}
            </div>

            <div>
              <input type='text' id='category' name='category' value={formik.values.category} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter the product category'
                className='w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
              {formik.touched.category && formik.errors.category && <p className='text-sm text-red-600'>{formik.errors.category}</p>}
            </div>

            <div>
              <input type='text' id='quantity' name='quantity' value={formik.values.quantity} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter the product quantity'
                className='w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
              {formik.touched.quantity && formik.errors.quantity && <p className='text-sm text-red-600'>{formik.errors.quantity}</p>}
            </div>

            <div>
              <input type='text' id='img' name='img' value={formik.values.img} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter the image URL'
                className='w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
              {formik.touched.img && formik.errors.img && <p className='text-sm text-red-600'>{formik.errors.img}</p>}
            </div>

            <button type='submit' className='mt-4 w-full flex items-center justify-center gap-2 px-5 py-3 font-medium bg-black rounded-md text-white'>Update product</button>
          </form>
        </div>
      </div>
    </div>
   
  )
}

export default UpdateModal