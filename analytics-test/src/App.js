import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './paths/Home.jsx';
import About from './paths/About';
import { React, useEffect } from 'react';
import TagManager from 'react-gtm-module';

function App() {

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-M76J5TP' })
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
