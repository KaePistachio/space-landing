import './App.css';
import { useState, useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import starfield from './images/starfield.jpeg';
import starfield2 from './images/starfield2.jpeg';
import nebula1 from './images/nebula4.png';
import nebula2 from './images/nebula2.png';
import nebula3 from './images/nebula1.png';
import nebula4 from './images/nebula3.png';
import linked from './images/linked.png'
import github from './images/github.png'
import kp from './images/kp.png'

function App() {
  const [ isScrolled, setIsScrolled ] = useState(false);
  const [ typewriterScroll, setTypewriterScroll ] = useState(false);
  const [ menuOpen, setMenuOpen ] = useState(false);
  const [ offsetY, setOffsetY ] = useState(0);
  // const [ yAxis, setYAxis ] = useState(0);
  // const [ xAxis, setXAxis ] = useState(0);
  const welcome = useRef(null)

  const handleScroll = () => setOffsetY(window.pageYOffset);

  const navbarScrollEffect = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 120) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  const lilTing = () => {
    const height = window.innerHeight;
    if (window.scrollY >= height) {
      setTypewriterScroll(true);
    } else {
      setTypewriterScroll(false);
    }
  }

  const typewriterScroller = () => {
    if (!isScrolled && !typewriterScroll) {
      return "typewriter"
    } else if (isScrolled && !typewriterScroll) {
      return "typewriter active"
    } else {
      return "typewriter scrolled"
    }
  }

  // const mousePosition = (e) => {
  //   const win = window.innerWidth / 2
  //   const yWin = window.innerHeight / 2
  //   const x = e.clientX;
  //   const y = e.clientY;
  //   const xSum = Math.round((x - win) / 20);
  //   const ySum = Math.round((y - yWin) / 20)

  //   setTimeout(() => {
  //     setXAxis(xSum);
  //     console.log(xAxis)
  //     setYAxis(ySum);
  //     console.log(yAxis)
  //   }, 1500)
      
  // }

  useEffect(() => {
    window.addEventListener('scroll', navbarScrollEffect);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', lilTing);
    // window.addEventListener('mousemove', mousePosition)
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <div className='eve'>
      <header>
        <nav className={isScrolled ? "active" : ""}>
          <div className="container">
            <span className="nav-title">
              <h1>{`F&G Dev Solutions`}</h1>
            </span>
            <div className="icons">
            <a href="https://github.com/KaePistachio" target="_blank" rel="noreferrer"><img src={github} alt="linked in" /></a>
            <a href="https://www.linkedin.com/in/nickwhitedev" target="_blank" rel="noreferrer"><img src={linked} alt="linked in" /></a>
            <button 
              className={!menuOpen ? "hamburger" : "hamburger active"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            </div>
          </div>
        </nav>
        <div className={typewriterScroller()}>
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
        <span className={!menuOpen ? "line" : "line active"} />
        <div className={ !menuOpen ? "menu" : "menu active"}>
          <ul>
            <li>About</li>
            <li>Work</li>
            <li>Contact</li>
            <li>Personal</li>
          </ul>
        </div>
        <img src={starfield} alt="starfield" className="starfield" style={{ transform: `translateY(${offsetY * 0.75}px)` }}/>
        <img src={nebula1} alt="nebula" className="nebula1" style={{transform: `translateX(${offsetY * -0.6}px)` }}/>
        <img src={nebula2} alt="nebula" className="nebula2" style={{transform: `translateY(${offsetY * 0.3}px)` }}/>
        <img src={nebula3} alt="nebula" className="nebula3" style={{transform: `translateY(${offsetY * -0.05}px)` }} />
        <img src={nebula4} alt="nebula" className="nebula4" style={{transform: `translateX(${offsetY * 0.4}px)` }}/>
        <h1 className="large-title" style={{ transform: `translateX(${offsetY * 1.5}px)` }} ref={welcome} >WELCOME</h1>
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

      <div className='work'>
        <img src={starfield2} alt="starfield" className="starfield2" />
        <div className='work-container'>
          <div className='content'>
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
      </div>
    </div>
  );
}

export default App;
