import './App.css';
import starfield from './images/starfield.jpeg';
import nebula1 from './images/nebula1.png';
import nebula2 from './images/nebula2.png';
import nebula3 from './images/nebula3.png';
import nebula4 from './images/nebula4.png';

function App() {

  return (
    <div className="app">
      <div className="container">
        <img src={starfield} alt="starfield" className="starfield" />
        <img src={nebula1} alt="nebula" className="nebula1" />
        <img src={nebula2} alt="nebula" className="nebula2" />
        <img src={nebula3} alt="nebula" className="nebula3" />
        <img src={nebula4} alt="nebula" className="nebula4" />
      </div>
    </div>
  );
}

export default App;
