// src/components/TutorsPage.js

import React, { useState } from 'react';
import '../styles/TutorsPage.css'; 
import '../styles/NavBar.css'; 
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar'; // Import the NavBar component 
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 


function TutorsPage() { 

  return (
    <div className="wrapper"> 
    {<Header />}
      <div className="content-container"> 
        {<NavBar />}


        <div className="carousel"> 
        
            <h4>Our Tutors</h4> 
            
        </div> 
        <div className="newsLetter">
            <p>Some content</p> 
            
        </div>
      </div> 
      {<Footer />}
    </div>
  );
}

export default TutorsPage;
