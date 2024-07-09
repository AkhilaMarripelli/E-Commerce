import { useState } from 'react'
import Home from './Components/Home';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
// import ListProduct from '../../admin/src/components/ListProduct';
import Mencollection from './Components/Mencollection';
import Womencollection from './Components/Womencollection';
import Kidscollection from './Components/Kidscollection';
import ShopCateogory from './Components/ShopCateogory';
import Login from './Components/Login';
import Signup from './Components/Signup';
import menbanner from './Components/Assets/Frontend_Assets/banner_mens.png';
import womenbanner from './Components/Assets/Frontend_Assets/banner_women.png';
import kidsbanner from './Components/Assets/Frontend_Assets/banner_kids.png';
import Product from './Components/Product';
import Cart from './Components/Cart';
function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      {/* <Route path='/listproduct' element={<ListProduct/>}/> */}
      <Route path='/mencollection' element={<ShopCateogory banner={menbanner} category='men'/>}/>
      <Route path='/womencollection' element={<ShopCateogory banner={womenbanner} category='women'/>}/>
      <Route path='/kidscollection' element={<ShopCateogory banner={kidsbanner} category='kid'/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='/product/:id' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
