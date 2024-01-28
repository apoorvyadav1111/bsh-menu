import React from 'react';
import Home from './pages/Home';
import Menu from './pages/Menu';
import {Routes, Route, useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      <div className='header'>
        <h1>Brijwasi Sweet House</h1>
        <h2>Fast Food, Lunch & Dinner</h2>
      </div>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/menu/:category" element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;

