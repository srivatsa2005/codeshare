import React, { useState, useEffect } from 'react';
import logo from './Black logo for B&W print.png';
import logoa from './colorlogo.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const Header = () => {
  
  return (
    <header>
      <div style={{ display: 'flex' }}>
        <img id="logo" src={logo} alt="Company Logo" />
        <ul type="none" style={{ display: 'flex', marginTop: 12 }}>
          <li><a href="#home">Home</a></li>
          <li>About us</li>
          <li>
            <select tabindex="1">
              <option selected>Products</option>
              <option>Rhyno SE03 Lite</option>
              <option>Rhyno SE03</option>
              <option>Rhyno SE03 Max</option>
            </select>
          </li>
          <li>Contact us</li>
          <li><a href="#Preorder">Pre-book now</a></li>
        </ul>
      </div>
    </header>
  );
};

const ChangeLastWord = () => {
  const [sentence, setSentence] = useState("Let's Elevate Your Ride Experience With Rhyno  Where Superiority Meets Style.");
  const newWords = ['Elegance.', 'Minimalism.', 'Comfort.'];
  let wordIndex = 0;

  const changeWord = () => {
    const words = sentence.split(' ');
    words[words.length - 1] = newWords[wordIndex];
    const newSentence = words.join(' ');
    setSentence(newSentence);
    wordIndex = (wordIndex + 1) % newWords.length;
  };

  useEffect(() => {
    const intervalId = setInterval(changeWord, 2000); // Change every 2 seconds
    return () => clearInterval(intervalId); 
  });

  return (
    <div>
      <p id="home" className='changetext'>{sentence}</p>
    </div>
  );
};

const Products = () => {
    const [bikeColor, setBikeColor] = useState('none'); 
  
    const handleColorChange = (color) => {
      setBikeColor(color); 
    };
  return (
    <div id="bike">
    <nav>
      <img id="brand" src={logoa} alt="Brand Logo" />
    </nav>
    <h2 id="bikename">Rhyno</h2>
    <h1 id="model">SE03</h1>
    <p id="bikeinf">
      Indulge in the perfect harmony of power and range with this Rhyno. Offering an<br />
      exhilarating experience with its robust 2000W motor, it ensures a thrilling ride<br />
      while still delivering an impressive 80-100km range on a single charge. Like<br />
      its counterparts, this machine features the safety assurance of a fire-safe<br />
      advanced LFP battery, along with the comprehensive benefits of owning a Rhyno.<br />
      Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this<br />
      beast is ready to roar on the roads, providing an electrifying journey at every<br />
      turn. Check out the other details below!
    </p>
    <h3 id="clr">Choose your colour</h3>
    <div className="colorselect">
      <div id="red" onClick={() => handleColorChange('red')} /> 
      <div id="blue" onClick={() => handleColorChange('blue')} />
      <div id="black" onClick={() => handleColorChange('black')} />
    </div>
    <button id="bnow">Buy Now !</button>
    {bikeColor !== 'none' && ( 
      <div
        style={{ backgroundImage: `url(bike_${bikeColor}.png)` }}
        className="bike-image" 
      />
    )}
  </div>
);
};

const Productsa = () => {
  const [bikeColor, setBikeColor] = useState('none'); 

  const handleColorChange = (color) => {
    setBikeColor(color); 
  };

  return (
    <div id="bike2">
      <nav id="lite">
      <img id="brand2" src={logoa} alt="Brand Logo" />
        <p id="bikeinf2">
          Indulge in the perfect harmony of power and range with this Rhyno. Offering<br />
          an exhilarating experience with its robust 2000W motor, it ensures a<br />
          thrilling ride while still delivering an impressive 80-100km range on a<br />
          single charge. Like its counterparts, this machine features the safety<br />
          assurance of a fire-safe advanced LFP battery, along with the<br />
          comprehensive benefits of owning a Rhyno. Boasting a formidable<br />
          combination of a 2000W motor and a 2.7kWh battery, this beast is ready to<br />
          roar on the roads, providing an electrifying journey at every turn.<br />
          Check out the other details below!
          <br />
          <button id="bnow2">Buy Now !</button>
        </p>
      </nav>
      <span id="disname">
        <h2 id="bikename2">Rhyno</h2>
        <h1 id="model2">SE03 Lite</h1>
      </span>
      <h3 id="clr2">Choose your colour</h3>
      <div className="colorselect2">
        <div id="red2" onClick={() => handleColorChange('red')} />
        <div id="blue2" onClick={() => handleColorChange('blue')} />
        <div id="black2" onClick={() => handleColorChange('black')} />
      </div>
      {bikeColor !== 'none' && ( 
        <div
          style={{ backgroundImage: `url(bike2_${bikeColor}.png)` }} // color change opt
          className="bike-image"
        />
      )}
    </div>
  );
};

const Productsb = () => {
  const [bikeColor, setBikeColor] = useState('none'); 

  const handleColorChange = (color) => {
    setBikeColor(color); 
  };

  return (
    <div id="bike3">
      <nav id="max">
      <img id="brand3" src={logoa} alt="Brand Logo" />
        <span id="clrslct">
          <h3 id="clr3">Choose your colour</h3>
          <div className="colorselect3">
            <div id="red3" onClick={() => handleColorChange('red')} />
            <div id="blue3" onClick={() => handleColorChange('blue')} />
            <div id="black3" onClick={() => handleColorChange('black')} />
          </div>
        </span>
      </nav>
      <h2 id="bikename3">Rhyno</h2>
      <h1 id="model3">SE03 Max</h1>
      <p id="bikeinf3">
        Indulge in the perfect harmony of power and range with this Rhyno. Offering an<br />
        exhilarating experience with its robust 2000W motor, it ensures a thrilling<br />
        ride while still delivering an impressive 80-100km range on a single charge.<br />
        Like its counterparts, this machine features the safety assurance of a fire-<br />
        safe advanced LFP battery, along with the comprehensive benefits of<br />
        owning a Rhyno. Boasting a formidable combination of a 2000W<br />
        motor and a 2.7kWh battery, this beast is ready to roar on the<br />
        roads, providing an electrifying journey at every turn.<br />
        Check out the other details below!
      </p>
      <button id="bnow3">Buy Now !</button>
      {bikeColor !== 'none' && ( 
        <div
          style={{ backgroundImage: `url(bike3_${bikeColor}.png)` }} 
          className="bike-image"
        />
      )}
    </div>
  );
};

const Preorder = () => {
  return (
    <div id="Preorder">
    <div id="body">
    <section class="container">
        <div class="clip clip1"></div>
        <div class="clip clip2"></div>
        <div class="clip clip3"></div>
      </section>
</div>
<h1 id="preordertxt">Get your hands onto our new model before it's even launched !</h1>
<button id="preorderbtn">Preorder Now !</button>
</div>
  );
};

const Footer = () => {
  return (
    <footer>
      <img id="logo1" src={logo} alt="Company Logo" />
      <p id="logotxt">Elevate your ride Experence<br/> using Rhyno.ev</p>
      <ul id="bottomul">
        <li>Privacy policy</li>
        <li>Refund policy</li>
        <li>Website policy</li>
        <li>Career</li>
        <li><a href='https://srivatsa2005.github.io/rentals-main/'>Rentals</a></li>
      </ul>
      <ul id="bottomul1" type="none">
        <p id="product">Products :</p>
        <li>
          <Link to="/products/se03-lite">Rhyno SE03 Lite</Link>
        </li>
        <li>
          <Link to="/products/se03-max">Rhyno SE03 Max</Link>
        </li>
        <li>
          <Link to="/products">Rhyno SE03</Link>
        </li>
      </ul>
      <div id="bottomul2">
        <p id="fu">Follow us :</p>
        {/* ... your social media links ... */}
      </div>
      <div id="contactbox">
        <h1 className="cs">Contact us :</h1>
        <p id="contact">Email : <a style={{ color: 'rgb(102, 102, 230)' }} href="info@rhyno.in">info@rhyno.in</a></p>
        <p id="contact">Mobile no : +91-9023987528</p>
        <p id="contact">Location : Rhyno Wheels Private limited, Near UG hostel gate #2, Behind PDEU,
          Raisan, Gandhinagar, Gujarat, India.</p>
      </div>
    </footer>
  );
};


const App = () => {
  return (
    <div className="app-container">
    <div className="lines-background">
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
    <div>
      <Header /> {/* Header component */}
      <ChangeLastWord /> {/* Frontline component */}
      <Products />{/* Products component */}
      <Productsa />{/* Products component */}
      <Productsb />{/* Products component */}
      <Preorder />{/* Products component */}
      <Footer /> {/* Footer component */}
    </div>
  </div>
);
};


export default App;