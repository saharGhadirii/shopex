import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../../data/products";
import "./Categories.css";

export const Categories = () => {
  return (
    <section className="categories-section">

      <div className="categories-header">
        <span className="categories-label">
          SHOPEX COLLECTION
        </span>

        <h2>
          دسترسی آسان به محصولات
        </h2>

        <p>
          محصولات مورد علاقه‌ات رو سریع‌تر پیدا کن
        </p>
      </div>

      <div className="categories-grid">

        {categories.map((category) => (
          <Link
            to={`/products?category=${encodeURIComponent(category.name)}`}
            className="category-card"
            key={category.id}
          >

            <div className="category-image-wrapper">

              <img
                src={category.image}
                alt={category.name}
                className="category-image"
              />

              <div className="category-overlay">
                <span>
                  مشاهده محصولات
                </span>
              </div>

            </div>

            <div className="category-info">

              <h3>
                {category.name}
              </h3>

              <span className="category-arrow">
                ←
              </span>

            </div>

          </Link>
        ))}

      </div>

    </section>
  );
};