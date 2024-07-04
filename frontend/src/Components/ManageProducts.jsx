import React from 'react'
import crossicon from './Assets/Admin_Assets/cross_icon.png';
import product1 from './Assets/Frontend_Assets/product_1.png';
const ManageProducts = () => {
  return (
        <div className='w-[80%] h-screen bg-gray-200'>
            <div className='flex-col flex items-center bg-white m-2 h-screen gap-6'>
                <div><p className='font-semibold text-2xl'>All Products List</p></div>
                <div className='flex justify-around w-full px-10 font-semibold'>
                    <div className='flex gap-6'>
                       <div>Products</div>
                       <div>Title</div>
                    </div>
                    <div className='flex gap-6'>
                        <div>Old Price</div>
                        <div>New Price</div>
                        <div>Cateogory</div>
                        <div>Remove</div>
                    </div>
                </div>
                <div className='flex justify-around w-full px-10'>
                    <div className='flex gap-6'>
                       <div><img className='w-14 h-14' src={product1} alt="" /></div>
                       <div><p>Lorem ipsum dolor sit.</p></div>
                    </div>
                    <div className='flex gap-6'>
                        <div><p>$120</p></div>
                        <div><p>$80</p></div>
                        <div><p>Women</p></div>
                        <div><button><img src={crossicon} alt="" /></button></div>
                    </div>
                </div>
            </div>

      </div>
  )
}

export default ManageProducts
