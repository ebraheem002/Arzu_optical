import React from 'react';
import Header from './Header.js';
import Swiper from './Swiper.js';
import Home from './Home.js';
import './App.css';
import './Header.css';
import './Swiper.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';



function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<><Header/><Swiper/><Home/></>}>
        </Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
