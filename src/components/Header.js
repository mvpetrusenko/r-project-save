import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; 
import logo from '../assets/images/logo.jpg'; 

function Header() {
  return (
    <header className="sticky">
        <div>
          <img src={logo} alt="Logo" className="logo" />
          <h1 style={{ fontFamily: 'cursive', textAlign: 'center' }}>
            BrightFuture English School
          </h1>
        </div>
      </header>
  );
}

export default Header;