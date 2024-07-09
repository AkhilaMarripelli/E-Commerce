import React, { useEffect, useState } from 'react'
import Product_card from './product_card';
const popular_women = () => {
  const[popularProducts, setPopularProducts]= useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/popularinwomen')
    .then((response)=>response.json())
    .then((data)=>setPopularProducts(data));
  },[])
  return (
    <div className='flex-col flex justify-center items-center gap-6 mt-5'>
        <div className='text-3xl font-semibold'>POPULAR IN WOMEN</div>
        <div className='flex gap-3'>
            {popularProducts.map((product,i)=>{
                return <Product_card key={i} id={product.id} name={product.name} image={product.image} old_price={product.old_price} new_price={product.new_price}/>
            })}
        </div>
    </div>
  )
}

export default popular_women
