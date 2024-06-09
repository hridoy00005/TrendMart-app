import React from "react";
import Hero from "../components/hero";
import TrendingProducts from "./TrendingProducts";
import { HomeKidsCates, HomeMenCates, HomeWomenCates } from "../components/home";

const Home = () => {
  return (
    <>
      <Hero />
      <TrendingProducts />
      <HomeMenCates />
      <HomeWomenCates />
      <HomeKidsCates />
    </>
  );
};

export default Home;
