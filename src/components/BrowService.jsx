export default function BrowService() {
  return (
    <section className="brow-service">
      <div className="container">
        <div className="brow-service__content">
          <div className="brow-service__price-block">
            <h3 className="brow-service__title" data-ru="Brow-сервис" data-en="Brow Service">
              Brow-сервис
            </h3>
            <div className="brow-service__price-list">
              <ul className="price-list__names">
                <li data-ru="Коррекция" data-en="Eyebrow shaping">Коррекция </li>
                <li data-ru="Коррекция+Окрашивание" data-en="Shape & Tint">Коррекция+Окрашивание</li>
                <li data-ru="Коррекция+Окрашивание+ДУ" data-en="Shape+Tint+Lamination">Коррекция+Окрашивание+ДУ</li>
                <li data-ru="Перманент" data-en="Permanent makeup">Перманент</li>
              </ul>
              <ul className="price-list__values">
                <li data-ru="15 руб." data-en="15 BYN">15 руб.</li>
                <li data-ru="30 руб." data-en="30 BYN">30 руб.</li>
                <li data-ru="50 руб." data-en="50 BYN">50 руб.</li>
                <li data-ru="250 руб." data-en="250 BYN">250 руб.</li>
              </ul>
            </div>
            <button
              className="btn-gradient-purple brow-service__btn"
              data-ru="Смотреть все цены"
              data-en="View all prices"
            >
              Смотреть все цены
            </button>
          </div>

          <div className="brow-service__image">
            <div className="brow-service__circle"></div>
            <img src="img/brow/brow-service.png" alt="Brow-сервис" />
          </div>
        </div>
      </div>
    </section>
  );
}