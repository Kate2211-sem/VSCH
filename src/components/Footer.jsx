import React from 'react';

const Footer = ({
  phone = "+375 25 655-44-33",
  workingHours = "9:00 - 21:00",
  unp = "УНП 1964554378",
  servicesMenu = [
    { id: 1, title: "Женский зал", href: "#women-hall" },
    { id: 2, title: "Мужской зал", href: "#men-hall" },
    { id: 3, title: "Маникюр", href: "#manicure" },
    { id: 4, title: "Brow-сервис", href: "#brow" },
  ],
  infoMenu = [
    { id: 1, title: "О нас", href: "#about" },
    { id: 2, title: "Стоимость", href: "#prices" },
    { id: 3, title: "Вакансии", href: "#careers" },
    { id: 4, title: "Контакты", href: "#contacts" },
  ]
}) => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__logo-block">
          <img src="img/header/ok-logo.png" alt="OK!" className="footer__logo" />
          <p className="footer__brand">Парикмахерская ОК</p>
          <span className="footer__unp">{unp}</span>
        </div>

        <div className="footer__menu footer__menu--bold">
          {servicesMenu.map((item) => (
            <a key={item.id} href={item.href}>{item.title}</a>
          ))}
        </div>

        <div className="footer__menu footer__menu--medium">
          {infoMenu.map((item) => (
            <a key={item.id} href={item.href}>{item.title}</a>
          ))}
        </div>

        <div className="footer__contacts">
          <div className="footer__phone">
            <img src="img/hero/phone.png" alt="Phone" className="footer__icon" />
            <a href={`tel:${phone.replace(/\s+/g, '')}`}>{phone}</a>
          </div>
          <div className="footer__time">
            <img src="img/hero/clock.png" alt="Clock" className="footer__icon" />
            <span>{workingHours}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;