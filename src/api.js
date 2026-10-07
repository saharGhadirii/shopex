const getCategory = (product) => {
  const title = product.title.toLowerCase();

  if (
    title.includes("mascara") ||
    title.includes("eyeshadow") ||
    title.includes("eyeliner") ||
    title.includes("eyelash")
  ) {
    return "آرایش چشم";
  }

  if (
    product.category === "beauty" ||
    title.includes("lipstick") ||
    title.includes("nail")
  ) {
    return "آرایش صورت";
  }

  if (product.category === "skin-care") {
    return "مراقبت از پوست";
  }

  if (product.category === "fragrances") {
    return "عطر و ادکلن";
  }

  return null;
};

export const getProducts = async () => {
  const response = await fetch(
    "https://dummyjson.com/products?limit=0"
  );

  if (!response.ok) {
    throw new Error("خطا در دریافت محصولات");
  }

  const data = await response.json();

  return data.products
    .map((product) => {
      const category = getCategory(product);

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

        category: category,

        description: product.description,

        isFeatured: product.rating >= 4,

        isBestSeller: product.rating >= 4.5,

        isNew: false,

        discount: Math.round(
          product.discountPercentage
        ),

        image:
          product.images?.[0] ||
          product.thumbnail,
      };
    })
    .filter((product) => product.category !== null);
};