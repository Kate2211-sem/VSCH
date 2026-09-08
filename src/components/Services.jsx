export default function Services() {
  return (
    <section className="visit-us">
      <div className="container">
        <div className="visit-us__header">
          <h2 className="visit-us__title" data-ru="Приходите к нам!" data-en="Visit us!">
            Приходите к нам!
          </h2>
          <p
            className="visit-us__subtitle"
            data-ru="Мы работаем ежедневно с 09:00 до 21:00"
            data-en="We are open daily from 09:00 to 21:00"
          >
            Мы работаем ежедневно с 09:00 до 21:00
          </p>
        </div>

        <div className="visit-us__content">
          <div className="visit-us__image">
            <img src="img/women/women-hall.png" alt="Наш женский зал" />
          </div>

          <div className="visit-us__price-block">
            <h3 className="price-title" data-ru="Женский зал" data-en="Women's Hall">
              Женский зал
            </h3>
            <div className="price-list">
              <ul className="price-list__names">
                <li data-ru="Стрижка модельная" data-en="Model haircut">Стрижка модельная</li>
                <li data-ru="Стрижка кончиков" data-en="Trim">Стрижка кончиков</li>
                <li data-ru="Окрашивание однотонное" data-en="Single-tone coloring">Окрашивание однотонное</li>
                <li data-ru="Окрашивание сложное" data-en="Advanced coloring">Окрашивание сложное</li>
              </ul>
              <ul className="price-list__values">
                <li data-ru="от 20 руб." data-en="from 20 BYN">от 20 руб.</li>
                <li data-ru="15 руб." data-en="15 BYN">15 руб.</li>
                <li data-ru="от 60 руб." data-en="from 60 BYN">от 60 руб.</li>
                <li data-ru="от 110 руб." data-en="from 110 BYN">от 110 руб.</li>
              </ul>
            </div>
            <button className="btn-gradient visit-us__btn" data-ru="Смотреть все цены" data-en="View all prices">
              Смотреть все цены
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}