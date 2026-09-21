import React from 'react';

const Services = ({
  title = "Приходите к нам!",
  subtitle = "Мы работаем ежедневно с 09:00 до 21:00",
  services = [],
  onViewPrices
}) => {
  return (
    <section className="visit-us" id="women-hall">
      <div className="container">
        <div className="visit-us__header">
          <h2 className="visit-us__title">{title}</h2>
          <p className="visit-us__subtitle">{subtitle}</p>
        </div>

        <div className="visit-us__content">
          <div className="visit-us__image">
            <img src="img/women/women-hall.png" alt="Женский зал" />
          </div>

          <div className="visit-us__price-block">
            <h3 className="price-title">Женский зал</h3>

            <div className="price-list">
              <ul className="price-list__names">
                {services.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
              <ul className="price-list__values">
                {services.map((item) => (
                  <li key={item.id}>{item.price}</li>
                ))}
              </ul>
            </div>

            <button 
              type="button" 
              className="btn-gradient visit-us__btn" 
              onClick={onViewPrices}
            >
              Смотреть все цены
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;