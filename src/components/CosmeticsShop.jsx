export default function CosmeticsShop() {
  return (
    <section className="cosmetics-shop">
      <div className="container">
        <div className="cosmetics__content">
          <div className="cosmetics__info">
            <h2 className="cosmetics__title" data-ru="Магазин Косметики" data-en="Cosmetics Shop">
              Магазин Косметики
            </h2>
            <p
              className="cosmetics__text"
              data-ru="Здоровые и ухоженные волосы – то, ради чего работают наши мастера. Нам важно, чтобы Вы были полностью довольны не только стрижкой или окрашиванием, но и состоянием своих волос при дальнейшем домашнем уходе. В Парикмахерской Ок можно приобрести продукты для волос, которые подходят именно для Вас, под Ваш тип волос."
              data-en="Healthy and well-groomed hair is what our masters strive for. It is important to us that you are completely satisfied not only with your haircut or coloring, but also with the condition of your hair during subsequent home care. At Salon OK, you can purchase hair products that are tailored specifically for you and your hair type."
            >
              Здоровые и ухоженные волосы – то, ради чего работают наши мастера. 
              Нам важно, чтобы Вы были полностью довольны не только стрижкой или окрашиванием, 
              но и состоянием своих волос при дальнейшем домашнем уходе. В Парикмахерской Ок 
              можно приобрести продукты для волос, которые подходят именно для Вас, под Ваш тип волос.
            </p>

            <div className="cosmetics__actions">
              <button className="btn-gradient-green" data-ru="Перейти в магазин" data-en="Go to shop">
                Перейти в магазин
              </button>
              <span className="cosmetics__link" data-ru="Цены от поставщика" data-en="Supplier prices">
                Цены от поставщика
              </span>
            </div>

            <div className="cosmetics__decor">
              <div className="circle-big"></div>
              <div className="circle-small"></div>
            </div>
          </div>

          <div className="cosmetics__image">
            <img src="img/cosmetics/cosmetics-shop.png" alt="Магазин косметики" />
          </div>
        </div>
      </div>
    </section>
  );
}