import React from 'react';

const InfoCards = ({ cards = [] }) => {
  return (
    <section className="info-cards-section">
      <div className="info-cards__container">
        {cards.map((card) => (
          <div key={card.id} className={`info-card ${card.modifier}`}>
            <img src={card.icon} alt={card.iconAlt} className="info-card__icon" />
            <h3
              className={`info-card__title ${
                card.titleLight ? 'info-card__title--light' : ''
              }`}
              data-ru={card.title}
              data-en={card.titleEn || card.title}
            >
              {card.title}
            </h3>
            <p
              className={`info-card__subtitle ${
                card.titleLight ? 'info-card__subtitle--light' : ''
              }`}
              data-ru={card.subtitle}
              data-en={card.subtitleEn}
            >
              {card.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoCards;