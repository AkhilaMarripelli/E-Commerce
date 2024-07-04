import React from 'react'
import Navbar from './Navbar'
import banner from './Assets/Frontend_Assets/banner_mens.png';
import Product_card from './product_card';
const Mencollection = () => {
  return (
    <div>
      <Navbar/>
      <div className='m-4 px-2 py-2'>
        <div>
            <img src={banner} alt="" />
        </div>
        <div className=' mt-4 flex gap-2 flex-wrap'>
            <Product_card/>
            <Product_card/>
        </div>
      </div>
    </div>
  )
}

export default Mencollection
