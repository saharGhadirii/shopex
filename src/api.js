
import { dummyProducts } from "./data/products";

const CACHE_KEY = "shopex_products_cache";

export const getProducts = async () => {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    const cachedProducts = cached ? JSON.parse(cached) : [];

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    try {
      const response = await fetch(
        "https://dummyjson.com/products?limit=100",
        { signal: controller.signal }
      );

      if (!response.ok) {
        throw new Error("API unavailable");
      }

      const data = await response.json();

      const products = data.products
        .map((product) => {
          const title = (product.title || "").toLowerCase();
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

          const images = Array.isArray(product.images)
            ? product.images
            : [];

          const image =
            images.find(
              (url) =>
                typeof url === "string" &&
                url.startsWith("https://")
            ) ||
            (typeof product.thumbnail === "string" &&
            product.thumbnail.startsWith("https://")
              ? product.thumbnail
              : "");

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
            image,
          };
        })
        .filter(Boolean);

      if (products.length > 0) {
        localStorage.setItem(CACHE_KEY, JSON.stringify(products));
        return products;
      }
    } finally {
      clearTimeout(timeoutId);
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
