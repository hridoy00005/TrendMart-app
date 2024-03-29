import React, { useState } from "react";
import Slider from "react-slick";

const ProductSlider = ({ images = [], currentImage={}, setCurrentImage = {} }) => {
//   const settings = {
//     className: "center",
//     infinite: true,
//     centerPadding: "60px",
//     speed: 500,
//     slidesToShow: 0,
//     slidesToScroll: 1,
//     dots: true,
//     centerMode: true,
//     focusOnSelect: true,
//   };

  const handleSelect = (e) => {
    const cr = e?.target?.currentSrc;
    setCurrentImage(cr);
  };
  return (
    // <Slider {...settings}>

    // </Slider>
    <div className=" flex gap-2 mb-3 justify-center">
      {images?.map((image, index) => (
        <div
          key={index}
          className={`${
            currentImage === image
              ? "w-[80px] h-auto cursor-pointer hover:scale-105 duration-[.4s]"
              : "w-[80px] h-auto opacity-60 cursor-pointer hover:scale-105 duration-[.4s]"
          }`}
        >
          <img src={image} alt={`Slide ${index + 1}`} onClick={handleSelect} />
        </div>
      ))}
    </div>
  );
};

export default ProductSlider;
