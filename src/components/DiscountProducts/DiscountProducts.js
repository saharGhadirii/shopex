import React from "react";
import { dummyProducts } from "../../data/products";
import ProductCarousel from "../ProductCarousel/ProductCarousel";

const DiscountProducts = () => {

  const discountedProducts = dummyProducts.filter(
    (product) => product.discount > 0
  );

  return (
    <ProductCarousel
      products={discountedProducts}
      label="SPECIAL OFFERS"
      title="پیشنهادهای ویژه"
      subtitle="محصولات محبوب با تخفیف‌های جذاب"
      type="discount"
    />
  );
};

export default DiscountProducts;