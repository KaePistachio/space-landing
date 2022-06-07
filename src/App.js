import './App.css';
import starfield from './images/starfield.jpeg';
import nebula1 from './images/nebula1.png';
import nebula2 from './images/nebula2.png';
import nebula3 from './images/nebula3.png';
import nebula4 from './images/nebula4.png';
import { useState } from 'react';

function App() {
  const [ menuOpen, setMenuOpen ] = useState(false);

  return (
    <div className="app">
      <header className="container">
        <div className="navbar">
          <span><h1>{`F & G Dev Solutions`}</h1></span>
          <button 
            className={!menuOpen ? "hamburger" : "hamburger active"} 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <img src={starfield} alt="starfield" className="starfield" />
        <img src={nebula1} alt="nebula" className="nebula1" />
        <img src={nebula2} alt="nebula" className="nebula2" />
        <img src={nebula3} alt="nebula" className="nebula3" />
        <img src={nebula4} alt="nebula" className="nebula4" />
      </header>
    </div>
  );
}

export default App;
