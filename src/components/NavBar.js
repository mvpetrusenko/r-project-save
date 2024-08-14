// src/components/NavBar.js 

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About School</Link></li> 
        <li><Link to="/tutors">Our Tutors</Link></li> 
        <li><Link to="/">Time Table</Link></li>
        <li><Link to="/">Price list</Link></li> 
        <li><Link to="/">Useful links</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
