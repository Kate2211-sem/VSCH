import React from 'react';

const BeautyBlog = ({ 
  title, 
  linkText, 
  readMoreText, 
  posts, 
  onPostClick 
}) => {
  return (
    <section className="beauty-blog">
      <div className="container">
        <div className="blog-header">
          <h2 className="blog-title">{title}</h2>
          <a href="#blog" className="blog-link-all">
            {linkText}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3.33333 8H12.6667" stroke="#FE5B14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 3.33333L12.6667" stroke="#FE5B14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="blog-cards">
          {posts && posts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="card-image">
                <img src={post.image} alt={post.title} />
                {post.badge && <span className="card-badge">{post.badge}</span>}
              </div>
              <div className="card-content">
                <h3 className="card-title">{post.title}</h3>
                <p className="card-text">{post.description}</p>
                <button 
                  className="card-link-btn" 
                  onClick={() => onPostClick && onPostClick(post)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  {readMoreText}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3.33333 8H12.6667" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 3.33333L12.6667" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeautyBlog;