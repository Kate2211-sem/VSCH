import React from 'react';

const Manicure = ({
  title = "Маникюр",
  imageSrc = "img/manicure/manicure.png",
  services = [],
  onViewPrices
}) => {
  return (
    <section className="manicure">
      <div className="container">
        <div className="manicure__content">
          <div className="manicure__image">
            <div className="manicure__circle"></div>
            <img src={imageSrc} alt={title} />
          </div>

          <div className="manicure__price-block">
            <h3 className="manicure__title">{title}</h3>

            <div className="manicure__price-list">
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
              className="btn-gradient-pink manicure__btn"
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

export default Manicure;