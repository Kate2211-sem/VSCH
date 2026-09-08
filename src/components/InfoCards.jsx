export default function InfoCards() {
  return (
    <section className="info-cards-section">
      <div className="info-cards__container">
        
        <div className="info-card info-card--phone">
          <img src="img/hero/phone.png" alt="Телефон" className="info-card__icon" />
          <h3 className="info-card__title">+375 25 655-44-33</h3>
          <p className="info-card__subtitle" data-ru="Запись и информация" data-en="Booking & Info">
            Запись и информация
          </p>
        </div>

        <div className="info-card info-card--accent">
          <img src="img/hero/location.png" alt="Адрес" className="info-card__icon" />
          <h3 className="info-card__title info-card__title--light" data-ru="Ул. Ленинградская, 10" data-en="10 Leningradskaya St.">
            Ул. Ленинградская, 10
          </h3>
          <p className="info-card__subtitle info-card__subtitle--light" data-ru="Вход со двора" data-en="Entrance from courtyard">
            Вход со двора
          </p>
        </div>

        <div className="info-card info-card--hours">
          <img src="img/hero/clock.png" alt="Время" className="info-card__icon" />
          <h3 className="info-card__title">9:00 - 21:00</h3>
          <p className="info-card__subtitle" data-ru="Ежедневно" data-en="Daily">
            Ежедневно
          </p>
        </div>

      </div>
    </section>
  );
}