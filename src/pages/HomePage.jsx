// src/pages/HomePage.jsx
import React from 'react';
import '../styles/HomePage.css';
import logo from '../assets/react.svg'; // Export your PDF as SVG or PNG and place in src/assets/logo.svg

export default function HomePage() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <header className="homepage__hero">
        <div className="hero__overlay" />
        <img src={logo} alt="School Logo" className="hero__logo" />
        <h1 className="hero__title">Welcome to Our School</h1>
        <p className="hero__subtitle">Inspiring excellence in every learner</p>
        <a href="/about" className="btn btn--primary hero__cta">Learn More</a>
      </header>

      {/* Latest News Section */}
      <section className="homepage__section">
        <h2 className="section__title">Latest News</h2>
        <div className="cards">
          <article className="card">
            <h3>News Title 1</h3>
            <p>Short excerpt of the news article...</p>
            <a href="/information/news/1" className="card__link">Read More</a>
          </article>
          <article className="card">
            <h3>News Title 2</h3>
            <p>Short excerpt of the news article...</p>
            <a href="/information/news/2" className="card__link">Read More</a>
          </article>
          <article className="card">
            <h3>News Title 3</h3>
            <p>Short excerpt of the news article...</p>
            <a href="/information/news/3" className="card__link">Read More</a>
          </article>
        </div>
        <a href="/information/news" className="btn btn--secondary section__cta">View All News</a>
      </section>

      {/* Blog Preview Section */}
      <section className="homepage__section homepage__section--alt">
        <h2 className="section__title">From Our Blog</h2>
        <div className="cards">
          <article className="card">
            <h3>Blog Post 1</h3>
            <p>Brief overview of the blog post...</p>
            <a href="/blog/1" className="card__link">Read More</a>
          </article>
          <article className="card">
            <h3>Blog Post 2</h3>
            <p>Brief overview of the blog post...</p>
            <a href="/blog/2" className="card__link">Read More</a>
          </article>
          <article className="card">
            <h3>Blog Post 3</h3>
            <p>Brief overview of the blog post...</p>
            <a href="/blog/3" className="card__link">Read More</a>
          </article>
        </div>
        <a href="/blog" className="btn btn--secondary section__cta">Read More Posts</a>
      </section>
    </div>
  );
}
