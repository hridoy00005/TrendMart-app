import { Carousel } from "antd";
import React from "react";
import slide1 from "/img/hero-slide1.jpg";
import slide2 from "/img/hero-slide2.jpg";
import slide3 from "/img/hero-slide3.jpg";
import slide4 from "/img/hero-slide4.jpg";
const Slider = () => {
  return (
    <Carousel autoplay>
      <div className="rounded-se-lg sm:rounded-lg">
        <img
          src={slide1}
          className="h-44 sm:h-60 w-full text-white bg-[#1e1e1e] flex justify-center items-center rounded-lg"
        />
      </div>
      <div>
        <img
          src={slide2}
          className="h-44 sm:h-60 w-full text-white bg-[#1e1e1e] flex justify-center items-center rounded-lg"
        />
      </div>
      <div>
        <img
          src={slide3}
          className="h-44 sm:h-60 w-full text-white bg-[#1e1e1e] flex justify-center items-center rounded-lg"
        />
      </div>
      <div>
        <img
          src={slide4}
          className="h-44 sm:h-60 w-full text-white bg-[#1e1e1e] flex justify-center items-center rounded-lg"
        />
      </div>
    </Carousel>
  );
};

export default Slider;
