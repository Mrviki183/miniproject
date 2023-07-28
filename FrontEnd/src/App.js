import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pagess/Home';
import Menu from './pagess/Menu';
import About from './pagess/About';
import Login from './pagess/Login';
import store from './pagess/Store';
import Reg from './Registration';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Feed from './pagess/FeedBack';
import { Provider } from 'react-redux';
import PaymentForm from './pagess/Payment';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
      
        
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/reg" element={<Reg />} />
          <Route path='/Feed' element={<Feed/>}/>
          <Route path='/pay' element={<PaymentForm/>}/>

        </Routes>
        <Footer />
     
      </Router>
      </Provider>
    </div>
  );
}

export default App;
