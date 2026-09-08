export default function InstagramFeed() {
  return (
    <section className="instagram">
      <div className="container">
        <div className="instagram__header">
          <h2 className="instagram__title" data-ru="Мы в инстаграм!" data-en="Follow us on Instagram!">
            Мы в инстаграм!
          </h2>
          <a href="#" className="instagram__link">
            <span data-ru="Подпишись" data-en="Subscribe">
              Подпишись
            </span>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path
                d="M14.8281 7.08524L8.28524 0.542383C8.05609 0.313232 7.68418 0.313232 7.45503 0.542383C7.22588 0.771533 7.22588 1.14344 7.45503 1.37259L13.0039 6.92144H0.585938C0.262332 6.92144 0 7.18377 0 7.50738C0 7.83098 0.262332 8.09331 0.585938 8.09331H13.0039L7.45503 13.6422C7.22588 13.8713 7.22588 14.2432 7.45503 14.4724C7.56961 14.587 7.71961 14.6443 7.86961 14.6443C8.01961 14.6443 8.16961 14.587 8.28418 14.4724L14.827 7.92954C15.0573 7.69924 15.0573 7.31554 14.8281 7.08524Z"
                fill="#FE5B14"
              />
            </svg>
          </a>
        </div>

        <div className="instagram__grid">
          <div className="instagram__item">
            <img src="img/inst/1.png" alt="Inst 1" />
            <div className="instagram__overlay">
              <span>@ok_salon_minsk</span>
            </div>
          </div>
          <div className="instagram__item">
            <img src="img/inst/2.png" alt="Inst 2" />
            <div className="instagram__overlay">
              <span>@ok_salon_minsk</span>
            </div>
          </div>
          <div className="instagram__item">
            <img src="img/inst/3.png" alt="Inst 3" />
            <div className="instagram__overlay">
              <span>Перейти в Instagram →</span>
            </div>
          </div>
          <div className="instagram__item">
            <img src="img/inst/4.png" alt="Inst 4" />
            <div className="instagram__overlay">
              <span>@ok_salon_minsk</span>
            </div>
          </div>
          <div className="instagram__item">
            <img src="img/inst/5.png" alt="Inst 5" />
            <div className="instagram__overlay">
              <span>@ok_salon_minsk</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}