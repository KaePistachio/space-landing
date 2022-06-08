import './App.css';
import { useState, useEffect, useRef } from 'react';
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
  const [ yAxis, setYAxis ] = useState(0);
  const [ xAxis, setXAxis ] = useState(0);
  const welcome = useRef(null)

  const handleScroll = () => setOffsetY(window.pageYOffset);

  const navbarScrollEffect = () => {
    if (window.scrollY >= 120) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  const mousePosition = (e) => {
    const win = window.innerWidth / 2
    const yWin = window.innerHeight / 2
    const x = e.clientX;
    const y = e.clientY;
    const xSum = Math.round((x - win) / 20);
    const ySum = Math.round((y - yWin) / 20)

    setTimeout(() => {
      setXAxis(xSum);
      console.log(xAxis)
      setYAxis(ySum);
      console.log(yAxis)
    }, 500)
      
  }

  useEffect(() => {
    window.addEventListener('scroll', navbarScrollEffect);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', mousePosition)
    return () => window.removeEventListener("scroll", handleScroll);
  }, )

  return (
    <>
      <header>
        <nav className={isScrolled ? "active" : ""}>
          <div className="container">
            <span className="nav-title">
              <h1>{`F&G Dev Solutions`}</h1>
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
        <div className={isScrolled ? "typewriter active" : "typewriter"}>
          <p>
            <Typewriter
              options={{
                strings: ['react', 'next.js', 'javascript', 'wordpress', 'graphQL', 'ux design'],
                pauseFor: 1500,
                autoStart: true,
                loop: true,
              }}
            />   
          </p>         
        </div>
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
        <h1 className="large-title" style={{ transform: `translate(${xAxis}px, ${yAxis}px)` }} ref={welcome} >WELCOME</h1>
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
