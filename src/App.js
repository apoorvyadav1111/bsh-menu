import React from 'react';
import Home from './pages/Home';
import Menu from './pages/Menu';
import {Routes, Route, useLocation, Link } from 'react-router-dom';
import logo from './data/logo.png';
import { AnimatePresence } from 'framer-motion';
const App = () => {
  const location = useLocation();
  return (
    <div className>
      <div className='header'>
        <Link to='/'>
          <img height="250" src={logo} alt="Brijwasi Sweet House" className='logo'/>
        </Link>
      </div>
      <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/menu/:category" element={<Menu />} />
      </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;

