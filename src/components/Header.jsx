import React, { useState } from 'react';

const Header = ({
  lang = 'RU',
  favoritesCount = 0,
  cartCount = 0,
  userName = 'Войти',
  onToggleLang,
  onToggleTheme,
  onOpenBooking,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="container header__container">
        <a href="/" className="header__logo">
          <img src="img/header/ok-logo.png" alt="OK!" className="logo-ok" />
          <img src="img/header/salon-name.png" alt="Парикмахерская" className="logo-text" />
        </a>

        <nav className={`nav ${isMenuOpen ? 'nav--open' : ''}`}>
          <ul className="nav__list">
            <li className="nav__item"><a href="/" className="nav__link">Главная</a></li>
            <li className="nav__item nav__item--dropdown">
              <a href="#prices" className="nav__link">Стоимость</a>
              <ul className="dropdown">
                <li><a href="#men-hall" className="dropdown__link">Мужской зал</a></li>
                <li><a href="#women-hall" className="dropdown__link">Женский зал</a></li>
                <li><a href="#manicure" className="dropdown__link">Маникюр</a></li>
                <li><a href="#brow" className="dropdown__link">Brow-сервис</a></li>
              </ul>
            </li>
            <li className="nav__item"><a href="#shop" className="nav__link">Магазин косметики</a></li>
            <li className="nav__item"><a href="#about" className="nav__link">О нас</a></li>
            <li className="nav__item"><a href="#contacts" className="nav__link">Контакты</a></li>
          </ul>
        </nav>

        <div className="header__right">
          <div className="header__tools">
            <button type="button" className="tool-btn" onClick={onToggleLang}>{lang}</button>
            <button type="button" className="tool-btn" onClick={onToggleTheme}>🌙</button>
          </div>

          <button type="button" className="btn-online" onClick={onOpenBooking}>
            Онлайн запись
          </button>

          <div className="user-zone">
            <a href="#favorites" className="icon-btn">
              <span>❤️</span>
              <span className="badge">{favoritesCount}</span>
            </a>
            <a href="#cart" className="icon-btn">
              <span>🛒</span>
              <span className="badge">{cartCount}</span>
            </a>
            <a href="#profile" className="user-profile">
              <span className="user-name">{userName}</span>
            </a>
          </div>

          <button type="button" className="burger" onClick={toggleMenu} aria-label="Меню">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;