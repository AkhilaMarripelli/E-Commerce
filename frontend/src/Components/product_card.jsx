import React from 'react'
import product1 from './Assets/Frontend_Assets/product_1.png';
const Product_card = () => {
  return (
    <div>
      <div className='px-25 py-25 border-2 flex-col flex gap-4'>
                <div>
                    <img src={product1} alt="" />
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <div className='flex gap-4'>
                    <p>$80</p>
                    <p><s>$100</s></p>
                </div>
            </div>
    </div>
  )
}

export default Product_card
