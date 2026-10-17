
import React, { useEffect, useState } from "react";
import {
  categories,
  dummyProducts,
} from "../../data/products";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import "./Products.css";
import { useSearchParams } from "react-router-dom";
import { getProducts } from "../../api";

export const Products = () => {
  const [searchParams] = useSearchParams();

  const categoryFromUrl = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState(
    categoryFromUrl || "همه"
  );

  const [sortType, setSortType] = useState("default");

 
  const [products, setProducts] = useState(() => {
    try {
      const cached = localStorage.getItem("shopex_products_cache");

      if (cached) {
        const parsedProducts = JSON.parse(cached);

        if (Array.isArray(parsedProducts) && parsedProducts.length > 0) {
          return parsedProducts;
        }
      }
    } catch (error) {
      console.error("خطا در خواندن محصولات ذخیره‌شده:", error);
    }

    return dummyProducts;
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchProducts = async () => {
      try {
        const data = await getProducts();

        if (isMounted && Array.isArray(data) && data.length > 0) {
          setProducts(data);
          setError(false);
        }
      } catch (error) {
        console.error("خطا در دریافت محصولات:", error);

        if (isMounted) {
          setError(true);
        }
      }
    };

    fetchProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  let filteredProducts = products;

  if (selectedCategory !== "همه") {
    filteredProducts = products.filter(
      (product) => product.category === selectedCategory
    );
  }

  if (sortType === "cheap") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => a.price - b.price
    );
  }

  if (sortType === "expensive") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.price - a.price
    );
  }

  if (sortType === "discount") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => (b.discount || 0) - (a.discount || 0)
    );
  }

  return (
    <main className="products-container">
      <h1 className="products-title">
        {selectedCategory === "همه"
          ? "محصولات"
          : selectedCategory}
      </h1>

      <div className="category-filter">
        <button
          className={selectedCategory === "همه" ? "active" : ""}
          onClick={() => setSelectedCategory("همه")}
        >
          همه
        </button>

        {categories.map((category) => (
          <button
            key={category.id}
            className={
              selectedCategory === category.name ? "active" : ""
            }
            onClick={() => setSelectedCategory(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="products-toolbar">
        <span className="products-count">
          {filteredProducts.length} محصول
          {loading ? " (در حال به‌روزرسانی...)" : ""}
        </span>

        <select
          className="products-sort"
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="default">مرتب‌سازی</option>
          <option value="cheap">ارزان‌ترین</option>
          <option value="expensive">گران‌ترین</option>
          <option value="discount">بیشترین تخفیف</option>
        </select>
      </div>

      {error && (
        <p>
          دریافت محصولات جدید ممکن نشد؛ محصولات ذخیره‌شده نمایش داده می‌شوند.
        </p>
      )}

      <div className="grid">
        {filteredProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p>محصولی در این دسته‌بندی پیدا نشد.</p>
      )}
    </main>
  );
};

export default Products;
