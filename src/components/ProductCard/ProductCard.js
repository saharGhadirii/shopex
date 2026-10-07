import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  return (
    <div className="product-card">

      <div className="product-image-container">

        {product.discount > 0 && (
          <span className="product-discount">
            {product.discount}٪
          </span>
        )}

        <img
          src={product.image}
          alt={product.title}
        />

      </div>

      <div className="product-info">

        <span className="product-category">
          {product.category}
        </span>

        <h3 className="product-title">
          {product.title}
        </h3>

        <div className="product-footer">

          <div className="product-prices">

            <span className="product-price">
              {product.price} $
            </span>

            {product.oldPrice && (
              <span className="product-old-price">
                {product.oldPrice} $
              </span>
            )}

          </div>

          <Link
            to={`/products/${product.id}`}
            className="details-btn"
          >
            مشاهده
          </Link>

        </div>

      </div>

    </div>
  );
};

export default ProductCard;