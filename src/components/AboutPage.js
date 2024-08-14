// src/components/AboutPage.js

import React from 'react';
import '../styles/AboutPage.css'; 
import '../styles/NavBar.css';
import NavBar from '../components/NavBar'; // Import the NavBar component 
import Header from '../components/Header'; 
import Footer from '../components/Footer';

function AboutPage() {
  return (
    <div className="wrapper"> 
    {<Header />}
      {/* <header className="sticky">
        <div>
          <img
            src={require('../assets/images/logo.jpg')}
            alt="Logo"
            className="logo"
          />
          <h1 style={{ fontFamily: 'cursive', textAlign: 'center' }}>
            BrightFuture English School
          </h1>
        </div>
      </header>  */}
      <div className="content-container"> 
        {/* <h1><p>About BrightFuture English School</p></h1>  */} 
        {<NavBar />}


        <div className="aboutContent"> 
        
            <h4>Our Mission</h4> 
            <p>At BrightFuture English School, our mission is to empower students of all ages with the language skills and confidence needed to succeed in a globalized world.</p>
            <p>We are dedicated to providing a high-quality English education that goes beyond traditional language learning.</p>
            <p>Our focus is on developing comprehensive language skills, fostering critical thinking</p>
            <p>and building cultural awareness.</p>
         

            <h4>Our Team</h4>
            <p>Our team of highly qualified and passionate educators brings years of experience and expertise to the classroom.</p>
            <p>Each teacher is committed to creating engaging and interactive lessons that inspire and motivate students.</p>
            <p>We emphasize continuous professional development to stay current with the latest teaching methods and technologies.</p> 


            <h4>Our Programs</h4> 
            <p>We offer a diverse range of programs to accommodate different learning styles and schedules:</p> 

            <h4>Join Us</h4> 
            <p>We invite you to join our vibrant community of learners and take the first step towards mastering the English language. </p>
            <p>At BrightFuture English School, you’ll not only gain valuable language skills but also become part of a supportive network</p>
            <p>that encourages personal and academic growth.</p><br></br>
            <p>For more information about our programs and how to get started, please contact us or visit our registration page.</p>
            <p>We look forward to welcoming you to BrightFuture English School!</p>
        </div> 
        <div className="newsLetter">
            <p>Button subscribe to our news letter</p>
        </div>
      </div> 
      {<Footer />}

      {/* <footer>
        <p>&copy; 2024 BrightFuture School</p>
      </footer> */}
    </div>
  );
}

export default AboutPage;
