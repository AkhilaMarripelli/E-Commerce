import React from 'react'
import logo from './Assets/Frontend_Assets/logo.png';
const Adminnav = () => {
  return (
    <div className='flex justify-between px-10 py-2 bg-white'>
      <div className='flex justify-around items-center'>
        <img src={logo} alt="" />
        <p className='text-xl font-medium'>SHOPPER</p>
      </div>
      <div className='w-10 h-10 rounded-full bg-black'>
        {/* <img src={logo} alt="" className='rounded-full'/> */}
      </div>
    </div>
  )
}

export default Adminnav
