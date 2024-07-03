import React, { useState } from 'react';
import './SE03LITE.css'; // Import your CSS file

const SE03Lite = () => {
  const [productImage, setProductImage] = useState('vehicleimages/vehicle1.png');
  const [showDetails, setShowDetails] = useState(false); 

  const toggleDetails = () => {
    const table = document.getElementById('spec-table');
    const details = document.querySelector('.product-details');
    const btn = document.querySelector('.view-more-btn');

    if (table.style.display === 'none') {
      table.style.display = 'table';
      details.style.display = 'block';
      btn.textContent = 'View Less';
    } else {
      table.style.display = 'none';
      details.style.display = 'none';
      btn.textContent = 'View More';
    }
  };

  const productDetails = (
    <div className="product-details">
      <h3>Product Details</h3>
      <p>
        Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhyno. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!
      </p>
      <table id="spec-table">
      <thead>
        <tr>
          <th>Specification</th>
          <th>Rhyno SE03</th>
        </tr>
      </thead>
      <tbody>
        {productSpecifications.map((spec) => (
          <tr key={spec.key}>
            <td>{spec.key}</td>
            <td>{spec.value}</td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  );

  const productSpecifications = [
    { key: 'Battery', value: '2.7Kwh' },
    { key: 'Battery features', value: 'LFP with 1500 cycles\nActive Balancing\nWaterproof (IP67)' },
    { key: 'Battery warranty', value: '3 years' },
    { key: 'Charging time', value: '4 hours (12A)' },
    { key: 'Motor', value: '1500W' },
    { key: 'Max speed', value: '55 km/h' },
    { key: 'Warranty on electronics', value: '1 year' },
    { key: 'Max range (@30km/h)', value: '150 km' },
    { key: 'Max range (@45km/h)', value: '110 km' },
    { key: 'Max range (@full speed)', value: '90 km' },
    { key: 'Other key benefits', value: 'Fire-safe Battery\nRange prediction\nComfortable ride\nStable and safe' },
  ];

  return (
    <div className="se03-lite-page">
      <nav>
      <div class="logo">
          <img src="colorlogo.png" width="250" height="111"/>
        </div>
        <ul>
            <li><a href="http://localhost:3000/products#home">Home</a></li>
            <li><a href="Aboutus.html">About us</a></li>
            <li><a href="productpage.html">Products <i class="fas fa-caret-down"></i></a>
                <ul id="cars">
                    <li><a href="SE03Lite.html">SE03 Lite</a></li>
                    <li><a href="SE03.html">SE03</a></li>
                    <li><a href="SE03Max.html">SE03 Max</a></li>
                    <li><a href="comparison.html">CompareAll</a></li>
                </ul>
            </li>
            <li><a href="Contactus.html">Contact us</a></li>
            <li><a href="payment gateway/index.html">Pre-book now</a></li>
        </ul>
      </nav>

      <div className="flex-box">
        <div className="left">
          <div className="big-img">
            <img src={productImage} alt="Rhyno SE03 Lite" />
          </div>
          <div className="images">
            <div className="small-img">
              <img
                src="vehicleimages/vehicle2.png"
                alt="SE03 Lite (Red)"
                onClick={() => setProductImage('vehicleimages/vehicle2.png')}
              />
            </div>
            <div className="small-img">
              <img
                src="vehicleimages/vehicle3.png"
                alt="SE03 Lite (Blue)"
                onClick={() => setProductImage('vehicleimages/vehicle3.png')}
              />
            </div>
            <div className="small-img">
              <img
                src="vehicleimages/vehicle4.png"
                alt="SE03 Lite (Black)"
                onClick={() => setProductImage('vehicleimages/vehicle4.png')}
              />
            </div>
            <div className="small-img">
              <img
                src="vehicleimages/vehicle5.png"
                alt="SE03 Lite (White)"
                onClick={() => setProductImage('vehicleimages/vehicle5.png')}
              />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="url">Home - Product - SE03 Lite</div>
          <div className="pname">SE03 Lite</div>
          <div className="price">$40</div>
          <div className="container">
            <div className="quantity">
              <p>Quantity :</p>
              <input type="number" min="1" max="5" value="1" />
            </div>
            <br />
            <div className="btn-box">
              <button className="cart-btn">Add to Cart</button>
              <button className="buy-btn">
                <a href="payment gateway/index.html">Buy Now</a>
              </button>
            </div>
            <br />
            <hr />
            <button className="view-more-btn" onClick={toggleDetails}>
              {showDetails ? 'View Less' : 'View More'}
            </button>
            {showDetails && productDetails}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SE03Lite;
