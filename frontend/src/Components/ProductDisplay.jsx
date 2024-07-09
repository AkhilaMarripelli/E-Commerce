import React, { useContext } from 'react'
import star_icon from './Assets/Frontend_Assets/star_icon.png';
import star_dull_icon from './Assets/Frontend_Assets/star_dull_icon.png';
import RelatedProducts from './RelatedProducts';
import { ShopContext } from '../Context/ShopContext';
const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart} =useContext(ShopContext);

  return (
    <>
    <div className='flex m-10 gap-20 '>
      <div className='flex gap-3'>
        <div className='flex-col flex gap-2 h-20 w-20'>
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div>
            <img src={product.image} alt="" />
        </div>
      </div>
      <div className='flex-col flex gap-4 items-start'>
        <h1 className='text-3xl font-semibold'>{product.name}</h1>
        <div className='flex gap-1'>
            <img src={star_icon}alt="" />
            <img src={star_icon}alt="" />
            <img src={star_icon}alt="" />
            <img src={star_icon}alt="" />
            <img src={star_dull_icon}alt="" />
        </div>
        <div className='flex gap-4'>
            <div><s>${product.old_price}</s></div>
            <div>${product.new_price}</div>
        </div>
        <div className='font-medium'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis ipsum rem enim aspernatur, odio harum ab dolorem illo iusto quae neque deserunt reiciendis.
        </div>
        <div className='flex-col flex gap-3'>
            <h1>Select Size</h1>
            <div className='flex gap-2'>
                <div className='px-4 py-2 border-2 border-gray-100 bg-gray-100'>S</div>
                <div className='px-4 py-2 border-2 border-gray-100 bg-gray-100'>M</div>
                <div className='px-4 py-2 border-2 border-gray-100 bg-gray-100'>L</div>
                <div className='px-4 py-2 border-2 border-gray-100 bg-gray-100'>XL</div>
                <div className='px-4 py-2 border-2 border-gray-100 bg-gray-100'>XXL</div>
            </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}} className='border-2 px-10 py-2 bg-red-500 text-white font-medium'>ADD TO CART</button>
        <p><span className='font-medium'>Category: </span>women, crop top</p>
        <p><span className='font-medium'>Tags: </span>Modern</p>
      </div>
    </div>
    <RelatedProducts/>
    </>
  )
}

export default ProductDisplay
