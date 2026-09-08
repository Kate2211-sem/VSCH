export default function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <a href="/" className="header__logo">
          <img src="img/header/ok-logo.png" alt="OK!" className="logo-ok" />
          <img src="img/header/salon-name.png" alt="Парикмахерская Маникюр" className="logo-text" />
        </a>

        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="/" className="nav__link" data-ru="Главная" data-en="Home">Главная</a>
            </li>
            <li className="nav__item nav__item--dropdown">
              <a href="#" className="nav__link" data-ru="Стоимость" data-en="Prices">Стоимость</a>
              <ul className="dropdown">
                <li><a href="#men-hall" className="dropdown__link" data-ru="Мужской зал" data-en="Men's Hall">Мужской зал</a></li>
                <li><a href="#women-hall" className="dropdown__link" data-ru="Женский зал" data-en="Women's Hall">Женский зал</a></li>
                <li><a href="#manicure" className="dropdown__link" data-ru="Маникюр" data-en="Manicure">Маникюр</a></li>
                <li><a href="#brow" className="dropdown__link" data-ru="Brow-сервис" data-en="Brow Service">Brow-сервис</a></li>
              </ul>
            </li>
            <li className="nav__item">
              <a href="#shop" className="nav__link" data-ru="Магазин косметики" data-en="Cosmetics Shop">Магазин косметики</a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link" data-ru="О нас" data-en="About Us">О нас</a>
            </li>
            <li className="nav__item">
              <a href="#contacts" className="nav__link" data-ru="Контакты" data-en="Contacts">Контакты</a>
            </li>
          </ul>
        </nav>

        <div className="header__right">
          <div className="header__tools">
            <button className="tool-btn" data-tool="lang">RU</button>
            <button id="theme-toggle" className="tool-btn" data-tool="theme">🌙</button>
            <button className="tool-btn" id="access-toggle" data-tool="access">👁</button>
          </div>

          <a href="https://instagram.com" className="social-link" target="_blank" rel="noreferrer">
            <img src="img/header/instagram.png" alt="Instagram" />
          </a>

          <a 
            href="#" 
            className="btn-online" 
            id="btn-book-appointment"
            data-book
            data-ru-full="Онлайн запись" 
            data-ru-short="Запись"
            data-en-full="Book online" 
            data-en-short="Book"
          >
            Онлайн запись
          </a>

          <div className="user-zone">
            <a href="#favorites" className="icon-btn" aria-label="Избранное">
              <span>❤️</span>
              <span className="badge" id="badge-favorites">0</span>
            </a>
            <a href="#cart" className="icon-btn" aria-label="Корзина">
              <span>🛒</span>
              <span className="badge" id="badge-cart">0</span>
            </a>
            <a href="#profile" className="user-profile">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span className="user-name">Войти</span>
            </a>
          </div>

          <button className="burger" aria-label="Меню">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  );
}