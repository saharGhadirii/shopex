import React, { useEffect, useState } from "react";
import {
  categories
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

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);


  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const data = await getProducts();

        setProducts(data);

      } catch (error) {

        console.log(error);

        setError(true);

      } finally {

        setLoading(false);

      }

    };

    fetchProducts();

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
      (a, b) => b.discount - a.discount
    );

  }


  if (loading) {

    return (
      <main className="products-container">

        <h1 className="products-title">
          در حال دریافت محصولات...
        </h1>

      </main>
    );

  }


  if (error) {

    return (
      <main className="products-container">

        <h1 className="products-title">
          دریافت محصولات با خطا مواجه شد.
        </h1>

      </main>
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
          className={
            selectedCategory === "همه"
              ? "active"
              : ""
          }

          onClick={() =>
            setSelectedCategory("همه")
          }
        >
          همه
        </button>


        {categories.map((category) => (

          <button
            key={category.id}

            className={
              selectedCategory === category.name
                ? "active"
                : ""
            }

            onClick={() =>
              setSelectedCategory(category.name)
            }
          >
            {category.name}
          </button>

        ))}

      </div>


      <div className="products-toolbar">

        <span className="products-count">
          {filteredProducts.length} محصول
        </span>


        <select
          className="products-sort"

          value={sortType}

          onChange={(e) =>
            setSortType(e.target.value)
          }
        >

          <option value="default">
            مرتب‌سازی
          </option>

          <option value="cheap">
            ارزان‌ترین
          </option>

          <option value="expensive">
            گران‌ترین
          </option>

          <option value="discount">
            بیشترین تخفیف
          </option>

        </select>

      </div>


      <div className="grid">

        {filteredProducts.map((item) => (

          <ProductCard
            key={item.id}
            product={item}
          />

        ))}

      </div>

    </main>

  );

};


export default Products;