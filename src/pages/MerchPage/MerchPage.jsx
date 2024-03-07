// MerchPage.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './MerchPage.css'; // Import the CSS file




// Define your MerchPage component
function MerchPage() {
  return (
    <div>
        
      {/* Header */}
      <h2 className="merch-heading"></h2>

      {/* List of products */}
      <ul className="product-list">
        <li className="product">
          <img src="https://f4.bcbits.com/img/0029676341_10.jpg" alt="Gloin Vinyl" className="product-image" />
          <div className="product-details">
            <h3 className="product-name">"We Found this" 3rd-Place Gold Edition</h3>
            <p className="product-description">140g - 12'' - Limited Edition Colored Vinyl

Includes unlimited streaming of We Found This via the free Bandcamp app, plus high-quality download in MP3, FLAC and more.</p>
            <p className="product-price">$25.00 CAD</p>
            {/* Purchase button */}
            <a href="https://gloinxo.bandcamp.com/album/we-found-this" target="_blank" className="purchase-button">Purchase on Bandcamp</a>
          </div>
        </li>
        {/* Add more products as needed */}
      </ul>
      

      {/* Back button */}
      <Link to="/" className="back-button">Home</Link>
    </div>
   
    
  );
}

export default MerchPage;

