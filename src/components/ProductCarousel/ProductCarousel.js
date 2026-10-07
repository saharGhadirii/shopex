import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProductCarousel.css";

const ProductCarousel = ({
  products,
  title,
  subtitle,
  label,
  type = "default",
}) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  
  useEffect(() => {

    const handleResize = () => {

      if (window.innerWidth <= 600) {
        setVisibleCount(2);
      }

      else if (window.innerWidth <= 900) {
        setVisibleCount(3);
      }

      else {
        setVisibleCount(4);
      }

    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, []);


  

  useEffect(() => {

    setCurrentIndex(0);

  }, [visibleCount, products.length]);



  const nextSlide = () => {

    setCurrentIndex((prev) => {

      const maxIndex = Math.max(
        products.length - visibleCount,
        0
      );

      if (prev >= maxIndex) {
        return 0;
      }

      return prev + 1;

    });

  };




  const prevSlide = () => {

    setCurrentIndex((prev) => {

      const maxIndex = Math.max(
        products.length - visibleCount,
        0
      );

      if (prev <= 0) {
        return maxIndex;
      }

      return prev - 1;

    });

  };


  

  useEffect(() => {

    if (products.length <= visibleCount) {
      return;
    }

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => {
      clearInterval(interval);
    };

  }, [visibleCount, products.length]);



  const visibleProducts = products.slice(
    currentIndex,
    currentIndex + visibleCount
  );


  return (

    <section className={`product-carousel ${type}`}>


      <div className="product-carousel-header">

        <div>

          <span className="product-carousel-label">
            {label}
          </span>

          <h2>
            {title}
          </h2>

          <p>
            {subtitle}
          </p>

        </div>


        <Link
          to="/products"
          className="product-carousel-see-all"
        >
          مشاهده همه
          <span>←</span>
        </Link>

      </div>



      <div className="product-carousel-wrapper">

        <button
          className="product-carousel-arrow"
          onClick={prevSlide}
          aria-label="محصول قبلی"
        >
          →
        </button>


        <div className="product-carousel-grid">

          {visibleProducts.map((product) => (

            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="product-carousel-card"
            >

              <div className="product-carousel-image">

                <img
                  src={product.image}
                  alt={product.title}
                />


                {type === "discount" && product.discount > 0 && (

                  <span className="product-carousel-badge">
                    {product.discount}% تخفیف
                  </span>

                )}


                {type === "bestseller" && (

                  <span className="product-carousel-badge bestseller">
                    پرفروش
                  </span>

                )}

              </div>


              <div className="product-carousel-info">

                <span className="product-carousel-category">
                  {product.category}
                </span>

                <h3>
                  {product.title}
                </h3>


                <div className="product-carousel-price">

                  <div className="product-carousel-prices">

                    <span className="product-carousel-new-price">
                      {product.price} $
                    </span>


                    {type === "discount" &&
                      product.oldPrice && (

                        <span className="product-carousel-old-price">
                          {product.oldPrice} $
                        </span>

                    )}

                  </div>


                  <span className="product-carousel-card-arrow">
                    ←
                  </span>

                </div>

              </div>

            </Link>

          ))}

        </div>


        <button
          className="product-carousel-arrow"
          onClick={nextSlide}
          aria-label="محصول بعدی"
        >
          ←
        </button>

      </div>


      {products.length > visibleCount && (

        <div className="product-carousel-dots">

          {Array.from({
            length:
              products.length - visibleCount + 1
          }).map((_, index) => (

            <button
              key={index}
              className={
                index === currentIndex
                  ? "product-carousel-dot active"
                  : "product-carousel-dot"
              }
              onClick={() => setCurrentIndex(index)}
              aria-label={`اسلاید ${index + 1}`}
            />

          ))}

        </div>

      )}

    </section>

  );
};

export default ProductCarousel;