export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__logo-block">
          <img src="img/header/ok-logo.png" alt="OK!" className="footer__logo" />
          <p className="footer__brand" data-ru="Парикмахерская ОК" data-en="Beauty Salon OK">
            Парикмахерская ОК
          </p>
          <span className="footer__unp">УНП 1964554378</span>
        </div>

        <div className="footer__menu footer__menu--bold">
          <a href="#" data-ru="Женский зал" data-en="Women's Hall">
            Женский зал
          </a>
          <a href="#" data-ru="Мужской зал" data-en="Men's Hall">
            Мужской зал
          </a>
          <a href="#" data-ru="Маникюр" data-en="Manicure">
            Маникюр
          </a>
          <a href="#" data-ru="Brow-сервис" data-en="Brow Service">
            Brow-сервис
          </a>
        </div>

        <div className="footer__menu footer__menu--medium">
          <a href="#" data-ru="О нас" data-en="About Us">
            О нас
          </a>
          <a href="#" data-ru="Стоимость" data-en="Prices">
            Стоимость
          </a>
          <a href="#" data-ru="Вакансии" data-en="Careers">
            Вакансии
          </a>
          <a href="#" data-ru="Контакты" data-en="Contacts">
            Контакты
          </a>
        </div>

        <div className="footer__contacts">
          <div className="footer__phone">
            <img src="img/hero/phone.png" alt="" className="footer__icon" />
            <a href="tel:+375256554433">+375 25 655-44-33</a>
          </div>
          <div className="footer__time">
            <img src="img/hero/clock.png" alt="" className="footer__icon" />
            <span data-ru="9:00 - 21:00" data-en="9:00 AM - 9:00 PM">
              9:00 - 21:00
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}