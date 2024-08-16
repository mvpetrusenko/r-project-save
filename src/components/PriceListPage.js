import React, { useState } from 'react';
import '../styles/PriceListPage.css'; 
import '../styles/NavBar.css'; 
import NavBar from '../components/NavBar'; 
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 


function PriceListPage() { 

  return (
    <div className="wrapper"> 
    {<Header />}
      <div className="content-container"> 
        {<NavBar />}


        
        <h2>Price List</h2> 
            
            

      </div> 
      {<Footer />}
    </div>
  );
}

export default PriceListPage;