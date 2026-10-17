import React from "react";

import { HeroSlider } from "../../components/HeroSlider/HeroSlider";
import { Categories } from "../../components/Categories/Categories";
import EditorialBanner from "../../components/EditorialBanner/EditorialBanner";
import DiscountProducts from "../../components/DiscountProducts/DiscountProducts";
import BestSellers from "../../components/BestSellers/BestSellers";
import BrandStrip from "../../components/BrandStrip/BrandStrip";
import Newsletter from "../../components/Newsletter/Newsletter";
import "./Home.css";


const Home = () => {
  return (
    <main className="home">

      <HeroSlider />

      <Categories />

      <DiscountProducts />

      <BestSellers />

      <BrandStrip />

   

      <Newsletter />

    </main>
  );
};


export default Home;