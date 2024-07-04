import React from 'react'

const Addproduct = () => {
  return (
    <div className='w-[80%] h-screen bg-gray-200'>
        <div>
            <form className='flex-col flex gap-4 items-start bg-white h-screen p-6'>
                <label htmlFor="title">Product Title</label>
                <input type="text" id="title" placeholder='Type here' className='bg-transparent border-2 border-black rounded-lg p-2 w-full'/>
                <div className='flex gap-10'>
                <div className='flex-col'>
                <div><label htmlFor="price">Price</label></div>
                <input type="text" id="price" placeholder='Type here' className='bg-transparent border-2 border-black rounded-lg p-2 w-full'/>
                </div>
                <div className='flex-col'>
                <div><label htmlFor="offerprice">OfferPrice</label></div>
                <input type="text" id="offerprice" placeholder='Type here' className='bg-transparent border-2 border-black rounded-lg p-2 w-full'/>
                </div>
                </div>
                <label htmlFor="cateogory">Cateogory</label>
                <select name="cateogory" id="cateogory">
                    <option value="women">Women</option>
                    <option value="men">men</option>
                    <option value="kids">Kids</option>
                </select>
                <label htmlFor="photo">Product Photo</label>
                <input type="file"/>
                <button type='submit' className='border-2 border-blue-400 bg-blue-400 rounded-lg px-10 py-1'>ADD</button>
            </form>
        </div>
    </div>
  )
}

export default Addproduct
