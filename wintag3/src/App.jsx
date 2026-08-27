import { useState } from 'react'
import Auth from './components/Auth';
import Navbar from './components/Navbar'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Shop from './pages/Shop';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';
import ShopItem from './components/Shopproduct';
import Cart from './pages/cart';
function App() {
 

  return (
    <>
      <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/Auth" element={<Auth/>}></Route>
    <Route path="/shop" element={<Shop/>}></Route>

    <Route path="/product/:id" element={<ProductDetails/>}></Route>
    <Route path="/shop_product/:id" element={<ShopItem/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
