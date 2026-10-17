
import { dummyProducts } from "./data/products";

const CACHE_KEY = "shopex_products_cache";

export const getProducts = async () => {
  try {
    const response = await fetch(
      "https://dummyjson.com/products?limit=100"
    );

    if (!response.ok) {
      throw new Error("API unavailable");
    }

    const data = await response.json();

    const products = data.products
      .map((product) => {
        const title = product.title.toLowerCase();
        let category = null;

        if (product.category === "beauty") {
          category =
            title.includes("mascara") ||
            title.includes("eyeshadow") ||
            title.includes("eyeliner") ||
            title.includes("eyelash")
              ? "آرایش چشم"
              : "آرایش صورت";
        } else if (product.category === "skin-care") {
          category = "مراقبت از پوست";
        } else if (product.category === "fragrances") {
          category = "عطر و ادکلن";
        }

        if (!category) return null;

        return {
          id: product.id,
          title: product.title,
          price: product.price,
          oldPrice:
            product.discountPercentage > 0
              ? Number(
                  (
                    product.price /
                    (1 - product.discountPercentage / 100)
                  ).toFixed(2)
                )
              : null,
          category,
          description: product.description,
          isFeatured: product.rating >= 4,
          isBestSeller: product.rating >= 4.5,
          isNew: false,
          discount: Math.round(product.discountPercentage || 0),
          image: product.thumbnail || product.images?.[0],
        };
      })
      .filter(Boolean);

    if (products.length > 0) {
      localStorage.setItem(CACHE_KEY, JSON.stringify(products));
      return products;
    }
  } catch (error) {
    console.error("Products API error:", error);
  }

  try {
    const cached = JSON.parse(localStorage.getItem(CACHE_KEY) || "[]");
    if (Array.isArray(cached) && cached.length > 0) {
      return cached;
    }
  } catch (error) {
    console.error("Products cache error:", error);
  }

  return dummyProducts;
};
