// MerchPage.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './MerchPage.css'; // Import the CSS file

// Define your MerchPage component
function MerchPage() {
  return (
    <div>
      {/* Header */}
      <h2 className="merch-heading">Merchandise</h2>

      {/* List of products */}
      <ul className="product-list">
        <li className="product">
          <img src="product1.jpg" alt="Product 1" className="product-image" />
          <div className="product-details">
            <h3 className="product-name">Product 1</h3>
            <p className="product-description">Description of Product 1</p>
            <p className="product-price">$10.00</p>
          </div>
        </li>
        <li className="product">
          <img src="product2.jpg" alt="Product 2" className="product-image" />
          <div className="product-details">
            <h3 className="product-name">Product 2</h3>
            <p className="product-description">Description of Product 2</p>
            <p className="product-price">$15.00</p>
          </div>
        </li>
        {/* Add more products as needed */}
      </ul>

      {/* Back button */}
      <Link to="/" className="back-button">Back to Home</Link>
    </div>
  );
}

export default MerchPage;
