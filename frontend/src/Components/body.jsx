import React from 'react'
import introimg from './Assets/Frontend_Assets/hero_image.png';
import hello from './Assets/Frontend_Assets/hand_icon.png';
const body = () => {
  return (
    <div className=' bg-gradient-to-b from-blue-50 to-blue-400 flex justify-between items-center'>
      <div className='w-[50%] h-screen flex-col flex items-center justify-center'>
        <div className='flex-col flex gap-6'>
        <div className='font-sans text-2xl'>NEW ARRIVALS ONLY</div>
        <div className='flex-col font-semibold text-3xl'>
            <div className='flex gap-4 '>
            <span>new</span>
            <img className="w-10 h-10" src={hello} alt="hello!" />
            </div>
            <div>collections</div>
            <span>for everyone</span>
        </div>
        <div>
            <button className='border-2 px-16 py-2 rounded-full border-red-400 text-white font-bold bg-red-600'>Latest Collection</button>
        </div>
        </div>
      </div>
      <div>
        <img src={introimg} alt="image" />
      </div>
    </div>
  )
}

export default body
