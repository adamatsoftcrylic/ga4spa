import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './paths/Home.jsx';
import About from './paths/About';

function App() {
  return (
    // <h1>HOME</h1>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
