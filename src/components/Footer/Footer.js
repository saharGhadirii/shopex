// src/components/Footer.js
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>SHOPEX</h3>
          <p>فروشگاه آنلاین مدرن و راحت برای خرید سریع محصولات مورد نیاز شما.</p>
        </div>
        <div className="footer-links">
          <h4>دسترسی سریع</h4>
          <ul>
           <li>
  <Link to="/">صفحه اصلی</Link>
</li>

<li>
  <Link to="/products">فروشگاه</Link>
</li>

<li>
  <Link to="/cart">سبد خرید</Link>
</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© تمام حقوق برای آنلاین شاپ SHOPEX محفوظ است.</p>
      </div>
    </footer>
  );
};