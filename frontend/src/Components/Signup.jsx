import React from 'react'
import Navbar from './Navbar'
import {Link} from 'react-router-dom';
const Signup = () => {
  return (
    <div>
        <Navbar/>
        <div className='flex justify-center items-center h-screen p-50'>
        <div className='px-8 py-8 flex-col flex gap-6 items-start border-2 w-96'>
        <div className='text-3xl font-semibold'>Sign Up</div>
        <div><input type="text" placeholder='Your Name' className='border-2 border-black rounded-lg px-14 py-2' /></div>
        <div><input type="email" placeholder='Email address' className='border-2 border-black rounded-lg px-14 py-2' /></div>
        <div><input type="password" placeholder='Password' className='border-2 border-black rounded-lg px-14 py-2'/></div>
        <div><button type='submit' className='border-2 border-red-500 px-14 py-2 rounded-lg bg-red-500'>continue</button></div>
        <div>Already have an account? <Link to="/login" className='text-red-500'>Login here</Link></div>
      </div>    
      </div>
    </div>
  )
}

export default Signup
