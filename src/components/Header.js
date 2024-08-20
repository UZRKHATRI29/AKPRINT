import React, { useState } from "react";
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


const Header = () => {

  const [menuOpen, setMenuopen] = useState(false);

  const toggleMenu = () => {
    setMenuopen(!menuOpen);
  }
    return(
      <header className="header">  
        <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="AK Print Solution Logo" className="logo" />
        </Link>
        <span className="company-name">AK Print Solution</span>

        <button className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </div>
      <nav className={`navigation ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/products" onClick={toggleMenu}>Products</Link>
        <Link to="/about" onClick={toggleMenu}>About</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
            
        </nav>
      </header>
    )
}

export default Header;