import React from 'react';
import './rentals.css'; 

const Header = () => {
  return (
    <header>
      <img src="colorlogo.png" alt="Rhyno Rentals Logo" className="logo" />
      <h1>Explore Freedom with Rhyno Rentals</h1>
    </header>
  );
};

const RentalOption = ({ title, description }) => {
  return (
    <section className="rental-options">
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
};

const AppStores = () => {
  return (
    <div className="app-stores">
      <a href="#">
      <img src="appp.png" alt="download" />
      </a>
    </div>
  );
};

// const SocialLink = ({ icon, label }) => {
//   return (
//     <li className="t1">
//       <a href="#">
//         <span className="sr-only">{label}</span>
//         <i className={icon}></i>
//       </a>
//     </li>
//   );
// };

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <p className="tag1">Rhyno Rentals. All Rights Reserved.</p>
        <p className="tag2">Follow us on</p>
        <ul className="social-links">
          {/* <SocialLink icon="fab fa-facebook-f" label="Follow Rhyno on Facebook" />
          <SocialLink icon="fab fa-twitter" label="Follow Rhyno on Twitter" />
          <SocialLink icon="fab fa-instagram" label="Follow Rhyno on Instagram" /> */}
        </ul>
      </div>
    </footer>
  );
};

const rental = () => {
  return (
    <div>
      <Header />
      <main>
        <RentalOption
          title="Flexible Rental Options"
          description="Experience the power of Rhyno at your own pace. Choose from our weekly or monthly rentals to test the waters before committing. Visit your nearest authorized dealership to unlock this opportunity."
        />
        <RentalOption
          title="Effortless Campus Commuting"
          description="Redefine your college experience with our hourly Rhyno rentals. Download our user-friendly mobile app and navigate your daily commute with ease. Embrace the freedom to ride and explore a new dimension in sustainable and convenient transportation."
        />
        <section className="download-app">
          <h2>Download the Rhyno Rental App</h2>
          <AppStores />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default rental;