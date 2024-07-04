import { useState } from 'react'
import Navbar from './Navbar'
import Body from './body';
import Popular_women from './popular_women';
import Exclusiveoffer from './Exclusiveoffer';
import NewCollections from './Newcollections';
import Footer from './Footer';
function Home() {
  return (
    <>
      <Navbar/>
      <Body/>
      <Popular_women/>
      <Exclusiveoffer/>
      <NewCollections/>
      <Footer/>
    </>
  )
}

export default Home
