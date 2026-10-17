
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const FALLBACK_IMAGE =
  "https://placehold.co/400x400/f7f0ed/80645c?text=Shopex+Beauty";

export const ProductCard = ({ product }) => {
  const [imageSrc, setImageSrc] = useState(
    product.image || FALLBACK_IMAGE
  );

  const handleImageError = () => {
    if (imageSrc !== FALLBACK_IMAGE) {
      setImageSrc(FALLBACK_IMAGE);
    }
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        {product.discount > 0 && (
          <span className="product-discount">
            {product.discount}٪
          </span>
        )}

        <img
          src={imageSrc}
          alt={product.title || "محصول آرایشی"}
          onError={handleImageError}
          loading="lazy"
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
