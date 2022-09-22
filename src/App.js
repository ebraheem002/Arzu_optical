import React from 'react'
import {useEffect} from 'react';

import Header from './components/Header.js';
import Swiper from './components/Swiper.js';
import Home from './components/Home.js';
import ProductPage from './components/ProductPage';
import Checkout from './components/Checkout';
import ProfilePage from './components/ProfilePage';
import Searched from './components/Searched.js';
import { CartProvider } from './CartContext';
import './App.css';
import './Header.css';
import './Swiper.css';
import './ProductPage.css'
import './Checkout.css'
import './ProfilePage.css'
import './SearchBar.css'

import { BrowserRouter , Routes,Route } from 'react-router-dom';

function App() {
 
 
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
      <Header />
      <Swiper />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/productPage/:id" element={<ProductPage/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path='/ProfilePage' element={<ProfilePage/>} />
        <Route path='/Searched/:search' element={<Searched/>} />

      </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
