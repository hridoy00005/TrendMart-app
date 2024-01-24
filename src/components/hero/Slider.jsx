import { Carousel } from "antd";
import React from "react";

const Slider = () => {
  return (
    <Carousel autoplay >
      <div className="rounded-se-lg sm:rounded-e-lg">
        <h3 className="h-44 sm:h-60  text-white bg-sky-900 flex justify-center items-center rounded-lg sm:rounded-l-none sm:rounded-e-lg">1</h3>
      </div>
      <div>
        <h3  className="h-44 sm:h-60  text-white bg-sky-900 flex justify-center items-center rounded-lg sm:rounded-l-none sm:rounded-e-lg">2</h3>
      </div>
      <div>
        <h3  className="h-44 sm:h-60  text-white bg-sky-900 flex justify-center items-center rounded-lg sm:rounded-l-none sm:rounded-e-lg">3</h3>
      </div>
      <div>
        <h3  className="h-44 sm:h-60  text-white bg-sky-900 flex justify-center items-center rounded-lg sm:rounded-l-none sm:rounded-e-lg">4</h3>
      </div>
    </Carousel>
  );
};

export default Slider;
