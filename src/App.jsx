import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import './App.css';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
    
      <div>
          <img src="https://dominionated.ca/wp-content/uploads/2022/10/gloin-we-found-this.jpeg" className="logo" alt="Your Image" />
      </div>
      <h1>GLOIN</h1>
      <div className="card">
        {/* Add Link to navigate to HomePage */}
        <Link to="/HomePage">
          <button>Tour</button>
        </Link>
        <Link to="/AboutPage">
          <button>
            About
          </button>
        </Link>
        <Link to="/MerchPage">
          <button>Merch</button>
        </Link>
        <Link to="/ContactPage">
          <button>Contact</button>
        </Link>
          {/* Rendering the Footer component */}
        <Footer />
      
        
      </div>
    
    </>
  );
}

export default App;

