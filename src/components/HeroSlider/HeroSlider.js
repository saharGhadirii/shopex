import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/hero/hero-main.jpg';
import './HeroSlider.css';

export const HeroSlider = () => {
  return (
    <section className="hero-slider">

      <img
        src={heroImage}
        alt="محصولات آرایشی و مراقبت از پوست"
        className="hero-slider-image"
      />

      <div className="hero-slider-overlay"></div>

      <div className="hero-slider-content">

        <span className="hero-slider-label">
          SHOPEX BEAUTY
        </span>

        <h1>
          زیبایی،
          <br />
          از انتخاب تو شروع می‌شود.
        </h1>

        <p>
          محصولات منتخب آرایشی و مراقبت از پوست
          <br />
          برای روتین زیبایی تو
        </p>

        <Link
          to="/products"
          className="hero-slider-button"
        >
          مشاهده محصولات
          <span>←</span>
        </Link>

      </div>

    </section>
  );
};