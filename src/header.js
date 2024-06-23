import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__link">Главная страница</Link>
      <button className="header__button">Войти с помощью телеграм</button>
    </header>
  );
}

export default Header;
