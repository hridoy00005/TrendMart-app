import React, { useEffect } from "react";
import Hero from "../components/hero";
import TrendingProducts from "./TrendingProducts";

const Home = () => {
  return (
    <>
      <Hero />
      <TrendingProducts />
    </>
  );
};

export default Home;
