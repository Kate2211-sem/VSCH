export default function ContactsMap() {
  return (
    <section className="contacts">
      <div className="container contacts__container">
        <div className="contacts__content">
          <h2 className="contacts__title" data-ru="Как нас найти" data-en="How to find us">
            Как нас найти
          </h2>

          <div className="contacts__item">
            <p className="contacts__label" data-ru="Адрес" data-en="Address">
              Адрес
            </p>
            <p className="contacts__info" data-ru="Минск, Ленинградская 10" data-en="10 Leningradskaya St, Minsk">
              Минск, Ленинградская 10
            </p>
          </div>

          <div className="contacts__item">
            <p className="contacts__label" data-ru="Телефон" data-en="Phone">
              Телефон
            </p>
            <p className="contacts__info">+375 25 655-44-33</p>
          </div>

          <button className="btn-gradient contacts__btn" data-ru="Записаться онлайн" data-en="Book online">
            Записаться онлайн
          </button>

          <a
            href="https://yandex.ru/maps/..."
            target="_blank"
            rel="noreferrer"
            className="map-link"
            data-ru="Схема прохода"
            data-en="Directions"
          >
            Схема прохода
          </a>
        </div>

        <div className="contacts__map-wrapper">
          <div id="map" className="contacts__map" style={{ position: 'relative', width: '100%', height: '100%' }}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=27.5492%2C53.8927&z=16.5&mode=search&text=Минск%2C%20Ленинградская%20улица%2C%2010"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen={true}
              style={{ display: 'block', border: 'none' }}
              title="Yandex Map"
            ></iframe>

            <div className="map-marker">
              <img src="img/header/ok-logo.png" alt="OK!" />
              <span data-ru="Ленинградская 10" data-en="10 Leningradskaya St.">
                Ленинградская 10
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}