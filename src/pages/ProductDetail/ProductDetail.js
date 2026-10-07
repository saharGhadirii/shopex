import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { dummyProducts } from "../../data/products";
import { CartContext } from "../../context/CartContext";
import "./ProductDetail.css";

export const ProductDetail = () => {

  const { id } = useParams();

  const product = dummyProducts.find(
    (item) => item.id === parseInt(id)
  );

  const { dispatch } = useContext(CartContext);


  if (!product) {
    return (
      <div className="product-detail-container">

        <div className="product-not-found">

          <h2>
            محصول مورد نظر یافت نشد
          </h2>

          <Link
            to="/products"
            className="back-btn"
          >
            بازگشت به محصولات
          </Link>

        </div>

      </div>
    );
  }


  const addToCart = () => {

    dispatch({
      type: "ADD",
      payload: product
    });

  };


  return (
    <main className="product-detail-container">

      <Link
        to="/products"
        className="back-btn"
      >
        ← بازگشت به محصولات
      </Link>


      <div className="product-detail-card">


        <div className="detail-image-container">

          {product.discount > 0 && (
            <span className="detail-discount">
              {product.discount}٪ تخفیف
            </span>
          )}

          <img
            src={product.image}
            alt={product.title}
          />

        </div>


        <div className="detail-info">

          <span className="detail-category">
            {product.category}
          </span>


          <h1 className="detail-title">
            {product.title}
          </h1>


          <p className="detail-description">
            {product.description}
          </p>


          <div className="detail-footer">

            <div className="detail-prices">

              <span className="detail-price">
                {product.price} $
              </span>

              {product.oldPrice && (
                <span className="detail-old-price">
                  {product.oldPrice} $
                </span>
              )}

            </div>


            <button
              className="add-to-cart-btn"
              onClick={addToCart}
            >
              افزودن به سبد خرید
            </button>

          </div>

        </div>

      </div>

    </main>
  );
};


export default ProductDetail;