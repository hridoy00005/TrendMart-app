import React from "react";
import Slider from "./Slider";

const Hero = () => {
  return (
    <div className="grid grid-cols-5 sm:mt-5">
      <div className="col-span-2 bg-sky-950 text-white hidden sm:flex flex-col gap-3 items-center justify-center rounded-s-lg">
        <h1 className="text-4xl font-bold uppercase">Welcome</h1>
        <p className="text-[10px] sm:text-sm ">Pick Up Your Daily Essential Fashion Items From Here!</p>
      </div>
      <div className="col-span-5 sm:col-span-3">
        <Slider />
      </div>
    </div>
  );
};

export default Hero;
