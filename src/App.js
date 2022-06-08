import './App.css';
import { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import starfield from './images/starfield.jpeg';
import nebula1 from './images/nebula4.png';
import nebula2 from './images/nebula2.png';
import nebula3 from './images/nebula1.png';
import nebula4 from './images/nebula3.png';
import kp from './images/kp.png'

function App() {
  const [ isScrolled, setIsScrolled ] = useState(false);
  const [ menuOpen, setMenuOpen ] = useState(false);
  const [ offsetY, setOffsetY ] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  const navbarScrollEffect = () => {
    if (window.scrollY >= 120) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', navbarScrollEffect);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <>
      <header>
        <nav className={isScrolled ? "active" : ""}>
          <div className="container">
            <span className="nav-title">
              <h1>{`F&G Dev Solutions`}</h1>
              <p>
                <Typewriter
                  options={{
                    strings: ['react', 'next.js', 'javascript', 'wordpress', 'ux design'],
                    pauseFor: 500,
                    autoStart: true,
                    loop: true,
                  }}
                />            
              </p>
            </span>
            <button 
              className={!menuOpen ? "hamburger" : "hamburger active"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
        <div className={ !menuOpen ? "menu" : "menu active"}>
          <ul>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>
        <img src={starfield} alt="starfield" className="starfield" style={{ transform: `translateY(${offsetY * 0.75}px)` }}/>
        <img src={nebula1} alt="nebula" className="nebula1" style={{transform: `translateY(${offsetY * 0.6}px)` }}/>
        <img src={nebula2} alt="nebula" className="nebula2" style={{transform: `translateY(${offsetY * 0.3}px)` }}/>
        <img src={nebula3} alt="nebula" className="nebula3" style={{transform: `translateY(${offsetY * 0.9}px)` }} />
        <img src={nebula4} alt="nebula" className="nebula4" style={{transform: `translateY(${offsetY * -0.2}px)` }}/>
        <h1 className="large-title" style={{ transform: `translateY(${offsetY * -1.4}px)` }}>WELCOME</h1>
      </header>

      <section>
        <div className="container">
          <div className="content">
            
              <h2>Bio.</h2>
              <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  Dolore rerum soluta veritatis sunt delectus odio cumque, eum ducimus aspernatur, 
                  fugit quae reprehenderit maiores odit repudiandae. Animi, 
                  inventore voluptas veniam voluptatem minus reiciendis harum nobis voluptatum consectetur, 
                  possimus porro magni ullam?
              </p>
          </div>
          <div className="imgContainer">
            <img src={kp} alt="KP" />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
