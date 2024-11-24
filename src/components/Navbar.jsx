import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import cartIcon from '../assets/shoppingcart.svg';
import userIcon from '../assets/account.svg';
import { Link } from "react-router-dom"; // Импортируем Link

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Логотип и название бренда без ссылки */}
        <div className="navbar-brand">
          <a href="/mainpage" className="logo-link">
            <img src={logo} alt="Logo" className="logo"/>
            <span className="brand-name">TalPets</span>
          </a>
        </div>
        {/* Пункты меню */}
        <ul className="nav-links">
          <li><a href="/mainpage" className="nav-link">HOME</a></li>
          <li><a href="#" className="nav-link">SHOP</a></li>
        </ul>

        {/* Иконки справа */}
        <div className="navbar-icons d-flex">
          <a href="/payment" className="icon-link me-3">
            <img src={cartIcon} alt="Cart" className="icon" />
          </a>
          {/* Заменяем <a> на <Link> для иконки пользователя */}
          <Link to="/login" className="icon-link">
            <img src={userIcon} alt="User" className="icon" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

