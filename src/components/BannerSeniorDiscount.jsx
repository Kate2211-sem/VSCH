export default function BannerSeniorDiscount() {
  return (
    <section className="promo-section-second">
      <div className="container">
        <div className="promo-banner">
          <div className="promo-banner__info">
            <p className="promo-text" data-ru="Дарим скидку пенсионерам" data-en="Senior citizen discount">
              Дарим скидку пенсионерам
            </p>
            <p className="promo-target" data-ru="Акция действует ежедневно!" data-en="Valid every day!">
              Акция действует ежедневно!
            </p>
          </div>
          <div className="promo-banner__value">
            <span className="promo-percent">20%</span>
          </div>
          <button
            className="btn-gradient promo-btn"
            data-promo="pensioner"
            data-ru="Записаться сейчас!"
            data-en="Book now!"
          >
            Записаться сейчас!
          </button>
        </div>
      </div>
    </section>
  );
}