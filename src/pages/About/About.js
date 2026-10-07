import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

export const About = () => {
  return (
    <main className="about-page">

      <section className="about-hero">

        <span className="about-label">
          ABOUT SHOPEX
        </span>

        <h1>
          زیبایی، ساده‌تر از همیشه
        </h1>

        <p>
          SHOPEX یک فروشگاه آنلاین برای پیدا کردن و انتخاب
          آسان محصولات آرایشی، مراقبت از پوست و عطر است.
        </p>

      </section>


      <section className="about-story">

        <div className="about-story-content">

          <span className="about-section-label">
            OUR STORY
          </span>

          <h2>
            انتخابی ساده برای زیبایی روزمره
          </h2>

          <p>
            ما در SHOPEX تلاش کرده‌ایم تجربه‌ای ساده و دلنشین
            برای پیدا کردن محصولات زیبایی ایجاد کنیم؛ جایی که
            بتوانی محصولات مورد نیازت را راحت پیدا کنی،
            اطلاعات آن‌ها را ببینی و با خیال راحت انتخاب کنی.
          </p>

          <p>
            هدف ما این است که خرید محصولات زیبایی از یک فرایند
            شلوغ و پیچیده، به تجربه‌ای ساده و لذت‌بخش تبدیل شود.
          </p>

        </div>

        <div className="about-story-box">

          <span>✦</span>

          <h3>
            SHOPEX
          </h3>

          <p>
            انتخاب کن، مقایسه کن و با اطمینان خرید کن.
          </p>

        </div>

      </section>


      <section className="about-values">

        <div className="about-values-header">

          <span className="about-section-label">
            WHY US
          </span>

          <h2>
            چیزی بیشتر از یک فروشگاه
          </h2>

        </div>


        <div className="about-values-grid">

          <div className="about-value-card">

            <div className="about-value-icon">
              ♡
            </div>

            <h3>
              انتخاب آسان
            </h3>

            <p>
              محصولات را دسته‌بندی کرده‌ایم تا سریع‌تر
              چیزی را که می‌خواهی پیدا کنی.
            </p>

          </div>


          <div className="about-value-card">

            <div className="about-value-icon">
              ✦
            </div>

            <h3>
              تنوع محصولات
            </h3>

            <p>
              مجموعه‌ای متنوع از محصولات زیبایی برای
              نیازها و سلیقه‌های مختلف.
            </p>

          </div>


          <div className="about-value-card">

            <div className="about-value-icon">
              ✓
            </div>

            <h3>
              تجربه مطمئن
            </h3>

            <p>
              تلاش کرده‌ایم تمام مراحل انتخاب و خرید
              تا حد ممکن ساده و شفاف باشد.
            </p>

          </div>

        </div>

      </section>


      <section className="about-cta">

        <span className="about-section-label">
          START SHOPPING
        </span>

        <h2>
          آماده‌ای محصولات مورد علاقه‌ات رو پیدا کنی؟
        </h2>

        <p>
          وارد فروشگاه شو و مجموعه محصولات SHOPEX را ببین.
        </p>

        <Link
          to="/products"
          className="about-cta-btn"
        >
          مشاهده محصولات
        </Link>

      </section>

    </main>
  );
};

export default About;