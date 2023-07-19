import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pagess/Home';
import Menu from './pagess/Menu';
import About from './pagess/About';
import Login from './pagess/Login';

import Reg from './Registration';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/reg" element={<Reg />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
