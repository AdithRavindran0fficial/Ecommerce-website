import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/footer/Footer';

function Home() {
  return (
    <div className='flex flex-wrap w-auto mt-3 -ml-12 -mr-12 -mt-1.5'>
       <img src='https://www.asics.com/in/en-in/media/.renditions/wysiwyg/homepage/WEB_-_NEW_ARRIVALS_BANNER_1920x800_1_.jpg?auto=webp&format=pjpg&quality=85'></img>

      {/* <img src='https://www.newbalance.com/dw/image/v2/AAGI_PRD/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dw9adf24fb/images/page-designer/2024/July/16310_Comp_A_O1_Desktop.jpg?sw=1616&sfrm=jpg'></img> */}

      <Footer/>
     
      </div>
    
  );
}

export default Home;
