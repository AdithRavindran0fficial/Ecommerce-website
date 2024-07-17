// import React, { useEffect, useState} from 'react'
// import Collections from '../pages/Collections/Collections'
// import axios from 'axios'
// import Men from '../pages/Men/Men'
// import Women from '../pages/Women/Women'
// function Product() {

//     let[data,setdata] = useState([])
//     useEffect(()=>{
        
//         async function fetchdata(){
//             try{
//             let res = await axios.get("http://localhost:5000/products")
//             let value = res.data 
//             setdata(value)
            
//             }
//             catch(errors){
//                 alert("error occured")

//             }
//         }
//         fetchdata()
        
//     },[])


    
    
    
        
//   return (
    
//     <div>
//        <Collections data={data}/>
//        <Men data={data}/>
      
//        {/* <Women women = {data} /> */}
       
      
//     </div>
//   )
// }

// export default Product