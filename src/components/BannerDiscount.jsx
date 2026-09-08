export default function BannerDiscount() {
  return (
    <div className="container">
      <div className="promo-banner">
        <div className="promo-banner__info">
          <p className="promo-text" data-ru="Дарим скидку" data-en="Discount for">
            Дарим скидку
          </p>
          <p className="promo-target" data-ru="Новым клиентам" data-en="New clients">
            Новым клиентам
          </p>
        </div>
        <div className="promo-banner__value">
          <span className="promo-pre" data-ru="до" data-en="up to">
            до
          </span>
          <span className="promo-percent">20%</span>
        </div>
        <button
          className="btn-gradient promo-btn"
          data-promo="new-client"
          data-ru="Записаться сейчас!"
          data-en="Book now!"
        >
          Записаться сейчас!
        </button>
      </div>
    </div>
  );
}