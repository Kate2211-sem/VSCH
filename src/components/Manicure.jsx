export default function Manicure() {
  return (
    <section className="manicure">
      <div className="container">
        <div className="manicure__content">
          <div className="manicure__image">
            <div className="manicure__circle"></div>
            <img src="img/manicure/manicure.png" alt="Маникюр" />
          </div>

          <div className="manicure__price-block">
            <h3 className="manicure__title" data-ru="Маникюр" data-en="Manicure">
              Маникюр
            </h3>
            <div className="manicure__price-list">
              <ul className="price-list__names">
                <li data-ru="Аппаратный маникюр" data-en="E-file manicure">Аппаратный маникюр</li>
                <li data-ru="Маникюр без покрытия" data-en="Without gel polish">Маникюр без покрытия</li>
                <li data-ru="Маникюр с покрытия" data-en="With gel polish">Маникюр с покрытием</li>
                <li data-ru="Наращивание" data-en="Nail extension">Наращивание</li>
              </ul>
              <ul className="price-list__values">
                <li data-ru="от 20 руб." data-en="from 20 BYN">от 20 руб.</li>
                <li data-ru="15 руб." data-en="15 BYN">15 руб.</li>
                <li data-ru="от 40 руб." data-en="from 40 BYN">от 40 руб.</li>
                <li data-ru="от 60 руб." data-en="from 60 BYN">от 60 руб.</li>
              </ul>
            </div>
            <button
              className="btn-gradient-pink manicure__btn"
              data-ru="Смотреть все цены"
              data-en="View all prices"
            >
              Смотреть все цены
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}