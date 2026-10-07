import React from "react";
import { dummyProducts } from "../../data/products";
import ProductCarousel from "../ProductCarousel/ProductCarousel";

const BestSellers = () => {

  const bestSellers = dummyProducts.filter(
    (product) => product.isBestSeller
  );

  return (
    <ProductCarousel
      products={bestSellers}
      label="BEST SELLERS"
      title="پرفروش‌ترین‌ها"
      subtitle="محبوب‌ترین انتخاب‌های مشتریان"
      type="bestseller"
    />
  );
};

export default BestSellers;