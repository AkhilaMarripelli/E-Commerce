import React from 'react'
import Product_card from './product_card';
const popular_women = () => {
  return (
    <div className='flex-col flex justify-center items-center gap-6 mt-5'>
        <div className='text-3xl font-semibold'>POPULAR IN WOMEN</div>
        <div className='flex gap-3'>
            <Product_card/>
            <Product_card/>
            <Product_card/>
            <Product_card/>
        </div>
    </div>
  )
}

export default popular_women
