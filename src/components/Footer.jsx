import React from 'react';
import './Footer.css'; /* Ensure this file includes the @import for the Verdana font */
import FacebookIcon from '/src/assets/facebook.svg'; // Путь к иконке Facebook
import InstagramIcon from '/src/assets/instagram.svg'; // Путь к иконке Instagram

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>From Monday-Sunday 24/7</div>
        <div>Ehitajate tee 5, Tallinn 19086, Estonia</div>
        <div><a href="mailto:taltech.pets@taltech.ee">taltech.pets@taltech.ee</a></div>
        <div>+372 555 7777</div>
        <div className="social-media">
          <a href="https://www.facebook.com/ylikool/?locale=et_EE" target="_blank" rel="noopener noreferrer">
            <img src={FacebookIcon} alt="Facebook" className="social-icon1" /> {/* Используем картинку Facebook */}
          </a>
          <a href="https://www.instagram.com/taltech.eesti/?hl=en" target="_blank" rel="noopener noreferrer">
            <img src={InstagramIcon} alt="Instagram" className="social-icon2" /> {/* Используем картинку Instagram */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

