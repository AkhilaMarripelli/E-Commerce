import React from 'react'
import logo from './Assets/Frontend_Assets/logo_big.png';
import insta from './Assets/Frontend_Assets/instagram_icon.png';
import pinterest from './Assets/Frontend_Assets/pintester_icon.png';
import whatsapp from './Assets/Frontend_Assets/whatsapp_icon.png';
const Footer = () => {
    return (
        <div className='m-24'>
            <div className='flex-col flex justify-center items-center bg-gradient-to-b from-blue-50 to-blue-400 m'>
                <div className='flex-col flex gap-6 m-10 justify-center items-center'>
                    <p className='text-3xl font-semibold'>Get Exclusive Offers On Your Email</p>
                    <p className='text-lg'>Subscribe to our newsletter and stay updated</p>
                    <div className='border-2  rounded-full border-black'>
                        <input className='bg-transparent px-12 py-3' type="email" placeholder='Your email id' />
                        <button className='border-2 bg-black px-12 py-3 text-white rounded-full'>Subscribe</button>
                    </div>
                </div>
                <div className='flex-col flex gap-4 mb-6'>
                    <div className='flex gap-2 justify-center items-center text-2xl font-semibold'>
                        <img src={logo} alt="logo" />
                        <p>SHOPPER</p>
                    </div>
                    <ul className='flex gap-3'>
                        <li>company</li>
                        <li>Products</li>
                        <li>Offices</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                    <div className='flex gap-3 justify-center'>
                        <img src={insta} alt="" />
                        <img src={pinterest} alt="" />
                        <img src={whatsapp} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
