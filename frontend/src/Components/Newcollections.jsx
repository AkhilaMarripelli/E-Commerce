import React from 'react';
import new_collections from './Assets/Frontend_Assets/new_collections';

const NewCollections = () => {
  return (
    <div className='flex-col flex items-center gap-4 m-24'>
    <div>
        <p className='text-3xl font-semibold'>NEW COLLECTIONS</p>
    </div>
    <div className='flex gap-4 flex-wrap justify-around'>
      {new_collections.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>New Price: ${product.new_price}</p>
          <p>Old Price: <s>${product.old_price}</s></p>
        </div>
      ))}
    </div>
    </div>
  );
}

export default NewCollections;
