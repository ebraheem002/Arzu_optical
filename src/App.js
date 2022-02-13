import React from 'react';
import Header from './Header.js';
import Swiper from './Swiper.js';
import Home from './Home.js';
import ProductPage from './ProductPage'
import './App.css';
import './Header.css';
import './Swiper.css';
import './ProductPage.css'
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
        
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
