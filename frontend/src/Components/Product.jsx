import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from './Breadcrum';
import ProductDisplay from './ProductDisplay';
import Navbar from './Navbar';
const Product = () => {
    const {all_product} = useContext(ShopContext);
    const {id} = useParams();
    const product = all_product.find((e)=>e.id===Number(id))
  return (
    <div>
      <Navbar/>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product
