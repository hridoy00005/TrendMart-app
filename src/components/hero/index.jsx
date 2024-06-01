import React from "react";
import Slider from "./Slider";
// import heroText from "/img/hero-text.jpg";

const Hero = () => {
  return (
    <div className="grid grid-cols-5 sm:mt-5 gap-3 mb-10">
      <div className="col-span-2 bg-[url(/img/hero-text.jpg)] bg-cover rounded-lg">
        <div className="w-full h-full backdrop-blur-sm text-white hidden sm:flex flex-col gap-3 items-center justify-center rounded-lg px-5">
          <h1 className="text-4xl font-bold uppercase">Welcome</h1>
          <p className="text-[10px] sm:text-sm text-center">
            Pick Up Your Daily Essential Fashion Items From Here!
          </p>
        </div>
      </div>
      <div className="col-span-5 sm:col-span-3">
        <Slider />
      </div>
    </div>
  );
};

export default Hero;
