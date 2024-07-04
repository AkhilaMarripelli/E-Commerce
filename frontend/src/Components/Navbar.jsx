import React,{useState} from 'react'
import logo from './Assets/Frontend_Assets/logo.png';
import cart from './Assets/Frontend_Assets/cart_icon.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const[menu,setMenu]=useState('shop');
  return (
    <div className='flex justify-around shadow-black items-center bg-blue-200'>
      <div className='flex items-center gap-10'>
        <img src={logo} alt="logo" />
        <p className='text-black-600 size-[38px] font-semibold content-center'>SHOPPER</p>
      </div>
      <ul className='flex items-center gap-[50px] text-gray-600 hover:cursor-pointer'>
        <li onClick={()=>{setMenu('shop')}} >Shop</li>
        <li onClick={()=>{setMenu('men')}} ><Link to='/mencollection'>Men</Link></li>
        <li onClick={()=>{setMenu('women')}}><Link to='/womencollection'>Women</Link></li>
        <li onClick={()=>{setMenu('kids')}}><Link to='/kidscollection'>Kids</Link></li>
      </ul>
      <div className='flex gap-4 items-center cursor-pointer'>
        <button className='border-2 border-black px-4 py-1 rounded-full'><Link to='/login'>Login</Link></button>
        <img src={cart} alt="cart"/>
      </div>
    </div>
  )
}

export default Navbar
