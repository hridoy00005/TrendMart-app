import React, { useEffect } from "react";
import PublicLayout from "../layouts/PublicLayout";
import Hero from "../components/hero";
import TrendingProducts from "./TrendingProducts";

const Home = () => {
  return (
    <PublicLayout>
      <Hero />
      <TrendingProducts />
    </PublicLayout>
  );
};

export default Home;
