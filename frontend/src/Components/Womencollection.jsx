import React from 'react'
import Navbar from './Navbar'
import banner from './Assets/Frontend_Assets/banner_women.png';
import data_product from './Assets/Frontend_Assets/data';
const Womencollection = () => {
  return (
    <div>
      <Navbar/>
      <div className='m-4 px-1 py-2'>
        <div>
            <img src={banner} alt="" />
        </div>
        <div className=' mt-4 flex justify-between gap-2 flex-wrap'>
        {data_product.map((product) => (
        <div key={product.id} className='w-80'>
          <img src={product.image} alt={product.name}/>
          <h3>{product.name}</h3>
          <p>New Price: ${product.new_price}</p>
          <p>Old Price: <s>${product.old_price}</s></p>
        </div>
      ))}
        </div>
      </div>
    </div>
  )
}

export default Womencollection
