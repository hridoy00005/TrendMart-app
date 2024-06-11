import React from "react";

const Title = ({ text, image }) => {
  return (
    <div className="flex mt-2 mb-4 font-bold tracking-wide">
      <img src={image} className="w-8 h-8 mr-2 rounded-lg" /><span className=" text-2xl">{text}</span>
    </div>
  );
};

export default Title;
