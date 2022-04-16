import {React, useEffect} from 'react';

import Header from './Header.js';
import Swiper from './Swiper.js';
import Home from './Home.js';
import ProductPage from './ProductPage';
import Checkout from './Checkout';
import ProfilePage from './ProfilePage';
import { CartProvider } from './CartContext';
import './App.css';
import './Header.css';
import './Swiper.css';
import './ProductPage.css'
import './Checkout.css'
import './ProfilePage.css'

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
        <Route path="/productPage" element={<ProductPage/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path='/ProfilePage' element={<ProfilePage/>} />
      </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
