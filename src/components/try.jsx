// components/Navbar.jsx
import React from 'react';
import './Navbar.css';
import logo from '../assets/mainlogo.png'; // Путь к вашему логотипу
import cartIcon from '../assets/cart.png'; // Путь к иконке корзины
import userIcon from '../assets/user.png'; // Путь к иконке пользователя

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Логотип и название бренда */}
        <a href="/" className="navbar-brand">
          <img src={logo} alt="Logo" className="logo" />
          <span className="brand-name">TalPets</span>
        </a>

        {/* Пункты меню */}
        <ul className="nav-links">
          <li><a href="#" className="nav-link">Home</a></li>
          <li><a href="#" className="nav-link">Shop</a></li>
        </ul>

        {/* Иконки справа */}
        <div className="navbar-icons">
          <a href="#" className="icon-link">
            <img src={cartIcon} alt="Cart" className="icon" />
          </a>
          <a href="#" className="icon-link">
            <img src={userIcon} alt="User" className="icon" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
