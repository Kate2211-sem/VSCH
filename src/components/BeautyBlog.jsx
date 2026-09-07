export default function BeautyBlog() {
  return (
    <section className="beauty-blog">
      <div className="container">
        <div className="blog-header">
          <h2 className="blog-title" data-ru="Бьюти блог" data-en="Beauty Blog">
            Бьюти блог
          </h2>
          <a href="#" className="blog-link-all" data-ru="Смотреть все статьи" data-en="View all articles">
            Смотреть все статьи
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.33333 8H12.6667"
                stroke="#FE5B14"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 3.33333L12.6667 8L8 12.6667"
                stroke="#FE5B14"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className="blog-cards" id="blog-cards-container"></div>

        <div className="blog-pagination" id="blog-pagination"></div>
      </div>
    </section>
  );
}