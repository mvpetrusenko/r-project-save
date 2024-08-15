// src/components/MainPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MainPage.css';
import logo from '../assets/images/logo.jpg'; 
import NavBar from '../components/NavBar'; 
import Header from '../components/Header'; 
import Footer from '../components/Footer';

function MainPage() {
  return (
    <div className="wrapper"> 
    {<Header />}
      <main>
        <iframe
          className="introductionVideo"
          src="https://www.youtube.com/embed/kCG5Bb9PfjY?autoplay=1&mute=1&controls=1"
          title="Introduction Video"
        ></iframe>
        <h3>Welcome to BrightFuture English School!</h3>
        <div>
          <p style={{ textAlign: 'center' }}>
            At <mark>BrightFuture English School</mark>, we are dedicated to empowering students with the language skills
          </p>
          <p style={{ textAlign: 'center' }}>and confidence they need to succeed in an ever-changing world. Our experienced teachers,</p>
          <p style={{ textAlign: 'center' }}>engaging curriculum, and supportive community create the perfect environment for learners of all</p>
          <p style={{ textAlign: 'center' }}>ages to thrive. Join us and embark on a journey towards mastering the English language, achieving</p>
          <p style={{ textAlign: 'center' }}>your goals, and unlocking a brighter future.</p>
        </div>
      </main>
      <section>
        <div className="content-container"> 
        {<NavBar />}
          <article className="article-content">
            <div>
              <h1>Empowering Minds, Enriching Lives</h1>
              <p>At BrightFuture English School, we believe that mastering the English language is a gateway to a</p>
              <p>world of opportunities. Our mission is to provide top-quality English education that not only</p>
              <p>enhances language skills but also builds confidence, critical thinking, and cultural awareness.</p>
              <h1>Why Choose Us?</h1>
              <p><b>Experienced Educators:</b> Our team of passionate and experienced teachers is dedicated to helping</p>
              <p>each student reach their full potential. With years of expertise and a commitment to continuous</p>
              <p>learning, our educators employ the latest teaching methods to make learning English engaging and</p>
              <p>effective</p>
              <p><b>Flexible Learning Options:</b> We understand the busy schedules of our students, which is why we offer</p>
              <p>flexible learning options. Choose from in-person classes, online courses, or a hybrid model that</p>
              <p>combines the best of both worlds. Our online platform is user-friendly and provides access to a</p>
              <p>wealth of resources, including video lessons, interactive exercises, and forums.</p>
              <h1>Join Us Today</h1>
              <p>Whether you are looking to improve your English for academic purposes, career advancement, or</p>
              <p>personal growth, BrightFuture English School is here to guide you every step of the way. Join our</p>
              <p>vibrant community of learners and take the first step towards achieving your language goals.</p>
            </div>
          </article>
        </div>
      </section> 
      {<Footer />}
      
    </div>
  );
}

export default MainPage;
