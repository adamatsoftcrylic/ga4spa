import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './paths/Home.jsx';
import About from './paths/About';
import Confirmation from './paths/Confirmation';
import { React, useEffect } from 'react';
import TagManager from 'react-gtm-module';

function App() {

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-NR4FJGF' })
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/confirmation"  element={<Confirmation />} />
    </Routes>
  );
}

export default App;
