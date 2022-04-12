import React from 'react';
import Header from './Header.js';
import Swiper from './Swiper.js';
import Home from './Home.js';
import ProductPage from './ProductPage'
import Checkout from './Checkout'
import ProfilePage from './ProfilePage'
import './App.css';
import './Header.css';
import './Swiper.css';
import './ProductPage.css'
import './Checkout.css'
import './ProfilePage.css'

import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<><Header/><Swiper/><Home/></>}>
        </Route>
        <Route path="/productPage" element={<><Header/><Swiper/><ProductPage/></>}>
        </Route>
        <Route path="/checkout" element={<><Header/><Swiper/><Checkout/></>}>
        </Route>
        <Route path='/ProfilePage' element={<><Header/><Swiper/><ProfilePage/></>}></Route>
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
