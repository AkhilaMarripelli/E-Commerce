import React from 'react'
import exclusive_image from './Assets/Frontend_Assets/exclusive_image.png';
const Exclusiveoffer = () => {
  return (
    <div className='m-24'>
      <div className='flex justify-around bg-gradient-to-b from-blue-50 to-blue-400'>
        <div className='flex items-center justify-center'>
            <div className='flex-col flex gap-6 font-bold'>
            <div className='text-3xl'>Exclusive</div>
            <div className='text-3xl'>Offers For You</div>
            <div className='text-lg'>ONLY ON BEST SELLER PRODUCTS</div>
            <div><button className='border-2 px-16 py-4 bg-red-600 text-white rounded-full'>Check now</button></div>
            </div>
        </div>
        <div>
            <img src={exclusive_image} alt="image" />
        </div>
      </div>
    </div>
  )
}

export default Exclusiveoffer
