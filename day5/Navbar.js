import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo1.jpg';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  const closeNavbar = () => {
    setOpenLinks(false);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? 'open' : 'close'}>
        <img src={Logo} alt="Logo" />
      </div>
      <div className="hiddenLinks" onClick={closeNavbar}>
        <Link to="/home">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/">Login</Link>
      </div>
      <div className="rightSide">
        <Link to="/home">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/">Login</Link>
        <button className="toggleButton" onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
