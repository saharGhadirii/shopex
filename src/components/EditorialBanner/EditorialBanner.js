import React from "react";
import { Link } from "react-router-dom";
import editorialBanner from "../../assets/editorial-banner/editorial-banner.jpg";
import "./EditorialBanner.css";

const EditorialBanner = () => {
  return (
    <section className="editorial-banner">

      <img
        src={editorialBanner}
        alt="مجموعه محصولات زیبایی SHOPEX"
        className="editorial-banner-image"
      />

      <div className="editorial-banner-overlay"></div>

      <div className="editorial-banner-content">

        <span className="editorial-banner-label">
          SHOPEX COLLECTION
        </span>

        <h2>
          زیبایی،
          <br />
          به سبک تو
        </h2>

        <p>
          انتخاب‌های خاص برای روتین زیبایی تو
        </p>

        <Link
          to="/products"
          className="editorial-banner-button"
        >
          کشف مجموعه
          <span>←</span>
        </Link>

      </div>

    </section>
  );
};

export default EditorialBanner;