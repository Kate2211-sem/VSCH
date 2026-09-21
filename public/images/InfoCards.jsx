

import React, { Component } from 'react';

class InfoCards extends Component {
  render() {
    const {
      cards = [
        {
          id: 1,
          modifier: 'info-card--phone',
          icon: 'img/hero/phone.png',
          iconAlt: 'Телефон',
          title: '+375 25 655-44-33',
          subtitle: 'Запись и информация',
          subtitleEn: 'Booking & Info',
          titleLight: false,
        },
        {
          id: 2,
          modifier: 'info-card--accent',
          icon: 'img/hero/location.png',
          iconAlt: 'Адрес',
          title: 'Ул. Ленинградская, 10',
          titleEn: '10 Leningradskaya St.',
          subtitle: 'Вход со двора',
          subtitleEn: 'Entrance from courtyard',
          titleLight: true,
        },
        {
          id: 3,
          modifier: 'info-card--hours',
          icon: 'img/hero/clock.png',
          iconAlt: 'Время',
          title: '9:00 - 21:00',
          subtitle: 'Ежедневно',
          subtitleEn: 'Daily',
          titleLight: false,
        },
      ],
    } = this.props;
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
  }
}

export default InfoCards;